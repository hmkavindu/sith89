const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

const DEFAULT_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: CORS_HEADERS
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        console.error('Missing GROQ_API_KEY environment variable');
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Server configuration error' })
        };
    }

    let payload;
    try {
        payload = JSON.parse(event.body || '{}');
    } catch (parseError) {
        console.error('Invalid JSON payload:', parseError);
        return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Invalid JSON payload' })
        };
    }

    const { messages, model = DEFAULT_MODEL, temperature = 0.6, max_tokens = 1024 } = payload;

    if (!Array.isArray(messages) || messages.length === 0) {
        return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Request must include a non-empty messages array' })
        };
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
            console.error('Groq API error response:', data);
            return {
                statusCode: response.status,
                headers: CORS_HEADERS,
                body: JSON.stringify({ error: data })
            };
        }

        const reply = data?.choices?.[0]?.message?.content?.trim?.() || '';

        return {
            statusCode: 200,
            headers: {
                ...CORS_HEADERS,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reply,
                usage: data.usage || null,
                model: data.model || model
            })
        };
    } catch (error) {
        console.error('Unexpected error calling Groq API:', error);
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Failed to reach Groq API' })
        };
    }
};

