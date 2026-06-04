#!/usr/bin/env python3
"""
Restore a Supabase cluster SQL backup into Docker Postgres, excluding Django users.

Usage:
    python scripts/restore_from_backup.py [path/to/backup]

Defaults to db_cluster-20-11-2025@09-00-53.backup in the project root.
"""

from __future__ import annotations

import os
import subprocess
import sys
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_BACKUP = PROJECT_ROOT / "db_cluster-20-11-2025@09-00-53.backup"
ENV_FILES = [PROJECT_ROOT / ".env", PROJECT_ROOT / "vercel_app" / ".env"]

# Django auth tables to skip (user will create a fresh superuser)
EXCLUDED_TABLES = {
    "auth_user",
    "auth_user_groups",
    "auth_user_user_permissions",
    "django_session",
    "django_admin_log",
    "django_migrations",
}

# Import order respects foreign keys
IMPORT_ORDER = [
    "django_content_type",
    "auth_permission",
    "auth_group",
    "auth_group_permissions",
    "main_app_file",
    "learning_file",
    "learning_tag",
    "learning_lesson",
    "learning_lesson_tags",
    "learning_lessonvideo",
    "main_app_member",
    "main_app_socialmedia",
    "main_app_project",
    "main_app_project_tags",
    "client_client",
    "client_project",
    "client_contactperson",
    "client_projectaccount",
    "client_projectupdate",
]


def load_env() -> dict[str, str]:
    env = {}
    for env_file in ENV_FILES:
        if not env_file.exists():
            continue
        for line in env_file.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            env[key.strip()] = value.strip()
    password = env.get("POSTGRES_PASSWORD") or env.get("DATABASE_PASSWORD") or "8bit_local_dev"
    env.setdefault("POSTGRES_DB", "8bit")
    env.setdefault("POSTGRES_USER", "8bit")
    env["POSTGRES_PASSWORD"] = password
    env["DATABASE_HOST"] = "db"
    env["DATABASE_NAME"] = env["POSTGRES_DB"]
    env["DATABASE_USER"] = env["POSTGRES_USER"]
    env["DATABASE_PASSWORD"] = password
    return env


def run(cmd: list[str], *, input_text: str | None = None, check: bool = True, env: dict | None = None) -> subprocess.CompletedProcess:
    print(f"+ {' '.join(cmd)}")
    merged_env = {**load_env(), **(env or {})}
    full_env = {**os.environ, **merged_env}
    return subprocess.run(
        cmd,
        cwd=PROJECT_ROOT,
        input=input_text,
        text=True,
        capture_output=not (input_text is None),
        check=check,
        env=full_env,
    )


def extract_copy_block(content: str, table: str) -> str | None:
    marker = f"COPY public.{table} "
    start = content.find(marker)
    if start == -1:
        return None
    terminator = "\n\\.\n"
    end = content.find(terminator, start)
    if end == -1:
        return None
    return content[start : end + len(terminator)]


def build_project_import_sql(copy_block: str) -> str:
    """Map legacy main_app_project rows into the current schema (adds in_development)."""
    staging_block = copy_block.replace(
        "COPY public.main_app_project ",
        "COPY main_app_project_staging ",
        1,
    )
    return f"""
DROP TABLE IF EXISTS main_app_project_staging;
CREATE TEMP TABLE main_app_project_staging (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    image character varying(100),
    github_link character varying(1000) NOT NULL,
    deploy_link character varying(1000),
    paid_client_project boolean NOT NULL,
    client character varying(255)
);
{staging_block}
INSERT INTO main_app_project (
    id, name, description, image, github_link, deploy_link,
    paid_client_project, client, in_development
)
SELECT
    id, name, description, image, github_link, deploy_link,
    paid_client_project, client, false
FROM main_app_project_staging;
"""


def psql(script: str, user: str, db: str) -> None:
    run(
        ["docker", "compose", "exec", "-T", "db", "psql", "-U", user, "-d", db, "-v", "ON_ERROR_STOP=1"],
        input_text=script,
    )


def main() -> int:
    backup_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_BACKUP
    if not backup_path.exists():
        print(f"Backup not found: {backup_path}", file=sys.stderr)
        return 1

    env = load_env()
    pg_user = env.get("POSTGRES_USER", "8bit")
    pg_db = env.get("POSTGRES_DB", "8bit")

    print("==> Starting Postgres...")
    run(["docker", "compose", "up", "-d", "db"])

    print("==> Waiting for Postgres...")
    for _ in range(60):
        result = run(
            ["docker", "compose", "exec", "-T", "db", "pg_isready", "-U", pg_user, "-d", pg_db],
            check=False,
        )
        if result.returncode == 0:
            break
        time.sleep(1)
    else:
        print("Postgres did not become ready in time.", file=sys.stderr)
        return 1

    print("==> Running Django migrations (empty schema, no users)...")
    run(["docker", "compose", "run", "--rm", "web", "python", "manage.py", "migrate", "--noinput"])

    content = backup_path.read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n")

    truncate_tables = [t for t in IMPORT_ORDER if t not in EXCLUDED_TABLES]
    print("==> Clearing tables before restore (users excluded)...")
    truncate_sql = (
        "SET session_replication_role = replica;\n"
        f"TRUNCATE {', '.join(f'public.{t}' for t in reversed(truncate_tables))} RESTART IDENTITY CASCADE;\n"
        "SET session_replication_role = DEFAULT;\n"
    )
    psql(truncate_sql, pg_user, pg_db)

    print("==> Importing data from backup...")
    for table in IMPORT_ORDER:
        if table in EXCLUDED_TABLES:
            continue

        block = extract_copy_block(content, table)
        if not block:
            print(f"  skip {table} (no data in backup)")
            continue

        print(f"  restore {table}...")
        if table == "main_app_project":
            sql = build_project_import_sql(block)
        else:
            sql = block

        try:
            psql(sql, pg_user, pg_db)
        except subprocess.CalledProcessError as exc:
            print(f"Failed restoring {table}:\n{exc.stderr}", file=sys.stderr)
            return 1

    print("==> Resetting sequences...")
    sequence_sql = """
SELECT setval(pg_get_serial_sequence('public.auth_group', 'id'), COALESCE((SELECT MAX(id) FROM public.auth_group), 1));
SELECT setval(pg_get_serial_sequence('public.auth_group_permissions', 'id'), COALESCE((SELECT MAX(id) FROM public.auth_group_permissions), 1));
SELECT setval(pg_get_serial_sequence('public.auth_permission', 'id'), COALESCE((SELECT MAX(id) FROM public.auth_permission), 1));
SELECT setval(pg_get_serial_sequence('public.django_content_type', 'id'), COALESCE((SELECT MAX(id) FROM public.django_content_type), 1));
SELECT setval(pg_get_serial_sequence('public.main_app_file', 'id'), COALESCE((SELECT MAX(id) FROM public.main_app_file), 1));
SELECT setval(pg_get_serial_sequence('public.main_app_member', 'id'), COALESCE((SELECT MAX(id) FROM public.main_app_member), 1));
SELECT setval(pg_get_serial_sequence('public.main_app_socialmedia', 'id'), COALESCE((SELECT MAX(id) FROM public.main_app_socialmedia), 1));
SELECT setval(pg_get_serial_sequence('public.main_app_project', 'id'), COALESCE((SELECT MAX(id) FROM public.main_app_project), 1));
SELECT setval(pg_get_serial_sequence('public.main_app_project_tags', 'id'), COALESCE((SELECT MAX(id) FROM public.main_app_project_tags), 1));
SELECT setval(pg_get_serial_sequence('public.learning_file', 'id'), COALESCE((SELECT MAX(id) FROM public.learning_file), 1));
SELECT setval(pg_get_serial_sequence('public.learning_lesson', 'id'), COALESCE((SELECT MAX(id) FROM public.learning_lesson), 1));
SELECT setval(pg_get_serial_sequence('public.learning_lesson_tags', 'id'), COALESCE((SELECT MAX(id) FROM public.learning_lesson_tags), 1));
SELECT setval(pg_get_serial_sequence('public.learning_lessonvideo', 'id'), COALESCE((SELECT MAX(id) FROM public.learning_lessonvideo), 1));
SELECT setval(pg_get_serial_sequence('public.learning_tag', 'id'), COALESCE((SELECT MAX(id) FROM public.learning_tag), 1));
"""
    psql(sequence_sql, pg_user, pg_db)

    print("==> Starting web service...")
    run(["docker", "compose", "up", "-d", "web"])

    print()
    print("Restore complete (users excluded).")
    print("Create your admin account:")
    print("  docker compose exec web python manage.py createsuperuser")
    print()
    print("Verify at http://localhost:8000/admin/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
