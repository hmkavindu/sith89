# 🚀 Quick Start Guide - Abhidhamma Site

## ✨ What You Have Now

### 🤖 AI Chatbot
- **Location:** Bottom-right corner (orange button)
- **Features:** Ask questions about Abhidhamma, cittas, cetasikas
- **Languages:** Sinhala + English
- **Model:** Groq's Llama 3.3 70B

### 📚 89 Citta Detail Pages
- **Access:** Click any citta in the main table
- **URL Pattern:** `citta-{1-89}-guide.html`
- **Content:** 4 levels of analysis per citta
- **Quick Index:** `citta-index.html`

---

## 🎯 How to Use

### Option 1: Browse Main Table
1. Open http://localhost:8888
2. Scroll to "චිත්ත චෛතසික වගුව" section
3. Click any citta row or "විස්තර" button
4. View detailed analysis

### Option 2: Use Quick Index
1. Open http://localhost:8888/citta-index.html
2. Browse cittas by category
3. Click any card to view details

### Option 3: Ask the Chatbot
1. Click the orange "දම්ම AI උපකාරක" button (bottom-right)
2. Type your question in Sinhala or English
3. Get instant Abhidhamma guidance

---

## 💻 Running the Site

### First Time Setup:
```powershell
# 1. Navigate to project
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"

# 2. Install dependencies (one time only)
npm install

# 3. Set API key
$Env:GROQ_API_KEY="your_groq_api_key_here"

# 4. Start server
npm start
```

### Daily Use:
```powershell
# 1. Set API key (each new PowerShell session)
$Env:GROQ_API_KEY="your_groq_api_key_here"

# 2. Start server
npm start

# 3. Open browser
# http://localhost:8888
```

### Stop Server:
```powershell
Get-Process node | Stop-Process
```

---

## 🗂️ Page Categories

### 1. අකුසල් චිත්ත (Unwholesome) - 12 pages
- **IDs:** 1-12
- **Color:** Red
- **Subcategories:**
  - ලෝභ මූල (Greed): 1-8
  - ද්වේශ මූල (Hatred): 9-10
  - මෝහ මූල (Delusion): 11-12

### 2. කුසල් චිත්ත (Wholesome) - 8 pages
- **IDs:** 13-20
- **Color:** Green
- **Type:** කාමාවචර කුසල්

### 3. රූපාවචර චිත්ත (Form Sphere) - 5 pages
- **IDs:** 21-25
- **Color:** Green
- **Type:** Jhana states

### 4. අරූපාවචර චිත්ත (Formless Sphere) - 4 pages
- **IDs:** 26-29
- **Color:** Green
- **Type:** Arupa jhanas

### 5. ලෝකෝත්තර චිත්ත (Supramundane) - 40 pages
- **IDs:** 30-69
- **Color:** Purple
- **Type:** Path & Fruition consciousness

### 6. විපාක චිත්ත (Resultant) - 16 pages
- **IDs:** 70-77, 86-89
- **Color:** Blue
- **Type:** Karmic results

### 7. ක්‍රියා චිත්ත (Functional) - 8 pages
- **IDs:** 78-85
- **Color:** Orange
- **Type:** Functional consciousness

---

## 🔧 Troubleshooting

### Chatbot Says "දෝෂයක් සිදුවූවෙයි"
**Solution:** Make sure `GROQ_API_KEY` is set before starting server.

### Pages Not Loading
**Solution:** Ensure server is running (`npm start`)

### Port 8888 Already in Use
**Solution:** 
```powershell
# Stop existing server
Get-Process node | Stop-Process

# Start again
npm start
```

### Need to Change Port
**Solution:** 
```powershell
$Env:PORT="3000"
npm start
```

---

## 📖 Documentation Files

- `README.md` - Main project documentation
- `CITTA_PAGES_COMPLETE.md` - Citta pages summary
- `SETUP_COMPLETE.md` - Complete setup details
- `QUICK_START_GUIDE.md` - This file

---

## 🎉 Success Metrics

✅ **89/89 citta pages** created  
✅ **Chatbot** integrated and tested  
✅ **Navigation** updated  
✅ **Local server** running  
✅ **All tests** passing  

---

## 🙏 තෙරුවන් සරණයි!

Your Abhidhamma learning platform is now complete with:
- 89 detailed citta analysis pages
- AI-powered chatbot assistant
- Fully functional local development environment

**Enjoy your Dhamma studies!** 🌟

