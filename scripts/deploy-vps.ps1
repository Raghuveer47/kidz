param(
    [string]$VpsHost = "187.127.137.183",
    [int]$SshPort = 2222,
    [string]$RemoteUser = "root"
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path "$PSScriptRoot\..").Path
$stageDir = Join-Path $repoRoot ".deploy_stage"
$archivePath = Join-Path $repoRoot "kidscodingai-deploy.tar.gz"
$remoteArchive = "/root/kidscodingai-deploy.tar.gz"
$remoteExtractDir = "/tmp/kidscodingai-deploy"

Write-Host ("Starting deployment to {0}@{1}:{2}" -f $RemoteUser, $VpsHost, $SshPort)

if (Test-Path $stageDir) { Remove-Item $stageDir -Recurse -Force }
New-Item -ItemType Directory -Path $stageDir | Out-Null

Write-Host "Staging files (excluding node_modules/dist/.git)"
$dirs = @("client", "server", "scripts")
foreach ($dir in $dirs) {
    $source = Join-Path $repoRoot $dir
    if (-not (Test-Path $source)) {
        throw "Missing expected directory: $source"
    }

    $target = Join-Path $stageDir $dir
    New-Item -ItemType Directory -Path $target | Out-Null

    robocopy $source $target /E /XD node_modules dist .git .deploy_stage > $null
    $exitCode = $LASTEXITCODE
    if ($exitCode -ge 8) {
        throw "robocopy failed for $dir with code $exitCode"
    }
}

$checklist = Join-Path $repoRoot "DEPLOYMENT_CHECKLIST.md"
if (Test-Path $checklist) {
    Copy-Item $checklist (Join-Path $stageDir "DEPLOYMENT_CHECKLIST.md")
}

if (Test-Path $archivePath) { Remove-Item $archivePath -Force }

Write-Host "Creating deployment archive"
if (Test-Path $archivePath) { Remove-Item $archivePath -Force }
tar -czf $archivePath -C $stageDir .
if ($LASTEXITCODE -ne 0) {
    throw "Failed to create deployment archive."
}

Write-Host "Uploading archive to VPS"
scp -P $SshPort $archivePath "${RemoteUser}@${VpsHost}:${remoteArchive}"
if ($LASTEXITCODE -ne 0) {
    throw "SCP upload failed."
}

Write-Host "Running remote deploy script"
$remoteCommand = @"
rm -rf $remoteExtractDir && \
mkdir -p $remoteExtractDir && \
tar -xzf $remoteArchive -C $remoteExtractDir && \
bash $remoteExtractDir/scripts/vps-deploy.sh $remoteExtractDir
"@

ssh -p $SshPort "${RemoteUser}@${VpsHost}" $remoteCommand
if ($LASTEXITCODE -ne 0) {
    throw "Remote deployment failed."
}

Write-Host "Cleaning local staging artifacts"
Remove-Item $stageDir -Recurse -Force
Remove-Item $archivePath -Force

Write-Host "Deploy completed successfully."
