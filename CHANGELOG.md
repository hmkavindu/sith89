# Project Change Log – Abhidhamma Citta Chaithasika Website

Project path: `C:\Users\miyuru\Desktop\sith 89`

This log records meaningful edits and test commands while building the site. Use `scripts/save-daily-logs.ps1` to snapshot the current `CHANGELOG.md` and `TODO.md` daily into `DailyLogs/`.

## 2025-10-20

### Implemented
- Bilingual support (Sinhala/English) with language switcher.
- Navbar restructure: title at top (`.nav-header`/`.nav-title`), menu centered below.
- Smooth navbar behavior on scroll (compact mode, title hides).
- Language switching across nav, hero, table, analysis, comparison, about, footer.
- Table/selection/comparison use translated labels dynamically.
- Hero vertical padding increased to 200px top and bottom.
- Spacing tuned for compact navbar; mobile offsets adjusted.

### Files Changed
- `index.html`: Navbar structure, bilingual attributes across sections.
- `styles.css`: Navbar states, language switcher styles, responsive/mobile tweaks, hero padding, spacing, transitions.
- `script.js`: Language switching logic, translation updates, navbar scroll behavior, scroll-to-top.
- `README.md`: Bilingual feature and usage notes.

### Commands Used (PowerShell)
- Open site for testing:
  - `cd "C:\Users\miyuru\Desktop\sith 89"; Invoke-Item index.html`
- Earlier attempts (PowerShell specifics):
  - `Invoke-Item index.html`
  - `start index.html` (note: prefer `Invoke-Item` in PowerShell)
