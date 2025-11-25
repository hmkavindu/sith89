# 🔧 Chatbot Final Fix - ඔබට කියන්න ඕනේ දේ

## ❌ ගැටළුව (Problem)

Chatbot error: "කණගාටුයි, මේ මොහොතේ පිළිතුර ලබා ගත නොහැකි විය"

## ✅ විසඳුම (Solution)

### පියවර 1: .env ගොනුව සාදන්න

PowerShell විවෘත කර `abidharma-sith` folder එකට යන්න:

```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
```

ඊළඟට .env ගොනුව සාදන්න:

```powershell
@"
GROQ_API_KEY=your_groq_api_key_here
"@ | Out-File -FilePath .env -Encoding UTF8
```

### පියවර 2: Server ආරම්භ කරන්න

```powershell
npm run dev
```

ඔබට පෙනේවි:
```
[dotenv] injecting env (1) from .env
[local-server] Serving Abhidhamma site on http://localhost:8888
```

### පියවර 3: Browser විවෘත කරන්න

```
http://localhost:8888
```

### පියවර 4: Chatbot test කරන්න

Bottom-right corner එකේ "දම්ම AI උපකාරක" click කර test question එකක් අහන්න:

```
අභිධම්මය කියන්නේ මොකද්ද?
```

---

## 🎯 Quick Start (ඉක්මන් ආරම්භය)

### Option 1: Batch File භාවිතය

Double-click: `START-SERVER.bat`

### Option 2: PowerShell Command

```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"

# .env file නැත්නම් සාදන්න
if (!(Test-Path .env)) {
    "GROQ_API_KEY=your_groq_api_key_here" | Out-File -FilePath .env -Encoding UTF8
}

# Server start කරන්න
npm run dev
```

---

## 🔍 Troubleshooting (ගැටළු විසඳීම)

### ගැටළුව 1: "npm ERR! missing script: dev"

**විසඳුම:** package.json update වී ඇත. නැවත try කරන්න.

### ගැටළුව 2: "GROQ_API_KEY is not set"

**විසඳුම:** .env ගොනුව නැත. පියවර 1 කරන්න.

### ගැටළුව 3: Chatbot බොත්තම නොපෙනෙනවා

**විසඳුම:**
- Browser refresh කරන්න (Ctrl + F5)
- Bottom-right corner බලන්න
- Page scroll කරලා බලන්න

### ගැටළුව 4: "Failed to reach Groq API"

**විසඳුම:**
- Internet connection check කරන්න
- API key correct ද බලන්න
- Server restart කරන්න

---

## 📝 .env File Contents

ඔබේ .env file එකේ තිබිය යුත්තේ:

```
GROQ_API_KEY=your_groq_api_key_here
```

---

## ✅ Verification Checklist

- [ ] .env file exists
- [ ] package.json has "dev" script  
- [ ] npm run dev works without error
- [ ] Server shows "Serving... on http://localhost:8888"
- [ ] Browser opens http://localhost:8888
- [ ] Chatbot button visible bottom-right
- [ ] Chatbot opens when clicked
- [ ] Test question gets response

---

## 🎯 Test After Fix

1. Start server: `npm run dev`
2. Open: http://localhost:8888
3. Click chatbot button
4. Ask: "චිත්ත කීයක් තිබේද?"
5. Get detailed response! ✅

---

## 🚨 If Still Not Working

Run these commands:

```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"

# 1. Check .env file
Get-Content .env

# 2. Test API key manually
$env:GROQ_API_KEY = "your_groq_api_key_here"

# 3. Start server
npm run dev

# 4. In another terminal, test API
$body = '{"messages":[{"role":"user","content":"test"}]}'
Invoke-RestMethod -Uri "http://localhost:8888/.netlify/functions/groq-chat" -Method POST -Body $body -ContentType "application/json"
```

---

**සියල්ල හදා අවසන්! Server restart කරලා test කරන්න! 🙏**

**තෙරුවන් සරණයි!**


