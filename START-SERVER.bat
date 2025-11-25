@echo off
cd /d "%~dp0"
echo ============================================
echo    Starting Abhidhamma AI Chatbot Server
echo ============================================
echo.
echo Loading API key from .env file...
echo.
echo Starting server...
echo.
npm run dev
pause

