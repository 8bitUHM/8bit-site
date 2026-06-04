#!/bin/bash
set -e

DB_HOST="${DATABASE_HOST:-db}"
DB_PORT="${DATABASE_PORT:-5432}"
DB_USER="${DATABASE_USER:-8bit}"

wait_for_db() {
  echo "Waiting for Postgres at ${DB_HOST}:${DB_PORT}..."
  until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" > /dev/null 2>&1; do
    sleep 1
  done
  echo "Postgres is ready."
}

# Allow one-off commands, e.g. docker compose run web python manage.py migrate
if [ "$#" -gt 0 ]; then
  wait_for_db
  exec "$@"
fi

wait_for_db
python manage.py migrate --noinput

exec gunicorn vercel_app.wsgi:app \
  --bind 0.0.0.0:8000 \
  --workers 3 \
  --timeout 120
