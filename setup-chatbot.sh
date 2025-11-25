#!/bin/bash

# AI Chatbot Setup Script for Linux/Mac
# This script helps you quickly set up the Groq API key for the chatbot

echo "=================================="
echo "   AI Chatbot Setup Assistant"
echo "=================================="
echo ""

# Check if .env file exists
ENV_FILE=".env"
if [ -f "$ENV_FILE" ]; then
    echo "✓ Found existing .env file"
    read -p "Do you want to update it? (y/N): " overwrite
    if [[ ! $overwrite =~ ^[Yy]$ ]]; then
        echo "Keeping existing .env file. Exiting..."
        exit 0
    fi
fi

echo ""
echo "Step 1: Get your Groq API Key"
echo "Visit: https://console.groq.com"
echo "- Sign up or login"
echo "- Go to API Keys section"
echo "- Create a new API key"
echo ""

read -p "Enter your Groq API Key (starts with 'gsk_'): " apiKey

if [ -z "$apiKey" ]; then
    echo "✗ No API key provided. Exiting..."
    exit 1
fi

if [[ ! $apiKey == gsk_* ]]; then
    echo "⚠ Warning: API key doesn't start with 'gsk_'. Are you sure this is correct?"
    read -p "Continue anyway? (y/N): " continue
    if [[ ! $continue =~ ^[Yy]$ ]]; then
        echo "Exiting..."
        exit 0
    fi
fi

# Create .env file
echo ""
echo "Creating .env file..."

cat > "$ENV_FILE" << EOF
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
EOF

echo "✓ .env file created successfully!"
echo ""
echo "=================================="
echo "   Setup Complete! 🎉"
echo "=================================="
echo ""
echo "Next Steps:"
echo "1. Run the local server: node local-server.js"
echo "2. Open browser: http://localhost:8888"
echo "3. Click the chatbot button and start asking questions!"
echo ""


