# Deployment Checklist for Netlify

## Issues Found and Fixed:

1. ✅ **Created `netlify.toml`** - Proper configuration for Netlify
2. ✅ **Created `_redirects`** - SPA routing support
3. ✅ **Improved error handling** - Scripts now handle missing JSON files gracefully
4. ✅ **Added fallback mechanisms** - Site works even if some data files fail to load

## Common Netlify Issues:

### 1. **File Path Issues**
- ✅ All file paths are relative (e.g., `styles.css`, `script.js`)
- ✅ JSON files are in the same directory

### 2. **Caching Issues**
- Clear Netlify cache: Go to Site settings > Build & deploy > Clear cache and retry deploy
- Or add cache-busting query strings if needed

### 3. **Build Settings**
- ✅ No build command needed (static site)
- ✅ Publish directory: `.` (root)

### 4. **Missing Files**
- Ensure all these files are uploaded:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `enhanced-features.js`
  - `mental-states-analysis.js`
  - `load-abhidhamma-data.js`
  - `load-rerukane-data.js`
  - `load-enhanced-citta-data.js`
  - `term-definitions-system.js`
  - `abhidhamma-complete-data.json` (optional - has fallback)
  - `rerukane-abhidhamma-data.json` (optional - has fallback)
  - `citta-data-enhanced.json` (optional - has fallback)
  - `lobha-ditthi-citta-guide.html`
  - `lobha-ditthi-sasankharika-guide.html`

## Steps to Fix:

1. **Clear Netlify Cache:**
   - Go to your Netlify dashboard
   - Site settings > Build & deploy
   - Click "Clear cache and retry deploy"

2. **Redeploy:**
   - Trigger a new deployment
   - Or push a new commit to trigger auto-deploy

3. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab to see which files are failing to load

4. **Verify File Paths:**
   - All paths should be relative (no leading `/`)
   - Case-sensitive on some servers

5. **Check File Permissions:**
   - Ensure all files are readable
   - JSON files should be accessible

## Debugging:

Open browser console and check for:
- 404 errors (missing files)
- CORS errors (shouldn't happen on Netlify)
- JavaScript errors (syntax errors, undefined variables)

The site should now work even if some JSON files are missing, as we've added fallback mechanisms.




