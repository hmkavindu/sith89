# 🔧 Chatbot Troubleshooting Guide

## ✅ Server Status: WORKING!

Your server is running and API is responding!

---

## 🔍 Common Issues & Solutions

### Issue 1: "Chatbot button not visible"

**Check:**
1. Browser window is full size (button is bottom-right)
2. Scroll down the page (button is fixed position)
3. Check browser console (F12) for errors

**Solution:**
```javascript
// Open browser console (F12) and run:
document.getElementById('chatbotLauncher').style.display = 'block';
document.getElementById('chatbotLauncher').style.visibility = 'visible';
```

### Issue 2: "Clicking button doesn't open chat"

**Check:**
1. Browser console (F12) for JavaScript errors
2. Check if `chatbot.js` is loaded

**Solution:**
```javascript
// In browser console:
console.log('Chatbot launcher:', document.getElementById('chatbotLauncher'));
console.log('Chatbot widget:', document.getElementById('chatbotWidget'));
```

### Issue 3: "No response from chatbot"

**Check:**
1. Server is running (`npm run dev`)
2. API key is correct in `.env` file
3. Network tab in browser (F12) shows API call

**Solution:**
```powershell
# Test API directly:
$body = '{"messages":[{"role":"user","content":"test"}]}'
Invoke-RestMethod -Uri "http://localhost:8888/.netlify/functions/groq-chat" -Method POST -Body $body -ContentType "application/json"
```

### Issue 4: "Error: GROQ_API_KEY is not set"

**Solution:**
1. Check `.env` file exists in `abidharma-sith` folder
2. Verify content: `GROQ_API_KEY=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`
3. Restart server: `npm run dev`

---

## 🧪 Step-by-Step Testing

### Test 1: Server Status
```powershell
# Should show: "Serving Abhidhamma site on http://localhost:8888"
npm run dev
```

### Test 2: API Endpoint
```powershell
$body = '{"messages":[{"role":"user","content":"hello"}]}'
Invoke-RestMethod -Uri "http://localhost:8888/.netlify/functions/groq-chat" -Method POST -Body $body -ContentType "application/json"
```

### Test 3: Browser Elements
```javascript
// Open http://localhost:8888
// Press F12 (Developer Tools)
// Run in Console:

// Check button exists
console.log('Button:', document.getElementById('chatbotLauncher'));

// Check widget exists
console.log('Widget:', document.getElementById('chatbotWidget'));

// Try to open manually
document.getElementById('chatbotLauncher').click();
```

### Test 4: Network Request
```javascript
// In browser console, after clicking chatbot:
// Go to Network tab (F12 → Network)
// Send a message
// Look for request to: /.netlify/functions/groq-chat
// Check response status (should be 200)
```

---

## 🎯 Quick Fixes

### Fix 1: Restart Everything
```powershell
# Stop server
Get-Process -Name node | Stop-Process -Force

# Restart server
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
npm run dev
```

### Fix 2: Clear Browser Cache
- Press `Ctrl + Shift + Delete`
- Clear cache
- Refresh page (`Ctrl + F5`)

### Fix 3: Check .env File
```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
Get-Content .env
# Should show: GROQ_API_KEY=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
```

### Fix 4: Recreate .env
```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"
"GROQ_API_KEY=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" | Out-File -FilePath .env -Encoding UTF8
npm run dev
```

---

## 📊 Current Status Check

Run this to check everything:

```powershell
cd "E:\chiththa chaithasika චිත්ත චෛතසික\abidharma-sith"

# 1. Check .env
Write-Host "1. .env file:"; Get-Content .env

# 2. Check server
Write-Host "`n2. Server status:"
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8888" -UseBasicParsing -TimeoutSec 5
    Write-Host "   ✅ Server is running (Status: $($response.StatusCode))"
} catch {
    Write-Host "   ❌ Server not running. Run: npm run dev"
}

# 3. Test API
Write-Host "`n3. API test:"
try {
    $body = '{"messages":[{"role":"user","content":"test"}]}'
    $api = Invoke-RestMethod -Uri "http://localhost:8888/.netlify/functions/groq-chat" -Method POST -Body $body -ContentType "application/json" -TimeoutSec 10
    Write-Host "   ✅ API is working!"
} catch {
    Write-Host "   ❌ API error: $($_.Exception.Message)"
}
```

---

## 🎯 What Should Work

### ✅ Working:
- Server running on port 8888
- API endpoint responding
- New API key configured
- .env file exists

### ⚠️ Check:
- Browser can see chatbot button
- JavaScript console has no errors
- Network requests are successful

---

## 💡 Browser Console Commands

Open browser console (F12) and try:

```javascript
// 1. Check if chatbot elements exist
console.log('Launcher:', document.getElementById('chatbotLauncher'));
console.log('Widget:', document.getElementById('chatbotWidget'));

// 2. Manually open chatbot
document.getElementById('chatbotLauncher').click();

// 3. Check chatbot.js loaded
console.log('Chatbot script loaded:', typeof window.chatbot !== 'undefined');

// 4. Test API call manually
fetch('/.netlify/functions/groq-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        messages: [{ role: 'user', content: 'test' }]
    })
})
.then(r => r.json())
.then(d => console.log('API Response:', d))
.catch(e => console.error('API Error:', e));
```

---

## 🚨 Still Not Working?

1. **Check server logs** - Look at terminal where `npm run dev` is running
2. **Check browser console** - F12 → Console tab
3. **Check network tab** - F12 → Network tab → Send message → Check request
4. **Verify API key** - Make sure it's correct in `.env`
5. **Restart everything** - Server and browser

---

## ✅ Expected Behavior

When working correctly:

1. **Server:** Shows "Serving Abhidhamma site on http://localhost:8888"
2. **Browser:** Opens http://localhost:8888
3. **Button:** Visible at bottom-right corner
4. **Click:** Opens chat widget
5. **Type message:** Sends to API
6. **Response:** AI responds with Buddhist knowledge

---

**If still having issues, share:**
- Browser console errors (F12)
- Server terminal output
- What happens when you click chatbot button

**තෙරුවන් සරණයි! 🙏**

