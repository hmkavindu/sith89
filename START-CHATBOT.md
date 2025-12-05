# 🚀 Quick Start - AI Chatbot

## First Time Setup (One Time Only)

### Option 1: Automated Setup (Recommended) ⚡

**Windows (PowerShell):**
```powershell
.\setup-chatbot.ps1
```

**Linux/Mac (Terminal):**
```bash
chmod +x setup-chatbot.sh
./setup-chatbot.sh
```

### Option 2: Manual Setup 📝

1. Get API key from https://console.groq.com
2. Create `.env` file:
```
GROQ_API_KEY=gsk_your_key_here
```

---

## Running the Server 🖥️

After setup, every time you want to use the chatbot:

```bash
node local-server.js
```

Then open: **http://localhost:8888**

---

## Using the Chatbot 💬

1. Look for the button at the bottom-right: **දම්ම AI උපකාරක** / **Dhamma AI Guide**
2. Click it to open the chat widget
3. Type your Abhidhamma question
4. Get AI-powered responses!

---

## Example Questions to Try

### In Sinhala:
- "චිත්ත කීයක් තිබේද?"
- "ලෝභ මූලික චිත්ත මොනවාද?"
- "සොමනස්ස සහගත චිත්ත විස්තර කරන්න"

### In English:
- "What are the 89 cittas?"
- "Explain the 12 akusala cittas"
- "What is the difference between kusala and kiriya?"
- "Tell me about cetasikas"

---

## Troubleshooting 🔧

### Problem: "GROQ_API_KEY is not set"
**Solution:** Run the setup script or create `.env` file manually

### Problem: "Cannot find module 'express'"
**Solution:** Install dependencies:
```bash
npm install
```

### Problem: Chatbot says configuration error
**Solution:** 
1. Check `.env` file exists in `abidharma-sith` folder
2. Make sure API key is valid
3. Restart the server

### Problem: Port 8888 is already in use
**Solution:** Change port in `.env`:
```
PORT=3000
```

---

## Stop the Server

Press `Ctrl + C` in the terminal

---

## For Production (Netlify)

Add environment variable in Netlify dashboard:
- **Key:** `GROQ_API_KEY`
- **Value:** Your Groq API key

Then redeploy.

---

## Need More Info?

- Full setup guide: `AI-CHATBOT-SETUP.md`
- Fix summary: `CHATBOT-FIX-SUMMARY.md`
- Groq docs: https://console.groq.com/docs

---

**Happy Learning! 📚 🙏**















