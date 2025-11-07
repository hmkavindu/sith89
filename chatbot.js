(() => {
    const launcher = document.getElementById('chatbotLauncher');
    const widget = document.getElementById('chatbotWidget');
    const closeBtn = document.getElementById('chatbotClose');
    const messagesContainer = document.getElementById('chatbotMessages');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const statusEl = document.getElementById('chatbotStatus');

    if (!launcher || !widget || !messagesContainer || !form || !input || !statusEl) {
        console.warn('Chatbot elements missing, skipping chatbot initialization.');
        return;
    }

    const API_ENDPOINT = '/.netlify/functions/groq-chat';
    const MAX_HISTORY = 16; // includes system prompt

    const conversation = [
        {
            role: 'system',
            content: `You are a compassionate Abhidhamma guide named "Dhamma Sahayaka". Answer with accuracy and humility using canonical Theravada sources (Abhidhamma Pitaka, commentaries, trusted teachers). Whenever possible, weave connections between cittas, cetasikas, tri-vidya (rāga, dvesha, moha), and practical cultivation. Keep answers concise and structured: start with a brief Sinhala explanation, then provide an English summary. Close with one actionable reflection, meditation, or ethical cue. If unsure, state the limitation and suggest consulting a qualified teacher.`
        }
    ];

    const initialGreetingSi = '🙏 ඔබගේ අභිධර්ම අධ්‍යයනය සඳහා මට සහාය වන්න පුළුවන්. ඔබට ඇති ප්‍රශ්නය පලකරන්න.';
    const initialGreetingEn = '🙏 I am ready to support your Abhidhamma exploration. Please share your question whenever you are ready.';

    appendMessage('assistant', `${initialGreetingSi}\n\n${initialGreetingEn}`);

    launcher.addEventListener('click', () => toggleWidget(true));
    closeBtn.addEventListener('click', () => toggleWidget(false));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && widget.classList.contains('open')) {
            toggleWidget(false);
        }
    });

    widget.addEventListener('transitionend', () => {
        if (widget.classList.contains('open')) {
            input.focus({ preventScroll: true });
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (!text) {
            return;
        }

        appendMessage('user', text);
        conversation.push({ role: 'user', content: text });
        trimConversation();

        input.value = '';
        setLoadingState(true);
        updateStatus(getLocalizedText({
            si: 'පිළිතුර සකස් වෙමින් පවතී...',
            en: 'Preparing an answer...'
        }), '');

        try {
            updateSystemInstruction();
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: conversation,
                    temperature: 0.6
                })
            });

            if (!response.ok) {
                throw new Error(`Groq request failed with status ${response.status}`);
            }

            const data = await response.json();
            const reply = (data && data.reply) ? data.reply.trim() : '';

            if (!reply) {
                throw new Error('Empty reply received from Groq API');
            }

            appendMessage('assistant', reply);
            conversation.push({ role: 'assistant', content: reply });
            trimConversation();

            updateStatus(getLocalizedText({
                si: 'ප්‍රශ්නයට පිළිතුර සපයන ලදී.',
                en: 'Response delivered successfully.'
            }), 'success');
        } catch (error) {
            console.error('Chatbot error:', error);
            appendMessage('assistant', getLocalizedText({
                si: 'කණගාටුයි, මේ මොහොතේ පිළිතුර ලබා ගත නොහැකි විය. කරුණාකර ටික වේලාවකට පසු නැවත උත්සාහ කරන්න, නැතහොත් වෙන ප්‍රශ්නයක් අසන්න.',
                en: 'I am sorry, I could not retrieve an answer right now. Please try again shortly or ask a different question.'
            }));

            updateStatus(getLocalizedText({
                si: 'පිළිතුර ලබා ගැනීමේදී දෝෂයක් සිදුවූවෙයි.',
                en: 'An error occurred while fetching the reply.'
            }), 'error');
        } finally {
            setLoadingState(false);
        }
    });

    function toggleWidget(shouldOpen) {
        const willOpen = typeof shouldOpen === 'boolean' ? shouldOpen : !widget.classList.contains('open');
        widget.classList.toggle('open', willOpen);
        widget.setAttribute('aria-hidden', String(!willOpen));
        launcher.setAttribute('aria-expanded', String(willOpen));

        if (willOpen) {
            setTimeout(() => input.focus({ preventScroll: true }), 160);
        }
    }

    function appendMessage(role, text) {
        const messageEl = document.createElement('div');
        messageEl.className = `chatbot-message ${role}`;

        const roleEl = document.createElement('span');
        roleEl.className = 'chatbot-message-role';
        roleEl.textContent = role === 'user' ? getLocalizedText({ si: 'භාවිතාකරු', en: 'You' }) : getLocalizedText({ si: 'AI උපකාරක', en: 'AI Guide' });

        const bodyEl = document.createElement('div');
        bodyEl.className = 'chatbot-message-body';
        bodyEl.innerHTML = sanitizeMarkdown(text);

        messageEl.appendChild(roleEl);
        messageEl.appendChild(bodyEl);
        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
    }

    function setLoadingState(isLoading) {
        const sendButton = document.getElementById('chatbotSend');
        if (!sendButton) {
            return;
        }

        sendButton.disabled = isLoading;
        if (isLoading) {
            sendButton.dataset.originalText = sendButton.innerHTML;
            sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        } else if (sendButton.dataset.originalText) {
            sendButton.innerHTML = sendButton.dataset.originalText;
            delete sendButton.dataset.originalText;
        }
    }

    function updateStatus(text, type) {
        statusEl.textContent = text;
        statusEl.classList.remove('error', 'success');
        if (type) {
            statusEl.classList.add(type);
        }
    }

    function getLocalizedText({ si, en }) {
        const lang = window.currentLanguage === 'en' ? 'en' : 'si';
        return lang === 'si' ? (si || en || '') : (en || si || '');
    }

    function updateSystemInstruction() {
        const lang = window.currentLanguage === 'en' ? 'English' : 'Sinhala';
        conversation[0].content = `You are a compassionate Abhidhamma guide named "Dhamma Sahayaka". Use authoritative Theravada sources (Abhidhamma Pitaka, classical commentaries, respected teachers). Provide accurate cross-links between cittas, cetasikas, tri-vidya (rāga, dvesha, moha), and practical cultivation. Respond primarily in ${lang}, but when appropriate include bilingual explanations so Sinhala and English learners both benefit. Keep answers concise: summary, key relationships, and one contemplative or ethical practice. If unsure, say so and recommend consulting a qualified teacher.`;
    }

    function trimConversation() {
        if (conversation.length > MAX_HISTORY) {
            const systemMessage = conversation.shift();
            while (conversation.length >= MAX_HISTORY) {
                conversation.shift();
            }
            conversation.unshift(systemMessage);
        }
    }

    function sanitizeMarkdown(text) {
        const div = document.createElement('div');
        div.textContent = text;
        let safeText = div.innerHTML;

        safeText = safeText.replace(/```([\s\S]*?)```/g, (match, code) => {
            return `<pre class="chatbot-code">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
        });

        safeText = safeText.replace(/`([^`]+)`/g, (match, code) => {
            return `<code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`;
        });

        safeText = safeText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        safeText = safeText.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        safeText = safeText.replace(/\n/g, '<br>');
        return safeText;
    }
})();

