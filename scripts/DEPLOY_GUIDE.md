# One-command VPS deploy

## Run from laptop

From PowerShell in your local repo:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-vps.ps1
```

Optional custom host/port:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-vps.ps1 -VpsHost 187.127.137.183 -SshPort 2222 -RemoteUser root
```

## What this script does

1. Stages `client`, `server`, and `scripts` (skips `node_modules`, `dist`, `.git`).
2. Creates and uploads a deploy zip to VPS.
3. Extracts on VPS.
4. Runs `scripts/vps-deploy.sh` remotely.
5. Server script:
   - restores existing `server/.env`
   - installs dependencies
   - builds frontend
   - stops `httpd` if it grabs port 80
   - validates/restarts nginx
   - restarts PM2 API process

## Preventing "builder page comes back"

- Keep DNS records:
  - `A @ -> 187.127.137.183`
  - `A www -> 187.127.137.183`
  - `A api -> 187.127.137.183`
- Do not publish from Hostinger Website Builder for this domain.
- If someone accidentally changes DNS back to Hostinger builder CDN, the old template page can return.

## Current known backend requirement

API needs a real `MONGO_URI` in `/var/www/kidscodingai/server/.env`.
Without it, `api.kidscodingai.com` can return `502` while frontend still works.
