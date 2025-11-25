# 🎯 Simple Start Guide - AI Chatbot

## ✅ Your API Key is Already Set Up!

Your Groq API key is saved in the `.env` file:
```
your_groq_api_key_here
```

---

## 🚀 How to Start the Server (Choose One Method)

### Method 1: Double-Click (Easiest!)

1. Go to the `abidharma-sith` folder
2. **Double-click** `START-SERVER.bat` (Windows Batch file)
   - OR double-click `START-SERVER.ps1` (PowerShell script)
3. Wait for "Serving Abhidhamma site on http://localhost:8888"
4. Open your browser: **http://localhost:8888**
5. Click the chatbot button! 🎉

### Method 2: PowerShell Manual Start

1. Open **NEW PowerShell window** (not in VS Code)
2. Navigate to folder:
   ```powershell
   cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
   ```
3. Run server:
   ```powershell
   npm run dev
   ```
4. You should see: `[local-server] Serving Abhidhamma site on http://localhost:8888`
5. Open browser: **http://localhost:8888**

### Method 3: Command Prompt

1. Open **Command Prompt** (cmd)
2. Navigate:
   ```cmd
   cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
   ```
3. Run:
   ```cmd
   npm run dev
   ```
4. Open browser: **http://localhost:8888**

---

## 🎯 Using the Chatbot

1. Look for the button at bottom-right: **"දම්ම AI උපකාරක"** / **"Dhamma AI Guide"**
2. Click it to open the chat widget
3. Type your question:
   - **Sinhala:** "චිත්ත කීයක් තිබේද?"
   - **English:** "What are the 12 akusala cittas?"
4. Get AI responses instantly! 🤖

---

## ❓ Troubleshooting

### "Cannot find module 'express'"
**Solution:**
```powershell
npm install
```

### "GROQ_API_KEY is not set"
**Solution:** The `.env` file is already created, but if you need to recreate it:
```
GROQ_API_KEY=your_groq_api_key_here
```

### "Port 8888 is already in use"
**Solution:** Kill existing node process:
```powershell
Get-Process -Name node | Stop-Process -Force
```
Then try again.

### Chatbot not responding
**Solution:**
1. Check server is actually running (you should see messages in the terminal)
2. Make sure you opened **http://localhost:8888** not just a file
3. Check browser console (F12) for errors

---

## 🛑 Stopping the Server

Press **Ctrl + C** in the terminal window where the server is running.

---

## 📝 What is http://localhost:8888?

- **localhost** = your own computer
- **8888** = port number the server runs on
- This is a **local web server** running on YOUR computer
- Only you can access it (not on the internet)
- The chatbot needs this server to work because it handles API requests to Groq

---

## ✅ Quick Checklist

- [x] API key is set up in `.env` file
- [x] Dependencies are installed (`npm install` done)
- [x] Server file is ready (`local-server.js`)
- [ ] **YOU NEED TO:** Start the server using one of the methods above
- [ ] **YOU NEED TO:** Open http://localhost:8888 in your browser

---

**Once you start the server and open the browser, the chatbot will work perfectly!**

**තෙරුවන් සරණයි! 🙏**

