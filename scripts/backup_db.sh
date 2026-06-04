#!/usr/bin/env bash
# Backup Postgres from the running Docker Compose stack.
#
# Usage (local):
#   ./scripts/backup_db.sh
#
# Usage (production VPS):
#   cd ~/8bit-site && ./scripts/backup_db.sh docker-compose.prod.yml

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

COMPOSE_FILE="${1:-docker-compose.yml}"
BACKUP_DIR="${BACKUP_DIR:-$PROJECT_ROOT/backups}"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"

if [ -f vercel_app/.env ]; then
  set -a
  # shellcheck disable=SC1091
  source vercel_app/.env
  set +a
fi

POSTGRES_DB="${POSTGRES_DB:-8bit}"
POSTGRES_USER="${POSTGRES_USER:-8bit}"

mkdir -p "$BACKUP_DIR"
OUTPUT="$BACKUP_DIR/8bit_${TIMESTAMP}.dump"

echo "==> Backing up ${POSTGRES_DB} to ${OUTPUT}..."
docker compose -f "$COMPOSE_FILE" exec -T db pg_dump \
  -U "$POSTGRES_USER" \
  -d "$POSTGRES_DB" \
  --format=custom \
  --no-owner \
  --no-acl \
  > "$OUTPUT"

echo "Backup saved: $OUTPUT"
