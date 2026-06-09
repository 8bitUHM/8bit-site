# Deploying 8bit-site to a fresh DigitalOcean droplet

This walks through standing up the site on a **brand-new** droplet (the old one was
deleted). Deploys themselves are automated by GitHub Actions
(`.github/workflows/server-deploy.yaml`): on every push to `main`, it SSHes into the
droplet, copies the project to `~/8bit-site`, and runs
`docker compose -f docker-compose.prod.yml up -d --build`.

The app's Gunicorn container is published on host port **8010**. nginx on the droplet
terminates HTTP/HTTPS and reverse-proxies to it. Postgres runs in a second container
with a persistent Docker volume (internal only).

New droplet: `178.128.8.242` · Ubuntu 24.04 · SFO2.

---

## Overview / order of operations

1. [Bootstrap the droplet](#1-bootstrap-the-droplet) — Docker, nginx, certbot, firewall
2. [Create an SSH key for GitHub Actions](#2-ssh-key-for-github-actions)
3. [Set GitHub repo secrets](#3-github-repo-secrets)
4. [Point DNS at the new IP](#4-dns)
5. [First deploy](#5-first-deploy) (push to main / run the workflow)
6. [nginx reverse proxy + HTTPS](#6-nginx--https)
7. [Restore the database & create an admin](#7-restore-database--create-admin)
8. [Backups (optional but recommended)](#8-backups)
9. [Troubleshooting](#troubleshooting)

---

## 1. Bootstrap the droplet

SSH in as root (you added your personal SSH key when creating the droplet):

```bash
ssh root@178.128.8.242
```

Run the bootstrap script. Either copy `deploy/setup-droplet.sh` over with `scp`, or paste
its contents and run it. It installs Docker + Compose, nginx, certbot, and a UFW firewall
(opens SSH + HTTP/HTTPS):

```bash
# from your laptop, in the repo root:
scp deploy/setup-droplet.sh root@178.128.8.242:/root/
ssh root@178.128.8.242 "bash /root/setup-droplet.sh"
```

> The GitHub Actions workflow runs `sudo docker compose ...`. Logging in as **root**
> (the DigitalOcean default) is the simplest path since root already has sudo. If you
> prefer a non-root deploy user, create one with passwordless sudo and add the deploy
> public key (step 2) to its `~/.ssh/authorized_keys`, then use that username in
> `PROD_SSH_USER`.

---

## 2. SSH key for GitHub Actions

GitHub Actions needs its own key pair to log into the droplet. Generate one **on your
laptop** (do not reuse your personal key):

```bash
ssh-keygen -t ed25519 -C "github-actions-8bit" -f ~/.ssh/8bit_deploy -N ""
```

Add the **public** key to the droplet's authorized keys (for the user the workflow logs
in as — `root` if you followed the simple path):

```bash
ssh-copy-id -i ~/.ssh/8bit_deploy.pub root@178.128.8.242
# or manually:
# cat ~/.ssh/8bit_deploy.pub | ssh root@178.128.8.242 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Verify it works without a password:

```bash
ssh -i ~/.ssh/8bit_deploy root@178.128.8.242 "echo ok"
```

The **private** key (`~/.ssh/8bit_deploy`) goes into a GitHub secret next.

---

## 3. GitHub repo secrets

In GitHub: **Settings → Secrets and variables → Actions → New repository secret**. Set:

| Secret | Value |
|--------|-------|
| `PROD_SSH_HOST` | `178.128.8.242` |
| `PROD_SSH_USER` | `root` (or your deploy user) |
| `PROD_SSH_PRIVATE_KEY` | full contents of `~/.ssh/8bit_deploy` (the private key, incl. BEGIN/END lines) |
| `PROJECT_SECRET` | a long random Django secret key |
| `POSTGRES_PASSWORD` | a strong password for the Postgres container |

Generate values quickly:

```bash
# Django secret key
python -c "import secrets; print(secrets.token_urlsafe(64))"
# Postgres password
openssl rand -base64 24
```

> `PROD_SSH_HOST` is also injected into Django's `ALLOWED_HOSTS` by the workflow, so the
> site will answer on the raw IP as well as `8bithawaii.org` / `staging.8bithawaii.org`.

---

## 4. DNS

Point the domain at the new IP (registrar or DigitalOcean **Networking → Domains**):

| Type | Name | Value |
|------|------|-------|
| A | `8bithawaii.org` (`@`) | `178.128.8.242` |
| A | `www` | `178.128.8.242` |
| A | `staging` (if used) | `178.128.8.242` |

Wait for propagation (`dig +short 8bithawaii.org` should return the new IP) before
running certbot in step 6.

---

## 5. First deploy

Trigger the workflow by pushing to `main` (or **Actions → 8bit Site Deploy to VPS →
Run workflow** if it allows manual dispatch). This builds the image on the droplet,
runs DB migrations (via the entrypoint), and starts both containers.

Confirm it's up on the droplet:

```bash
ssh root@178.128.8.242
cd ~/8bit-site
sudo docker compose -f docker-compose.prod.yml ps
curl -I http://127.0.0.1:8010      # expect an HTTP response from Django
```

---

## 6. nginx + HTTPS

The repo's deploy files were copied to `~/8bit-site` by the workflow, so the nginx
config is already on the droplet. Install it and reload nginx:

```bash
cd ~/8bit-site
sudo cp deploy/nginx-8bithawaii.conf /etc/nginx/sites-available/8bithawaii
sudo ln -sf /etc/nginx/sites-available/8bithawaii /etc/nginx/sites-enabled/8bithawaii
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Now `http://8bithawaii.org` should serve the site. Add HTTPS with certbot (it edits the
nginx config to add the 443 server block and an HTTP→HTTPS redirect, and sets up
auto-renewal):

```bash
sudo certbot --nginx -d 8bithawaii.org -d www.8bithawaii.org
# add staging too if its DNS points here:
# sudo certbot --nginx -d staging.8bithawaii.org
```

`CSRF_TRUSTED_ORIGINS` in `vercel_app/settings.py` already lists the https domains, so
admin login / forms work once HTTPS is live.

---

## 7. Restore database & create admin

A fresh droplet starts with an empty database. If you have a backup, restore it; either
way create a superuser.

**Restore from a `pg_dump` custom-format `.dump`/`.backup`** (copy it to the droplet
first with `scp`):

```bash
cd ~/8bit-site
# copy file into the db container, then restore
sudo docker compose -f docker-compose.prod.yml cp ./8bit_backup.dump db:/tmp/restore.dump
sudo docker compose -f docker-compose.prod.yml exec db \
  pg_restore -U 8bit -d 8bit --no-owner --no-acl --clean --if-exists /tmp/restore.dump
```

> Restoring from an old **Supabase** cluster backup instead? Use the documented helper:
> `python scripts/restore_from_backup.py <file>.backup` (see the main `readme.md` →
> "Migrating from Supabase"). That path skips the `auth_user` table, so you create a
> fresh admin below.

**Create an admin account:**

```bash
cd ~/8bit-site
sudo docker compose -f docker-compose.prod.yml exec web python manage.py createsuperuser
```

Log in at `https://8bithawaii.org/admin/`.

---

## 8. Backups

Set up a daily Postgres backup cron job on the droplet:

```bash
crontab -e
```

Add (keeps dumps in `~/8bit-site/backups/`):

```cron
0 2 * * * cd /root/8bit-site && ./scripts/backup_db.sh docker-compose.prod.yml >> /var/log/8bit-backup.log 2>&1
```

---

## Troubleshooting

- **Workflow fails at SSH** — confirm `PROD_SSH_PRIVATE_KEY` is the full private key,
  the matching public key is in the droplet's `~/.ssh/authorized_keys`, and
  `PROD_SSH_USER`/`PROD_SSH_HOST` are correct. Test: `ssh -i ~/.ssh/8bit_deploy <user>@178.128.8.242`.
- **`sudo: a password is required`** — the deploy user lacks passwordless sudo. Use
  `root`, or add `<user> ALL=(ALL) NOPASSWD:ALL` via `sudo visudo`.
- **502 Bad Gateway from nginx** — the app container isn't up or not on 8010. Check
  `sudo docker compose -f docker-compose.prod.yml ps` and `... logs web`, and
  `curl -I http://127.0.0.1:8010`.
- **`DisallowedHost` / 400** — the host isn't in `ALLOWED_HOSTS`. The workflow adds
  `PROD_SSH_HOST` + the configured domains; for any other hostname set
  `ALLOWED_HOSTS_EXTRA` (comma-separated) in the generated `.env` / workflow.
- **CSRF errors on admin login over HTTPS** — make sure you're hitting the `https://`
  domain (it's in `CSRF_TRUSTED_ORIGINS`), not the raw IP.
- **certbot fails** — DNS must resolve to this droplet and ports 80/443 must be open
  (`sudo ufw status`) before requesting a certificate.
