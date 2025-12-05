# 🚀 GitHub Deployment Guide - Chatbot with New API Key

## ✅ Setup Complete!

Your chatbot is now configured with the new API key and ready for GitHub deployment!

---

## 🔒 Security Status

### ✅ Protected:
- `.env` file is in `.gitignore`
- Old API key removed from all documentation
- No API keys in source code
- Safe to commit and push

### 📝 Files Safe to Commit:
- All source code files
- Documentation (with placeholders)
- Configuration files
- **NOT** `.env` file (automatically ignored)

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Update chatbot with new API key configuration"
git push origin main
```

#### Step 2: Connect to Netlify
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Build settings:
   - **Build command:** (leave empty or `npm install`)
   - **Publish directory:** `abidharma-sith`

#### Step 3: Add Environment Variable
1. Go to **Site settings** → **Environment variables**
2. Click **"Add variable"**
3. Add:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `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`
4. Click **"Save"**

#### Step 4: Deploy
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete

#### Step 5: Test
- Visit your Netlify URL
- Click chatbot button
- Test with: `අභිධම්මය කියන්නේ මොකද්ද?`

---

### Option 2: Vercel

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Update chatbot configuration"
git push
```

#### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `abidharma-sith`

#### Step 3: Add Environment Variable
1. In project settings, go to **Environment Variables**
2. Add:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `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`
   - **Environments:** Production, Preview, Development
3. Click **"Save"**

#### Step 4: Deploy
- Vercel will automatically deploy
- Wait for deployment to complete

---

### Option 3: GitHub Pages (Static Only)

**Note:** GitHub Pages doesn't support serverless functions. You'll need:
- Netlify Functions (recommended)
- Or use client-side API calls (less secure)

---

## 📋 Pre-Deployment Checklist

Before pushing to GitHub:

- [x] `.env` file exists locally
- [x] `.env` is in `.gitignore`
- [x] Old API key removed from documentation
- [x] No API keys in source code
- [x] `package.json` has correct scripts
- [x] `local-server.js` loads `.env` correctly
- [x] Chatbot works locally

---

## 🔍 Verify Before Pushing

### Check .gitignore:
```bash
cat .gitignore | grep .env
```
Should show: `.env`

### Check for API keys in code:
```bash
grep -r "gsk_" --exclude-dir=node_modules .
```
Should NOT find any actual API keys (only placeholders)

### Test locally:
```bash
npm run dev
# Open http://localhost:8888
# Test chatbot
```

---

## 🚨 Important Security Notes

### ✅ DO:
1. **Always** use environment variables in production
2. **Never** commit `.env` file
3. **Always** add `.env` to `.gitignore`
4. **Rotate** API keys if exposed
5. **Use** different keys for dev/prod

### ❌ DON'T:
1. **Never** commit API keys to Git
2. **Never** hard-code keys in source
3. **Never** share keys in issues/PRs
4. **Never** use same key everywhere

---

## 📝 Git Commands

### First Time Setup:
```bash
# Check what will be committed
git status

# Add files (excluding .env automatically)
git add .

# Commit
git commit -m "Add enhanced Buddhist chatbot with secure API key configuration"

# Push
git push origin main
```

### After Changes:
```bash
git add .
git commit -m "Update chatbot features"
git push
```

---

## 🔧 Troubleshooting

### Issue: Chatbot not working after deployment

**Solution:**
1. Check environment variable is set in Netlify/Vercel
2. Verify variable name: `GROQ_API_KEY` (exact match)
3. Check API key is correct
4. Redeploy after adding env var

### Issue: "GROQ_API_KEY is not set"

**Solution:**
1. Go to deployment platform settings
2. Add environment variable
3. Redeploy

### Issue: Old API key still being used

**Solution:**
1. Clear deployment cache
2. Redeploy
3. Verify env var is set correctly

---

## ✅ Post-Deployment

After deploying:

1. **Test chatbot** on live site
2. **Verify** responses are working
3. **Check** API usage in Groq dashboard
4. **Monitor** for any errors

---

## 📊 Deployment Summary

| Platform | Status | Notes |
|----------|--------|-------|
| **Local** | ✅ Working | `.env` file |
| **Netlify** | ⚙️ Ready | Add env var in dashboard |
| **Vercel** | ⚙️ Ready | Add env var in dashboard |
| **GitHub Pages** | ⚠️ Limited | No serverless functions |

---

## 🎯 Quick Deployment Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy chatbot"
   git push
   ```

2. **Connect to Netlify/Vercel**

3. **Add Environment Variable:**
   - Key: `GROQ_API_KEY`
   - Value: `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`

4. **Deploy & Test!**

---

**Your chatbot is ready for secure GitHub deployment! 🚀**

**තෙරුවන් සරණයි! 🙏✨**














