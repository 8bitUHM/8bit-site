#!/usr/bin/env bash
# One-time migration from Supabase Postgres to local Docker Postgres.
#
# Prerequisites:
#   - pg_dump and pg_restore installed locally (or use Docker postgres image)
#   - Supabase credentials in environment or vercel_app/.env
#
# Usage:
#   export SUPABASE_DATABASE_HOST=...
#   export SUPABASE_DATABASE_USER=...
#   export SUPABASE_DATABASE_PASSWORD=...
#   export SUPABASE_DATABASE_NAME=postgres
#   ./scripts/migrate_from_supabase.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

if [ -f vercel_app/.env ]; then
  set -a
  # shellcheck disable=SC1091
  source vercel_app/.env
  set +a
fi

SUPABASE_HOST="${SUPABASE_DATABASE_HOST:-${DATABASE_HOST:-}}"
SUPABASE_USER="${SUPABASE_DATABASE_USER:-${DATABASE_USER:-}}"
SUPABASE_PASSWORD="${SUPABASE_DATABASE_PASSWORD:-${DATABASE_PASSWORD:-}}"
SUPABASE_DB="${SUPABASE_DATABASE_NAME:-postgres}"

POSTGRES_DB="${POSTGRES_DB:-8bit}"
POSTGRES_USER="${POSTGRES_USER:-8bit}"
POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-${DATABASE_PASSWORD:-}}"

BACKUP_FILE="${1:-supabase_backup.dump}"

if [ -z "$SUPABASE_HOST" ] || [ -z "$SUPABASE_USER" ] || [ -z "$SUPABASE_PASSWORD" ]; then
  echo "Error: Set SUPABASE_DATABASE_HOST, SUPABASE_DATABASE_USER, and SUPABASE_DATABASE_PASSWORD"
  echo "       (or legacy DATABASE_HOST / DATABASE_USER / DATABASE_PASSWORD pointing at Supabase)"
  exit 1
fi

if [ -z "$POSTGRES_PASSWORD" ]; then
  echo "Error: Set POSTGRES_PASSWORD in .env"
  exit 1
fi

echo "==> Dumping from Supabase (${SUPABASE_HOST})..."
PGPASSWORD="$SUPABASE_PASSWORD" pg_dump \
  -h "$SUPABASE_HOST" \
  -U "$SUPABASE_USER" \
  -d "$SUPABASE_DB" \
  -p 5432 \
  --format=custom \
  --no-owner \
  --no-acl \
  -f "$BACKUP_FILE"

echo "==> Starting local Postgres container..."
docker compose up -d db

echo "==> Waiting for Postgres..."
until docker compose exec -T db pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB" > /dev/null 2>&1; do
  sleep 1
done

echo "==> Restoring into Docker Postgres (${POSTGRES_DB})..."
cat "$BACKUP_FILE" | docker compose exec -T db pg_restore \
  -U "$POSTGRES_USER" \
  -d "$POSTGRES_DB" \
  --no-owner \
  --no-acl \
  --clean \
  --if-exists || true

echo "==> Running Django migrations..."
docker compose up -d web
docker compose exec -T web python manage.py migrate --noinput

echo ""
echo "Migration complete. Verify:"
echo "  - http://localhost:8000/admin/"
echo "  - Member/project pages and /download/ file URLs"
echo ""
echo "If admin login fails, create a superuser:"
echo "  docker compose exec web python manage.py createsuperuser"
