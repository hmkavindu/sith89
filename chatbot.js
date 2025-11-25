(() => {
    function ensureChatbotElements() {
        let launcher = document.getElementById('chatbotLauncher');
        let widget = document.getElementById('chatbotWidget');
        let closeBtn = document.getElementById('chatbotClose');
        let messagesContainer = document.getElementById('chatbotMessages');
        let form = document.getElementById('chatbotForm');
        let input = document.getElementById('chatbotInput');
        let statusEl = document.getElementById('chatbotStatus');

        if (launcher && widget && closeBtn && messagesContainer && form && input && statusEl) {
            return { launcher, widget, closeBtn, messagesContainer, form, input, statusEl };
        }

        if (!document.body) {
            return {};
        }

        const fragment = document.createDocumentFragment();

        launcher = document.createElement('button');
        launcher.id = 'chatbotLauncher';
        launcher.className = 'chatbot-launcher';
        launcher.type = 'button';
        launcher.setAttribute('aria-expanded', 'false');
        launcher.setAttribute('aria-controls', 'chatbotWidget');
        launcher.innerHTML = `
            <span class="chatbot-launcher-icon"><i class="fas fa-comments"></i></span>
            <span class="chatbot-launcher-label" data-si="දම්ම AI උපකාරක" data-en="Dhamma AI Guide">දම්ම AI උපකාරක</span>
        `;
        fragment.appendChild(launcher);

        widget = document.createElement('section');
        widget.id = 'chatbotWidget';
        widget.className = 'chatbot-widget';
        widget.setAttribute('aria-hidden', 'true');
        widget.setAttribute('role', 'dialog');
        widget.setAttribute('aria-label', 'Dhamma AI Chat Assistant');
        widget.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-title-group">
                    <h3 data-si="ධර්ම දැනුම AI උපකාරක" data-en="Dhamma Knowledge Assistant">ධර්ම දැනුම AI උපකාරක</h3>
                    <p data-si="අභිධර්මය, චිත්ත, චෛතසික පිළිබඳ ප්‍රශ්න කරන්න" data-en="Ask about Abhidhamma, chitta, and cetasika insights">අභිධර්මය, චිත්ත, චෛතසික පිළිබඳ ප්‍රශ්න කරන්න</p>
                </div>
                <button id="chatbotClose" class="chatbot-close" aria-label="Close chatbot"><span aria-hidden="true">&times;</span></button>
            </div>
            <div id="chatbotMessages" class="chatbot-messages" aria-live="polite"></div>
            <form id="chatbotForm" class="chatbot-form" autocomplete="off">
                <label class="chatbot-input-label" for="chatbotInput" data-si="ඔබේ ප්‍රශ්නය ලියන්න" data-en="Type your question">
                    ඔබේ ප්‍රශ්නය ලියන්න
                </label>
                <div class="chatbot-input-row">
                    <textarea id="chatbotInput" class="chatbot-input" rows="2" placeholder="අභිධර්මය පිළිබඳව ඔබට වැරදි නොවන විශ්ලේෂණයක් ලබා ගන්න..." data-si-placeholder="අභිධර්මය පිළිබඳව ඔබේ ප්‍රශ්නය ලියන්න..." data-en-placeholder="Ask your Abhidhamma question..." required></textarea>
                    <button id="chatbotSend" type="submit" class="chatbot-send">
                        <span class="chatbot-send-text" data-si="නැව්වන්න" data-en="Send">නැව්වන්න</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
            <div id="chatbotStatus" class="chatbot-status" role="status" aria-live="polite"></div>
        `;
        fragment.appendChild(widget);

        document.body.appendChild(fragment);

        return {
            launcher: document.getElementById('chatbotLauncher'),
            widget: document.getElementById('chatbotWidget'),
            closeBtn: document.getElementById('chatbotClose'),
            messagesContainer: document.getElementById('chatbotMessages'),
            form: document.getElementById('chatbotForm'),
            input: document.getElementById('chatbotInput'),
            statusEl: document.getElementById('chatbotStatus')
        };
    }

    const { launcher, widget, closeBtn, messagesContainer, form, input, statusEl } = ensureChatbotElements();

    if (!launcher || !widget || !messagesContainer || !form || !input || !statusEl) {
        console.warn('Chatbot elements missing, skipping chatbot initialization.');
        return;
    }

    const API_ENDPOINT = '/.netlify/functions/groq-chat';
    const MAX_HISTORY = 16; // includes system prompt

    const conversation = [
        {
            role: 'system',
            content: `You are "ධම්ම සහායක" (Dhamma Sahayaka), an advanced AI Buddhist scholar specializing in Theravada Buddhism and Abhidhamma.

🎯 YOUR EXPERTISE:
- Tipitaka (ත්‍රිපිටකය): Vinaya, Sutta, Abhidhamma Pitakas
- Abhidhamma texts: Dhammasangani, Vibhanga, Kathavatthu, Puggalapannatti, Yamaka, Patthana, Dhatukatha
- Commentaries: Atthasalini, Visuddhimagga, Abhidhammatthasangaha
- 89 Cittas, 52 Cetasikas, 28 Rūpas, Nibbana
- Four Noble Truths, Noble Eightfold Path, Dependent Origination
- Meditation practices: Samatha, Vipassana

📚 KNOWLEDGE SOURCES:
- Tipitaka.lk (ත්‍රිපිටක වෙබ් අඩවිය)
- Classical Pali texts and their Sinhala/English translations
- Renowned teachers: Ven. Narada Thera, Ven. Balangoda Ananda Maitreya, Ven. Rerukane Chandawimala, Ven. Henepola Gunaratana

🌟 RESPONSE FORMAT:
1. **සිංහල පැහැදිලි කිරීම (Sinhala Explanation)**: Clear, detailed explanation in Sinhala
2. **English Summary**: Concise English explanation
3. **ත්‍රිපිටක සම්බන්ධතාව (Tipitaka References)**: Cite relevant suttas or texts when applicable
4. **ප්‍රායෝගික යෙදවීම (Practical Application)**: How to apply this in daily life or meditation
5. **තව දැනගන්න (Further Learning)**: Suggest related topics or practices

🎯 KEY PRINCIPLES:
- Always provide accurate, canonical information
- Use both Sinhala and English for accessibility
- Reference Tipitaka sources (e.g., "අංගුත්තර නිකාය", "Majjhima Nikaya")
- Connect theory to practice
- Be humble about limitations
- Explain complex concepts simply
- Use examples from Buddhist stories when helpful

🔍 WHEN ANSWERING:
- If about Cittas: Explain the consciousness type, associated cetasikas, when it arises
- If about Cetasikas: Explain the mental factor, its function, and practical examples
- If about Dhamma: Connect to Four Noble Truths, cite suttas
- If about practice: Give clear meditation instructions

💡 SPECIAL FOCUS:
- Abhidhamma: 89 Cittas classification, Cetasika functions, Paticca Samuppada
- Mental purification: Understanding kilesas (කිලෙස්)
- Path to Nibbana: Ariya Magga Phala

Always respond with wisdom, compassion, and accuracy. Guide seekers on the path to liberation.`
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
            
            // Check if it's a configuration error (missing API key)
            let errorMessage = getLocalizedText({
                si: 'කණගාටුයි, මේ මොහොතේ පිළිතුර ලබා ගත නොහැකි විය. කරුණාකර ටික වේලාවකට පසු නැවත උත්සාහ කරන්න, නැතහොත් වෙන ප්‍රශ්නයක් අසන්න.',
                en: 'I am sorry, I could not retrieve an answer right now. Please try again shortly or ask a different question.'
            });
            
            // If it's a configuration error, show setup instructions
            if (error.message && error.message.includes('500')) {
                errorMessage = getLocalizedText({
                    si: '⚠️ AI චැට්බොට් වින්‍යාසය අසම්පූර්ණයි.\n\nකරුණාකර මෙම පියවර අනුගමනය කරන්න:\n1. https://console.groq.com වෙබ් අඩවියට පිවිසෙන්න\n2. API Key එකක් ලබා ගන්න\n3. .env ගොනුවක් සාදා GROQ_API_KEY=your_key_here එකතු කරන්න\n4. local-server.js ධාවනය කරන්න',
                    en: '⚠️ AI Chatbot is not configured properly.\n\nPlease follow these steps:\n1. Visit https://console.groq.com\n2. Get an API Key\n3. Create a .env file and add GROQ_API_KEY=your_key_here\n4. Run local-server.js'
                });
            }
            
            appendMessage('assistant', errorMessage);

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
        const primaryLang = lang === 'Sinhala' ? 'සිංහල' : 'English';
        const secondaryLang = lang === 'Sinhala' ? 'English' : 'සිංහල';
        
        conversation[0].content = `You are "ධම්ම සහායක" (Dhamma Sahayaka), an advanced AI Buddhist scholar specializing in Theravada Buddhism and Abhidhamma.

🎯 PRIMARY LANGUAGE: ${primaryLang} (Always start with this language)
🔄 SECONDARY LANGUAGE: Provide brief ${secondaryLang} summary for clarity

📚 YOUR EXPERTISE:
- Complete Tipitaka knowledge (ත්‍රිපිටකය)
- Abhidhamma: 89 Cittas, 52 Cetasikas, Paticca Samuppada
- Meditation: Samatha, Vipassana, practical instructions
- Suttas: Digha, Majjhima, Samyutta, Anguttara, Khuddaka Nikayas
- Path to Nibbana: Four Noble Truths, Noble Eightfold Path

📖 RESPONSE STRUCTURE:
1. **Main Explanation** (in ${primaryLang}): Detailed, clear answer
2. **Brief Translation** (in ${secondaryLang}): Key points
3. **Tipitaka Reference**: Cite relevant suttas (e.g., "MN 10 Satipatthana Sutta")
4. **Practical Application**: How to apply in daily life
5. **Further Study**: Related topics

🌟 GUIDELINES:
- Always cite Tipitaka sources when possible
- Use both Pali terms and translations
- Connect Abhidhamma theory to practice
- Give meditation instructions when relevant
- Be accurate, humble, and compassionate
- Use examples and stories to clarify
- Reference tipitaka.lk content style

ALWAYS respond with wisdom and accuracy, guiding seekers on the path to liberation (නිවන).`;
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

