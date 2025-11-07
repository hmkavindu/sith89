const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

if (!process.env.GROQ_API_KEY) {
    console.warn('[local-server] GROQ_API_KEY is not set. Chatbot requests will fail until you export the key.');
}

app.use(express.json({ limit: '1mb' }));

const DEFAULT_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

app.post('/.netlify/functions/groq-chat', async (req, res) => {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'GROQ_API_KEY is not configured. Set it before using the chatbot.' });
    }

    const { messages, model = DEFAULT_MODEL, temperature = 0.6, max_tokens = 1024 } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Request must include a non-empty messages array.' });
    }

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
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
            console.error('[local-server] Groq API error:', data);
            return res.status(response.status).json({ error: data });
        }

        const reply = data?.choices?.[0]?.message?.content?.trim?.() || '';
        res.json({ reply, usage: data.usage || null, model: data.model || model });
    } catch (error) {
        console.error('[local-server] Unexpected error calling Groq:', error);
        res.status(500).json({ error: 'Failed to reach Groq API.' });
    }
});

app.use(express.static(__dirname));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[local-server] Serving Abhidhamma site on http://localhost:${PORT}`);
});

