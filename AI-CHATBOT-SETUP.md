# 🤖 AI Chatbot Setup Guide

## Problem
The AI chatbot appears but doesn't respond to messages because the Groq API key is not configured.

## Quick Fix (3 Steps)

### Step 1: Get a Groq API Key

1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up for a free account (or login if you have one)
3. Go to "API Keys" section
4. Click "Create API Key"
5. Copy your API key (it looks like: `gsk_xxxxxxxxxxxxxxxxxxxxx`)

### Step 2: Create Environment File

1. In the `abidharma-sith` folder, create a new file called `.env`
2. Open the `.env` file and add this line:

```
GROQ_API_KEY=gsk_your_actual_api_key_here
```

**Replace** `gsk_your_actual_api_key_here` with your actual API key from Step 1.

Example:
```
GROQ_API_KEY=gsk_abc123xyz456def789ghi012jkl345mno678pqr901stu234vwx567yz8
```

### Step 3: Run the Local Server

Open your terminal/command prompt in the `abidharma-sith` folder and run:

**For Windows (PowerShell):**
```powershell
$env:GROQ_API_KEY="gsk_your_actual_api_key_here"
node local-server.js
```

**For Windows (CMD):**
```cmd
set GROQ_API_KEY=gsk_your_actual_api_key_here
node local-server.js
```

**Or if you created the .env file (recommended):**
```bash
node local-server.js
```

The server will start on `http://localhost:8888`

### Step 4: Test the Chatbot

1. Open your browser and go to `http://localhost:8888`
2. Click on the "දම්ම AI උපකාරක" / "Dhamma AI Guide" button (bottom right)
3. Type a question about Abhidhamma
4. The chatbot should now respond! 🎉

## Troubleshooting

### Problem: "GROQ_API_KEY is not set" warning

**Solution:** Make sure you created the `.env` file with the correct API key.

### Problem: Still not working after setting up

**Solution:** 
1. Check that the `.env` file is in the `abidharma-sith` folder (not in a subfolder)
2. Make sure there are no spaces around the `=` sign in the `.env` file
3. Restart the local server after creating/editing the `.env` file

### Problem: "Failed to reach Groq API"

**Solution:**
1. Check your internet connection
2. Verify your API key is correct and active at [console.groq.com](https://console.groq.com)
3. Make sure you're not exceeding the free tier limits

## For Netlify Deployment

If you want to deploy to Netlify:

1. Go to your Netlify site dashboard
2. Navigate to "Site settings" → "Environment variables"
3. Add a new variable:
   - **Key:** `GROQ_API_KEY`
   - **Value:** Your Groq API key
4. Redeploy your site

## Security Note

⚠️ **NEVER** commit the `.env` file to Git/GitHub!
- The `.env` file is automatically ignored by `.gitignore`
- Never share your API key publicly
- If you accidentally expose your key, regenerate a new one at [console.groq.com](https://console.groq.com)

## Free Tier Limits

Groq offers a generous free tier:
- Multiple models to choose from
- Fast response times
- No credit card required for basic usage

If you exceed limits, you'll need to upgrade or wait for the quota to reset.

---

## Alternative: Use Without Backend (Optional)

If you don't want to use the chatbot feature, you can still use all other features of the Abhidhamma tool. Simply ignore the chatbot button, and everything else will work normally.

---

**Need Help?**
- Groq Documentation: [https://console.groq.com/docs](https://console.groq.com/docs)
- Create an issue on GitHub if you encounter problems















