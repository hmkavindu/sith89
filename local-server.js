require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

// OpenRouter API configuration
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Fallback to Groq if OpenRouter is not set (for backward compatibility)
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!OPENROUTER_API_KEY && !GROQ_API_KEY) {
    console.warn('[local-server] Neither OPENROUTER_API_KEY nor GROQ_API_KEY is set. Chatbot requests will fail until you export a key.');
}

app.use(express.json({ limit: '1mb' }));

// Enable CORS for file:// protocol and localhost
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Default model for OpenRouter
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';

app.post('/.netlify/functions/groq-chat', async (req, res) => {
    // Prefer OpenRouter if available, otherwise fallback to Groq
    const useOpenRouter = !!OPENROUTER_API_KEY;
    const apiKey = useOpenRouter ? OPENROUTER_API_KEY : GROQ_API_KEY;
    const apiUrl = useOpenRouter ? OPENROUTER_API_URL : GROQ_API_URL;

    if (!apiKey) {
        return res.status(500).json({ 
            error: 'No API key configured. Please set OPENROUTER_API_KEY or GROQ_API_KEY in your .env file.' 
        });
    }

    const { messages, model = DEFAULT_MODEL, temperature = 0.7, max_tokens = 1024 } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Request must include a non-empty messages array.' });
    }

    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        // OpenRouter requires additional headers
        if (useOpenRouter) {
            headers['HTTP-Referer'] = process.env.OPENROUTER_REFERER || 'http://localhost:8888';
            headers['X-Title'] = process.env.OPENROUTER_TITLE || 'Abhidhamma Chatbot';
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                messages,
                model,
                temperature,
                max_tokens,
                stream: false
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(`[local-server] ${useOpenRouter ? 'OpenRouter' : 'Groq'} API error:`, data);
            return res.status(response.status).json({ 
                error: data.error?.message || data.error || 'API request failed',
                details: data 
            });
        }

        const reply = data?.choices?.[0]?.message?.content?.trim?.() || '';
        res.json({ 
            reply, 
            usage: data.usage || null, 
            model: data.model || model 
        });
    } catch (error) {
        console.error(`[local-server] Unexpected error calling ${useOpenRouter ? 'OpenRouter' : 'Groq'}:`, error);
        res.status(500).json({ 
            error: `Failed to reach ${useOpenRouter ? 'OpenRouter' : 'Groq'} API.`,
            message: error.message 
        });
    }
});

app.use(express.static(__dirname));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`[local-server] Serving Abhidhamma site on http://localhost:${PORT}`);
    console.log(`[local-server] Network access: Find your IP with 'ipconfig' and use http://YOUR_IP:${PORT}`);
});

