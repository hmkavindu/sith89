# 🌐 Netlify Environment Variables Setup Guide

## ⚠️ Important: Netlify Doesn't Use .env Files!

In Netlify, you **DON'T** upload a `.env` file. Instead, you add environment variables through the **Netlify Dashboard**.

---

## 🚀 Step-by-Step: Add API Key to Netlify

### **Step 1: Go to Netlify Dashboard**

1. Open: https://app.netlify.com
2. Login to your account
3. Select your site (or create a new one)

### **Step 2: Navigate to Environment Variables**

1. Click on your **site name**
2. Go to **"Site settings"** (left sidebar)
3. Click **"Environment variables"** (under "Build & deploy")

### **Step 3: Add New Variable**

1. Click **"Add variable"** button
2. Fill in:
   - **Key:** `GROQ_API_KEY`
   - **Value:** `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`
3. Select **Scopes:**
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Branch deploys** (optional)
4. Click **"Save"**

### **Step 4: Redeploy**

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete

---

## 📸 Visual Guide

```
Netlify Dashboard
├── Your Site
│   ├── Site settings
│   │   ├── Build & deploy
│   │   │   └── Environment variables  ← Click here!
│   │   │       └── Add variable
│   │   │           ├── Key: GROQ_API_KEY
│   │   │           ├── Value: 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
│   │   │           └── Save
```

---

## 🔧 Alternative: Using netlify.toml (Optional)

You can also add environment variables in `netlify.toml` file:

```toml
[build]
  command = "npm install"
  publish = "abidharma-sith"

[build.environment]
  GROQ_API_KEY = "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"
```

**⚠️ WARNING:** This is **NOT recommended** because:
- API key will be in your Git repository
- Anyone with access to repo can see it
- **Better to use Dashboard method!**

---

## ✅ Recommended Method: Dashboard

**Use Netlify Dashboard** (Step 1-4 above) because:
- ✅ Secure (not in Git)
- ✅ Easy to update
- ✅ Can have different keys for different environments
- ✅ Can be changed without code changes

---

## 🎯 Quick Reference

### **What to Add:**

| Field | Value |
|-------|-------|
| **Key** | `GROQ_API_KEY` |
| **Value** | `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` |
| **Scopes** | Production, Preview |

### **Where to Find:**

1. Netlify Dashboard → Your Site
2. Site settings → Environment variables
3. Add variable → Fill in → Save

---

## 🔍 Verify It's Working

After deployment:

1. Visit your Netlify site URL
2. Open browser console (F12)
3. Click chatbot button
4. Send a test message
5. Should get AI response! ✅

If not working:
- Check environment variable name is exact: `GROQ_API_KEY`
- Check value is correct (no extra spaces)
- Redeploy after adding variable

---

## 📝 Summary

**❌ DON'T:**
- Upload `.env` file to Netlify
- Put API key in `netlify.toml` (if public repo)
- Commit `.env` to Git

**✅ DO:**
- Add environment variable in Netlify Dashboard
- Use exact key name: `GROQ_API_KEY`
- Redeploy after adding variable

---

## 🚀 After Setup

Once environment variable is added:

1. **Redeploy** your site
2. **Test** chatbot on live site
3. **Verify** API is working
4. **Monitor** usage in Groq dashboard

---

**Your chatbot will work on Netlify after adding the environment variable! 🎉**

**තෙරුවන් සරණයි! 🙏✨**














