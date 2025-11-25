# AI Chatbot Setup Script for Windows PowerShell
# This script helps you quickly set up the Groq API key for the chatbot

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   AI Chatbot Setup Assistant" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
$envFile = ".env"
$envExists = Test-Path $envFile

if ($envExists) {
    Write-Host "✓ Found existing .env file" -ForegroundColor Green
    $overwrite = Read-Host "Do you want to update it? (y/N)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "Keeping existing .env file. Exiting..." -ForegroundColor Yellow
        exit
    }
}

Write-Host ""
Write-Host "Step 1: Get your Groq API Key" -ForegroundColor Yellow
Write-Host "Visit: https://console.groq.com" -ForegroundColor Cyan
Write-Host "- Sign up or login"
Write-Host "- Go to API Keys section"
Write-Host "- Create a new API key"
Write-Host ""

$apiKey = Read-Host "Enter your Groq API Key (starts with 'gsk_')"

if ([string]::IsNullOrWhiteSpace($apiKey)) {
    Write-Host "✗ No API key provided. Exiting..." -ForegroundColor Red
    exit
}

if (-not $apiKey.StartsWith("gsk_")) {
    Write-Host "⚠ Warning: API key doesn't start with 'gsk_'. Are you sure this is correct?" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "Exiting..." -ForegroundColor Yellow
        exit
    }
}

# Create .env file
Write-Host ""
Write-Host "Creating .env file..." -ForegroundColor Yellow

$envContent = @"
# Groq API Configuration
# Get your API key from: https://console.groq.com

# Required: Your Groq API key
GROQ_API_KEY=$apiKey

# Optional: Override default Groq model
# Default: llama-3.3-70b-versatile
# GROQ_MODEL=llama-3.3-70b-versatile

# Optional: Override server port
# Default: 8888
# PORT=8888
"@

$envContent | Out-File -FilePath $envFile -Encoding UTF8 -Force

Write-Host "✓ .env file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   Setup Complete! 🎉" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Run the local server: " -NoNewline
Write-Host "node local-server.js" -ForegroundColor Cyan
Write-Host "2. Open browser: " -NoNewline
Write-Host "http://localhost:8888" -ForegroundColor Cyan
Write-Host "3. Click the chatbot button and start asking questions!" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")


