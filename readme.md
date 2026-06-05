# 8bit Website

Django 4.2 with containerized PostgreSQL and Django Rest Framework.

1. [Project Structure](#project-structure)
2. [Getting the app running (Docker)](#getting-the-app-running-docker)
3. [Development](#development)
4. [Production deployment](#production-deployment)
5. [Database backup](#database-backup)
6. [Migrating from Supabase](#migrating-from-supabase)

## Project Structure

The project is organized into several components:

- **8bit-site**: The main Django project directory.

  - **db_file_storage/**: File storage that stores files as raw bytes in the database.

  - **vercel_app/**: Main or 'host' app
    - **settings.py**: Configuration settings for the project.
    - **urls.py**: URL configuration for the project.
  - **main_app/**: main app
    - **frontend/**: React project source files
    - **migrations/**: Database migration files.
    - **static/**: Static files (CSS, JavaScript, images).
    - **templates/**: HTML templates.

  - **learning/**: Learning portal app with its own frontend.

  - **manage.py**: Django's command-line utility.
  - **requirements.txt**: Python dependencies.
  - **docker-compose.yml**: Local dev stack (web + Postgres).
  - **docker-compose.prod.yml**: Production stack for the VPS.

## Getting the app running (Docker)

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
- Python 3.12 (optional, for native dev without containerizing the web app)

### Setup

1. Copy environment variables:

   ```bash
   cp .env.example vercel_app/.env
   ```

   Edit `vercel_app/.env` and set:
   - `PROJECT_SECRET` — Django secret key
   - `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` — for the Postgres container
   - `DATABASE_PASSWORD` — same value as `POSTGRES_PASSWORD`
   - `DATABASE_NAME`, `DATABASE_USER` — should match the `POSTGRES_*` values

2. For local Django settings (admin UI builder, debug toolbar), create `vercel_app/local_settings.py`:

   ```python
   DEBUG = True
   ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
   ```

3. Start the full stack:

   ```bash
   docker compose up --build
   ```

   The app runs at http://localhost:8010 (port 8010 avoids conflicting with a local `runserver` on 8000)

4. Create an admin user (first run only):

   ```bash
   docker compose exec web python manage.py createsuperuser
   ```

## Development

### Option A: Full Docker stack

```bash
docker compose up --build
```

Frontends are built into the image at build time. Rebuild after frontend changes:

```bash
docker compose up --build web
```

### Option B: Postgres in Docker, app + frontends on the host

Useful for faster frontend hot reload.

1. Start only Postgres:

   ```bash
   docker compose up -d db
   ```

2. In `vercel_app/.env`, set `DATABASE_HOST=localhost`.

3. Install Python deps and run Django:

   ```bash
   python -m venv venv
   .\venv\Scripts\Activate.ps1   # Windows
   pip install -r requirements.txt
   python manage.py runserver
   ```

4. In separate terminals, run frontend watchers:

   ```bash
   npm --prefix main_app/frontend run dev
   npm --prefix learning/frontend run dev
   ```

5. After frontend changes, collect static files:

   ```bash
   python manage.py collectstatic --noinput
   ```

## Production deployment

Production runs on the VPS via GitHub Actions (`.github/workflows/server-deploy.yaml`).

On push to `main`, the workflow copies the project to `~/8bit-site` on the VPS and runs:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

The web app is exposed on port **8010** (mapped to Gunicorn on 8000 inside the container). Postgres is internal-only with a persistent Docker volume.

### Required GitHub secrets

| Secret | Description |
|--------|-------------|
| `PROJECT_SECRET` | Django secret key |
| `POSTGRES_PASSWORD` | Postgres password (used by db + web services) |
| `PROD_SSH_PRIVATE_KEY` | SSH key for VPS |
| `PROD_SSH_USER` | SSH username |
| `PROD_SSH_HOST` | VPS hostname or IP |

Remove legacy Supabase secrets (`DATABASE_HOST`, `DATABASE_USER`, `DATABASE_PASSWORD`) after migration.

## Database backup

Backups use `pg_dump` from the running Postgres container:

```bash
./scripts/backup_db.sh
```

Production (on VPS):

```bash
cd ~/8bit-site
./scripts/backup_db.sh docker-compose.prod.yml
```

### Recommended cron job (VPS)

Run daily at 2 AM, keep backups outside the container:

```cron
0 2 * * * cd /home/YOUR_USER/8bit-site && ./scripts/backup_db.sh docker-compose.prod.yml >> /var/log/8bit-backup.log 2>&1
```

Ensure `~/8bit-site/backups/` has enough disk space.

## Migrating from Supabase

### Restore from a `.backup` file (recommended)

If you have a Supabase cluster SQL backup (e.g. `db_cluster-20-11-2025@09-00-53.backup`):

1. Ensure Docker Desktop is running.
2. Copy `.env.example` to `vercel_app/.env` and set `POSTGRES_PASSWORD` / `DATABASE_PASSWORD`.
3. Run the restore script (imports all app data; **skips users** — you create a fresh superuser):

   ```bash
   python scripts/restore_from_backup.py db_cluster-20-11-2025@09-00-53.backup
   ```

4. Create your admin account:

   ```bash
   docker compose exec web python manage.py createsuperuser
   ```

The script restores members, projects, learning content, uploaded files (`db_file_storage`), client portal data, and auth groups/permissions. It excludes `auth_user`, sessions, and admin logs.

### Live Supabase dump (legacy)

If Supabase credentials still work:

```bash
./scripts/migrate_from_supabase.sh
```
