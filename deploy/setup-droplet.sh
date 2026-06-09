#!/usr/bin/env bash
#
# One-time bootstrap for a fresh DigitalOcean Ubuntu 24.04 droplet.
# Installs Docker + Compose, nginx (reverse proxy), certbot (HTTPS), and a firewall.
#
# Run as root on the droplet:
#   ssh root@<DROPLET_IP>
#   curl -fsSL https://raw.githubusercontent.com/<org>/8bit-site/main/deploy/setup-droplet.sh | bash
# or copy this file over and run:  bash setup-droplet.sh
#
set -euo pipefail

echo "==> Updating apt and installing base packages..."
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y
apt-get install -y ca-certificates curl gnupg ufw nginx

echo "==> Installing Docker Engine + Compose plugin..."
install -m 0755 -d /etc/apt/keyrings
if [ ! -f /etc/apt/keyrings/docker.gpg ]; then
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  chmod a+r /etc/apt/keyrings/docker.gpg
fi
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list
apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
systemctl enable --now docker

echo "==> Installing certbot (for Let's Encrypt HTTPS)..."
apt-get install -y certbot python3-certbot-nginx

echo "==> Configuring firewall (UFW)..."
ufw allow OpenSSH
ufw allow 'Nginx Full'   # opens 80 and 443
ufw --force enable

echo "==> Versions:"
docker --version
docker compose version
nginx -v

cat <<'NEXT'

==============================================================
Droplet bootstrap complete.

Next steps:
  1. Point DNS A records for 8bithawaii.org (and www / staging)
     at this droplet's public IP.
  2. Add the nginx site config (see deploy/nginx-8bithawaii.conf),
     then run certbot to get HTTPS:
        sudo cp deploy/nginx-8bithawaii.conf /etc/nginx/sites-available/8bithawaii
        sudo ln -s /etc/nginx/sites-available/8bithawaii /etc/nginx/sites-enabled/
        sudo rm -f /etc/nginx/sites-enabled/default
        sudo nginx -t && sudo systemctl reload nginx
        sudo certbot --nginx -d 8bithawaii.org -d www.8bithawaii.org
  3. Trigger the GitHub Actions deploy (push to main) to build and
     start the app on port 8010.
==============================================================
NEXT
