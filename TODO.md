# Project TODO – Abhidhamma Citta Chaithasika Website

Track pending and completed tasks. Update daily before running the snapshot script.

## Active (Next Up)
- Parse `excel_complete_content.txt` into structured JSON for dynamic rendering
- Fill remaining English translations for all `meditationData` entries
- Build interactive comparison UX (multi-select, tags, clear all)
- Add accessibility pass (contrast, focus rings, ARIA labels)
- Add print/PDF view for tables

## Completed (2025-10-20)
- Add language switcher and bilingual attributes in `index.html`
- Implement language switching logic in `script.js`
- Style language switcher and responsive behavior in `styles.css`
- Restructure navbar: title on top, menu below, centered
- Add smooth scroll compact navbar, hide title on scroll
- Increase hero section padding to 200px
- Tune compact spacing after scroll

## Daily Snapshot Instructions
Use PowerShell to save daily copies of `CHANGELOG.md` and `TODO.md` into `DailyLogs/` with the current date.

```powershell
# Create folder if not exists
$proj = "C:\Users\miyuru\Desktop\sith 89"
$dest = Join-Path $proj "DailyLogs"
if (!(Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

# Date stamp (YYYY-MM-DD)
$today = (Get-Date).ToString('yyyy-MM-dd')

Copy-Item (Join-Path $proj 'CHANGELOG.md') (Join-Path $dest ("CHANGELOG_" + $today + '.md')) -Force
Copy-Item (Join-Path $proj 'TODO.md') (Join-Path $dest ("TODO_" + $today + '.md')) -Force
```

## Automate Daily Snapshot (Optional)
Create `scripts/save-daily-logs.ps1` and run it once per day.

