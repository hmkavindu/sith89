# Start Abhidhamma AI Chatbot Server
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "   Starting Abhidhamma AI Chatbot Server" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Loading API key from .env file..." -ForegroundColor Green
Write-Host ""
Write-Host "Starting server on http://localhost:8888..." -ForegroundColor Yellow
Write-Host ""
Write-Host "After server starts, open your browser to:" -ForegroundColor Yellow
Write-Host "   http://localhost:8888" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

npm run dev

