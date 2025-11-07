$ErrorActionPreference = 'Stop'

$proj = Split-Path -Parent $MyInvocation.MyCommand.Path
# If invoked from project root, override
if (Test-Path (Join-Path (Get-Location) 'CHANGELOG.md')) {
    $proj = Get-Location
}

$projPath = [IO.Path]::GetFullPath($proj)
$daily = Join-Path $projPath 'DailyLogs'
if (!(Test-Path $daily)) { New-Item -ItemType Directory -Path $daily | Out-Null }

$today = (Get-Date).ToString('yyyy-MM-dd')

Copy-Item (Join-Path $projPath 'CHANGELOG.md') (Join-Path $daily ("CHANGELOG_" + $today + '.md')) -Force
Copy-Item (Join-Path $projPath 'TODO.md') (Join-Path $daily ("TODO_" + $today + '.md')) -Force

Write-Host "Saved daily logs to $daily" -ForegroundColor Green
