#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:-}"
APP_DIR="/var/www/kidscodingai"
BACKUP_ENV="/tmp/kidscodingai-server-env.backup"

if [[ -z "$SOURCE_DIR" || ! -d "$SOURCE_DIR" ]]; then
  echo "Usage: bash scripts/vps-deploy.sh <extracted_source_dir>"
  exit 1
fi

echo "[1/8] Preparing target directories"
mkdir -p "$APP_DIR"

echo "[2/8] Preserving existing server .env if present"
if [[ -f "$APP_DIR/server/.env" ]]; then
  cp "$APP_DIR/server/.env" "$BACKUP_ENV"
fi

echo "[3/8] Replacing app source"
rm -rf "$APP_DIR/client" "$APP_DIR/server" "$APP_DIR/scripts"
cp -a "$SOURCE_DIR/client" "$APP_DIR/client"
cp -a "$SOURCE_DIR/server" "$APP_DIR/server"
cp -a "$SOURCE_DIR/scripts" "$APP_DIR/scripts"

if [[ -f "$SOURCE_DIR/DEPLOYMENT_CHECKLIST.md" ]]; then
  cp -a "$SOURCE_DIR/DEPLOYMENT_CHECKLIST.md" "$APP_DIR/DEPLOYMENT_CHECKLIST.md"
fi

echo "[4/8] Restoring .env (or creating from example)"
if [[ -f "$BACKUP_ENV" ]]; then
  cp "$BACKUP_ENV" "$APP_DIR/server/.env"
else
  cp "$APP_DIR/server/.env.example" "$APP_DIR/server/.env"
fi

echo "[5/8] Installing backend dependencies"
cd "$APP_DIR/server"
npm install

echo "[6/8] Installing and building frontend"
cd "$APP_DIR/client"
npm install

# Keep production API URL predictable across deployments.
if [[ ! -f "$APP_DIR/client/.env.production" ]]; then
  echo "VITE_API_BASE_URL=https://api.kidscodingai.com" > "$APP_DIR/client/.env.production"
fi

# Run Vite via node to avoid executable-bit issues on some VPS setups.
node "$APP_DIR/client/node_modules/vite/bin/vite.js" build

echo "[7/8] Ensuring web server starts cleanly"
# Prevent Apache from reclaiming :80 and breaking nginx.
systemctl stop httpd 2>/dev/null || true
pkill -9 httpd 2>/dev/null || true

nginx -t
systemctl enable --now nginx
systemctl restart nginx

echo "[8/8] Restarting API process"
cd "$APP_DIR/server"
if pm2 describe kidscodingai-api >/dev/null 2>&1; then
  pm2 restart kidscodingai-api
else
  pm2 start server.js --name kidscodingai-api
fi
pm2 save

echo "Deployment completed."
echo "Note: API will return 502 until server/.env has a valid MONGO_URI."
