// netlify/functions/dhamma.js
// -----------------------------------------------------------------------------
// Sith89 Dhamma Assistant — secure Claude API proxy.
//
// The browser NEVER sees your API key. The frontend POSTs { system, messages,
// max_tokens } here; this function adds your key server-side and forwards the
// request to the Anthropic Messages API, returning { text }.
//
// Set these environment variables in your Netlify site settings:
//   ANTHROPIC_API_KEY   (required)  your Anthropic API key
//   ANTHROPIC_MODEL     (optional)  model id, defaults below
//   ALLOWED_ORIGIN      (optional)  e.g. https://sith89.netlify.app  ("*" if unset)
// -----------------------------------------------------------------------------

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const DEFAULT_MODEL = "claude-sonnet-4-5";

exports.handler = async function (event) {
  const origin = process.env.ALLOWED_ORIGIN || "*";
  const cors = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: cors, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers: cors, body: JSON.stringify({ error: "Method not allowed" }) };

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return { statusCode: 500, headers: cors, body: JSON.stringify({ error: "Server missing ANTHROPIC_API_KEY" }) };

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  // Validate & clamp inputs (basic prompt-injection / abuse guards).
  const model = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;
  const maxTokens = Math.min(Math.max(Number(body.max_tokens) || 800, 64), 2000);
  const system = typeof body.system === "string" ? body.system.slice(0, 20000) : "";
  const messages = Array.isArray(body.messages)
    ? body.messages.slice(-12).map(function (m) {
        return {
          role: m && m.role === "assistant" ? "assistant" : "user",
          content: String((m && m.content) || "").slice(0, 12000),
        };
      }).filter(function (m) { return m.content; })
    : [];

  if (!messages.length) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "No messages provided" }) };

  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model: model, max_tokens: maxTokens, system: system, messages: messages }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return { statusCode: 502, headers: cors, body: JSON.stringify({ error: "Upstream error", status: res.status, detail: detail.slice(0, 600) }) };
    }

    const data = await res.json();
    const text = (data.content || [])
      .filter(function (b) { return b.type === "text"; })
      .map(function (b) { return b.text; })
      .join("\n")
      .trim();

    return { statusCode: 200, headers: cors, body: JSON.stringify({ text: text }) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: "Request failed", detail: String(e).slice(0, 300) }) };
  }
};
