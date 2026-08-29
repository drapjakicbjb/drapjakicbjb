/**
 * DR. A.P.J. ABDUL KALAM INTER COLLEGE - AI CHATBOT ENGINE
 * Multi-lingual Engine: English, Hindi, Hinglish
 * Generates custom dynamic responses based on site data from all pages.
 */

(function () {
  'use strict';

  // Chatbot State
  const state = {
    isOpen: false,
    currentLang: 'auto', // 'auto', 'en', 'hi', 'hinglish'
    messages: [],
    isTyping: false,
    speechEnabled: false
  };

  // Expose init function globally
  window.initKalamChatbot = initChatbot;

  // Run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }

  function initChatbot() {
    if (document.getElementById('kalam-chat-window')) return; // Avoid duplicate init

    createChatDOM();
    bindEvents();
    loadHistory();
  }

  function createChatDOM() {
    // Floating Launcher Button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'kalam-chat-toggle';
    toggleBtn.className = 'kalam-chat-toggle-btn';
    toggleBtn.setAttribute('aria-label', 'Open AI Assistant');
    toggleBtn.innerHTML = `
      <i class="fas fa-comment-dots"></i>
      <span class="badge-pulse"></span>
    `;

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.id = 'kalam-chat-tooltip';
    tooltip.className = 'kalam-chat-tooltip';
    tooltip.innerHTML = `<i class="fas fa-robot"></i> Ask  BodhSakhā AI (Hindi/Eng/Hinglish)`;

    // Main Chat Window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'kalam-chat-window';
    chatWindow.className = 'kalam-chat-window';
    chatWindow.innerHTML = `
      <!-- Header -->
      <div class="kalam-chat-header">
        <div class="kalam-chat-header-brand">
          <img src="assets/images/logo.webp" alt=" BodhSakhā AI Logo" class="kalam-chat-avatar" onerror="this.src='../assets/images/logo.webp'">
          <div class="kalam-chat-header-info">
            <h4> BodhSakhā AI Assistant</h4>
            <p><span class="kalam-chat-online-dot"></span> Online • 3 Languages</p>
          </div>
        </div>
        <div class="kalam-chat-header-actions">
          <button id="kalam-chat-clear" class="kalam-chat-btn-icon" title="Clear Chat History">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button id="kalam-chat-close" class="kalam-chat-btn-icon" title="Close Chat">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Language Switcher Bar -->
      <div class="kalam-chat-lang-bar">
        <span class="kalam-chat-lang-label"><i class="fas fa-language"></i> Language:</span>
        <div class="kalam-chat-lang-options">
          <button class="kalam-chat-lang-btn active" data-lang="auto">Auto</button>
          <button class="kalam-chat-lang-btn" data-lang="en">English</button>
          <button class="kalam-chat-lang-btn" data-lang="hi">हिंदी</button>
          <button class="kalam-chat-lang-btn" data-lang="hinglish">Hinglish</button>
        </div>
      </div>

      <!-- Messages Area -->
      <div id="kalam-chat-messages" class="kalam-chat-messages"></div>

      <!-- Quick Suggestion Chips -->
      <div class="kalam-chat-suggestions">
        <button class="kalam-chip" data-query="Class 10 fee structure kya hai?">💸 Class 10 Fee Details</button>
        <button class="kalam-chip" data-query="What streams are available in 11th & 12th?">🎓 11th/12th Streams</button>
        <button class="kalam-chip" data-query="School ki chhuttiyan / holidays list dikhao">📅 Holidays List 2026</button>
        <button class="kalam-chip" data-query="Admission process aur required documents kya hai?">📝 Admission Rules</button>
        <button class="kalam-chip" data-query="School address, contact number and timing details">📞 Contact Details</button>
      </div>

      <!-- Input Area -->
      <div class="kalam-chat-input-area">
        <input type="text" id="kalam-chat-input" class="kalam-chat-input" placeholder="Ask anything in English, Hindi, or Hinglish..." autocomplete="off">
        <button id="kalam-chat-send" class="kalam-chat-send-btn" title="Send Message"><i class="fas fa-paper-plane"></i></button>
      </div>
    `;

    document.body.appendChild(toggleBtn);
    document.body.appendChild(tooltip);
    document.body.appendChild(chatWindow);
  }

  function bindEvents() {
    const toggleBtn = document.getElementById('kalam-chat-toggle');
    const closeBtn = document.getElementById('kalam-chat-close');
    const tooltip = document.getElementById('kalam-chat-tooltip');
    const sendBtn = document.getElementById('kalam-chat-send');
    const inputField = document.getElementById('kalam-chat-input');
    const clearBtn = document.getElementById('kalam-chat-clear');
    const langBtns = document.querySelectorAll('.kalam-chat-lang-btn');
    const suggestionChips = document.querySelectorAll('.kalam-chip');

    // Toggle Chat Window
    toggleBtn.addEventListener('click', () => {
      state.isOpen = !state.isOpen;
      const chatWindow = document.getElementById('kalam-chat-window');
      chatWindow.classList.toggle('active', state.isOpen);
      if (state.isOpen) {
        tooltip.style.display = 'none';
        inputField.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      state.isOpen = false;
      document.getElementById('kalam-chat-window').classList.remove('active');
    });

    // Send Message on click or Enter
    sendBtn.addEventListener('click', handleUserSend);
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserSend();
    });

    // Clear History & Reset Conversation Interface
    clearBtn.addEventListener('click', () => {
      clearConversation();
    });

    // Language selection pills
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentLang = btn.dataset.lang;
      });
    });

    // Suggestion Chip Clicks
    suggestionChips.forEach(chip => {
      chip.addEventListener('click', () => {
        inputField.value = chip.dataset.query;
        handleUserSend();
      });
    });
  }

  async function handleUserSend() {
    const inputField = document.getElementById('kalam-chat-input');
    const text = inputField.value.trim();
    if (!text || state.isTyping) return;

    // Add user message
    addMessage(text, 'user');
    inputField.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Process AI response dynamically via AI Engine & All-Page Data
    try {
      let botResponse;
      if (window.KalamChatAPI && typeof window.KalamChatAPI.processChatRequest === 'function') {
        botResponse = await window.KalamChatAPI.processChatRequest(text, state.currentLang);
      } else {
        botResponse = generateDynamicResponse(text);
      }
      hideTypingIndicator();
      addMessage(botResponse.html, 'bot', botResponse.text);
    } catch (err) {
      hideTypingIndicator();
      const fallback = generateDynamicResponse(text);
      addMessage(fallback.html, 'bot', fallback.text);
    }
  }

  function addMessage(htmlContent, sender, plainText = '') {
    const msgObj = {
      html: htmlContent,
      sender: sender,
      plainText: plainText || htmlContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    state.messages.push(msgObj);
    saveHistory();
    renderMessage(msgObj);
  }

  function renderMessage(msgObj) {
    const msgContainer = document.getElementById('kalam-chat-messages');
    const row = document.createElement('div');
    row.className = `kalam-msg-row ${msgObj.sender}`;

    const icon = msgObj.sender === 'user' ? `<i class="fas fa-user"></i>` : `<i class="fas fa-robot"></i>`;

    row.innerHTML = `
      <div class="kalam-msg-avatar">${icon}</div>
      <div class="kalam-msg-content">
        <div class="kalam-msg-bubble">${msgObj.html}</div>
        <span class="kalam-msg-time">${msgObj.timestamp}</span>
      </div>
    `;

    msgContainer.appendChild(row);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function showTypingIndicator() {
    state.isTyping = true;
    const msgContainer = document.getElementById('kalam-chat-messages');
    const indicator = document.createElement('div');
    indicator.id = 'kalam-typing-indicator';
    indicator.className = 'kalam-msg-row bot';
    indicator.innerHTML = `
      <div class="kalam-msg-avatar"><i class="fas fa-robot"></i></div>
      <div class="kalam-msg-content">
        <div class="kalam-msg-bubble">
          <div class="kalam-typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
    msgContainer.appendChild(indicator);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function hideTypingIndicator() {
    state.isTyping = false;
    const indicator = document.getElementById('kalam-typing-indicator');
    if (indicator) indicator.remove();
  }

  /* --------------------------------------------------------------------------
     DYNAMIC NLP RESPONSE ENGINE (ENGLISH, HINDI, HINGLISH)
     -------------------------------------------------------------------------- */
  function generateDynamicResponse(query) {
    const q = query.toLowerCase();
    const kb = window.KalamChatbotKB || {};

    // Detect language of the prompt if 'auto'
    let lang = state.currentLang;
    if (lang === 'auto') {
      if (/[\u0900-\u097F]/.test(query)) {
        lang = 'hi'; // Hindi Script
      } else if (/\b(hai|kya|kaun|kaise|kitni|kitna|chhutti|pariksha|shuru|batao|chahiye|hain|par|se)\b/i.test(query)) {
        lang = 'hinglish'; // Hinglish
      } else {
        lang = 'en'; // English default
      }
    }

    // Entity extractions
    const isFees = /\b(fee|fees|dues|charge|cost|paisa|rupee|rs|kitna|kitni)\b/i.test(q);
    const isStream = /\b(stream|streams|subject|subjects|pcm|pcb|pcmb|commerce|arts|biology|math|science|agriculture|nsqf|vocational)\b/i.test(q);
    const isHoliday = /\b(holiday|holidays|chhutti|chutti|vacation|leave|calendar|diwali|holi|eid|summer|winter)\b/i.test(q);
    const isAdmission = /\b(admission|admissions|dakhila|form|documents|document|tc|eligibility|process|join|apply)\b/i.test(q);
    const isContact = /\b(contact|phone|mobile|number|call|email|address|pata|location|where|timing|time|open|code|udise)\b/i.test(q);
    const isNotice = /\b(notice|noticeboard|exam|exams|test|result|update|announcement|news)\b/i.test(q);
    const isStudyHub = /\b(study|hub|simulator|simulators|calculator|cgpa|sgpa|grade|heart|periodic|solar|cell|optics)\b/i.test(q);
    const isCareer = /\b(career|job|jobs|vacancy|vacancies|teacher|recruitment|hire|hiring)\b/i.test(q);

    // Specific Class Extraction (e.g. "class 10", "10th", "nursery", "class 5")
    let targetClass = null;
    const classMatch = q.match(/\b(nursery|lkg|ukg|class\s*\d{1,2}|\d{1,2}th)\b/i);
    if (classMatch) {
      targetClass = classMatch[0].toUpperCase();
    }

    // 1. FEE INQUIRIES
    if (isFees) {
      return buildFeesResponse(targetClass, lang, kb);
    }

    // 2. STREAM & SUBJECT INQUIRIES
    if (isStream) {
      return buildStreamsResponse(q, lang, kb);
    }

    // 3. HOLIDAY & CALENDAR INQUIRIES
    if (isHoliday) {
      return buildHolidaysResponse(q, lang, kb);
    }

    // 4. ADMISSION INQUIRIES
    if (isAdmission) {
      return buildAdmissionResponse(lang, kb);
    }

    // 5. CONTACT & LOCATION & CODES
    if (isContact) {
      return buildContactResponse(lang, kb);
    }

    // 6. NOTICEBOARD & EXAMS
    if (isNotice) {
      return buildNoticeResponse(lang, kb);
    }

    // 7. STUDY HUB & SIMULATORS
    if (isStudyHub) {
      return buildStudyHubResponse(lang, kb);
    }

    // 8. CAREERS & TEACHER POSITIONS
    if (isCareer) {
      return buildCareerResponse(lang, kb);
    }

    // 9. GREETINGS & GENERAL CONVERSATION
    if (/\b(hi|hello|hey|namaste|pranam|good morning|good afternoon|good evening)\b/i.test(q)) {
      if (lang === 'hi') {
        return {
          html: `<p>नमस्ते! 🙏 मैं <strong>डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज</strong> का एआई सहायक हूँ।</p><p>आप मुझसे फीस संरचना, स्ट्रीम, एडमिशन प्रक्रिया, छुट्टियों और अध्ययन सामग्री के बारे में कोई भी प्रश्न पूछ सकते हैं!</p>`,
          text: `नमस्ते! मैं डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज का एआई सहायक हूँ। आप मुझसे फीस, एडमिशन या छुट्टियों के बारे में पूछ सकते हैं।`
        };
      } else if (lang === 'hinglish') {
        return {
          html: `<p>Hello! 🙏 Main <strong>Dr. A.P.J. Abdul Kalam Inter College</strong> ka AI Assistant hoon.</p><p>Aap mujhse Fees, Streams, Admission process, Holidays list, ya Study tools ke baare mein kuchh bhi puchh sakte hain!</p>`,
          text: `Hello! Main Dr APJ Abdul Kalam Inter College ka AI assistant hoon. Aap mujhse fees, admission ya holidays ke baare mein puchh sakte hain.`
        };
      } else {
        return {
          html: `<p>Hello! 👋 Welcome to <strong>Dr. A.P.J. Abdul Kalam Inter College</strong> AI Assistant.</p><p>How can I help you today? You can ask me about Fee structure, Academic Streams, Admissions, Holidays, or Study Tools!</p>`,
          text: `Hello! Welcome to Dr APJ Abdul Kalam Inter College AI Assistant. How can I help you today?`
        };
      }
    }

    // DEFAULT FALLBACK: Intelligent Synthesis
    return buildFallbackResponse(query, lang, kb);
  }

  /* --- RESPONSE BUILDERS FOR DIFFERENT DOMAINS --- */

  function buildFeesResponse(targetClass, lang, kb) {
    const feeData = kb.fees ? kb.fees.structure : [];

    let matchedFee = null;
    if (targetClass) {
      const num = targetClass.replace(/\D/g, '');
      if (num) {
        matchedFee = feeData.find(f => f.classLevel.includes(num));
      } else if (targetClass.includes('NUR') || targetClass.includes('LKG') || targetClass.includes('UKG')) {
        matchedFee = feeData[0];
      }
    }

    if (lang === 'hi') {
      let content = `<p>💸 <strong>फीस संरचना (सत्र 2026-2027):</strong></p>`;
      if (matchedFee) {
        content += `<p><strong>${matchedFee.classLevel} (${matchedFee.wing}):</strong></p>
        <ul>
          <li>मासिक शुल्क (छात्र): ₹${matchedFee.monthlyBoys} / माह</li>
          <li>मासिक शुल्क (छात्राएं): ₹${matchedFee.monthlyGirls} / माह</li>
          <li>परीक्षा शुल्क: ₹${matchedFee.testFee}</li>
          <li>अर्धवार्षिक/वार्षिक शुल्क: ₹${matchedFee.examCharges}</li>
          <li>कुल वार्षिक शुल्क: ₹${matchedFee.annualBoys} (छात्र) / ₹${matchedFee.annualGirls} (छात्राएं)</li>
        </ul>`;
      } else {
        content += `<p>विभिन्न कक्षाओं का मासिक शुल्क विवरण:</p>
        <ul>
          <li><strong>नर्सरी से कक्षा 5:</strong> ₹485 - ₹530 / माह</li>
          <li><strong>कक्षा 6 से 8:</strong> ₹575 - ₹620 / माह</li>
          <li><strong>कक्षा 9 व 10:</strong> ₹700 - ₹880 / माह</li>
          <li><strong>कक्षा 11 व 12:</strong> ₹880 - ₹1050 / माह</li>
        </ul>`;
      }
      content += `<p style="font-size:0.8rem; opacity:0.9;">* प्रति माह 10 तारीख से पहले फीस जमा करना अनिवार्य है।</p>`;
      content += `<a href="${kb.fees.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> पूरा फीस कार्ड देखें</a>`;

      return { html: content, text: `फीस विवरण: कक्षा 1 से 12 तक की मासिक फीस ₹485 से ₹1050 के बीच है। अधिक जानकारी के लिए फीस पेज देखें।` };
    } else if (lang === 'hinglish') {
      let content = `<p>💸 <strong>Fee Details (Session 2026-27):</strong></p>`;
      if (matchedFee) {
        content += `<p><strong>${matchedFee.classLevel} (${matchedFee.wing}):</strong></p>
        <ul>
          <li>Monthly Fee (Boys): ₹${matchedFee.monthlyBoys}/month</li>
          <li>Monthly Fee (Girls): ₹${matchedFee.monthlyGirls}/month</li>
          <li>Test Fee: ₹${matchedFee.testFee}</li>
          <li>Exam Charges: ₹${matchedFee.examCharges}</li>
          <li>Total Annual Fee: ₹${matchedFee.annualBoys} (Boys) / ₹${matchedFee.annualGirls} (Girls)</li>
        </ul>`;
      } else {
        content += `<p>Monthly tuition fee breakdown:</p>
        <ul>
          <li><strong>Nur to Class 5:</strong> ₹485 - ₹530 / month</li>
          <li><strong>Class 6 to 8:</strong> ₹575 - ₹620 / month</li>
          <li><strong>Class 9 & 10:</strong> ₹700 - ₹880 / month</li>
          <li><strong>Class 11 & 12:</strong> ₹880 - ₹1050 / month</li>
        </ul>`;
      }
      content += `<p style="font-size:0.8rem;">* Har mahine ki 10 tareekh tak counter par fee submit karein.</p>`;
      content += `<a href="${kb.fees.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> Open Full Fee Table</a>`;

      return { html: content, text: `Fee details: Monthly fee for classes range from 485 to 1050 rupees depending on class and medium.` };
    } else {
      // English
      let content = `<p>💸 <strong>School Fee Structure (2026-27):</strong></p>`;
      if (matchedFee) {
        content += `<p><strong>${matchedFee.classLevel} (${matchedFee.wing}):</strong></p>
        <ul>
          <li>Monthly Tuition (Boys): ₹${matchedFee.monthlyBoys}</li>
          <li>Monthly Tuition (Girls): ₹${matchedFee.monthlyGirls}</li>
          <li>Test Fee: ₹${matchedFee.testFee}</li>
          <li>Exam Charges: ₹${matchedFee.examCharges}</li>
          <li>Total Annual: ₹${matchedFee.annualBoys} (Boys) / ₹${matchedFee.annualGirls} (Girls)</li>
        </ul>`;
      } else {
        content += `<p>Overview of monthly tuition charges:</p>
        <ul>
          <li><strong>Nursery – Class 5:</strong> ₹485 – ₹530 / mo</li>
          <li><strong>Class 6 – 8:</strong> ₹575 – ₹620 / mo</li>
          <li><strong>Class 9 – 10:</strong> ₹700 – ₹880 / mo</li>
          <li><strong>Class 11 – 12:</strong> ₹880 – ₹1050 / mo</li>
        </ul>`;
      }
      content += `<a href="${kb.fees.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> View Detailed Fee Page</a>`;

      return { html: content, text: `School fee structure overview. Monthly tuition ranges from 485 to 1050 rupees.` };
    }
  }

  function buildStreamsResponse(query, lang, kb) {
    const interStreams = kb.streams ? kb.streams.intermediate : [];

    if (lang === 'hi') {
      let content = `<p>🎓 <strong>उपलब्ध शेक्षणिक स्ट्रीम (कक्षा 11 व 12):</strong></p><ul>`;
      interStreams.forEach(s => {
        content += `<li><strong>${s.name}:</strong> ${s.subjects}</li>`;
      });
      content += `</ul><p>हाईस्कूल (कक्षा 9-10) में विज्ञान, वाणिज्य, कला तथा NSQF वोकेशनल विषय उपलब्ध हैं।</p>`;
      content += `<a href="${kb.streams.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> स्ट्रीम विवरण देखें</a>`;

      return { html: content, text: `कक्षा 11 और 12 के लिए मैथ (PCM), बायो (PCB), कृषि (Agriculture), कॉमर्स और आर्ट्स स्ट्रीम उपलब्ध हैं।` };
    } else if (lang === 'hinglish') {
      let content = `<p>🎓 <strong>Academic Streams (11th & 12th):</strong></p><ul>`;
      interStreams.forEach(s => {
        content += `<li><strong>${s.name}:</strong> ${s.subjects}</li>`;
      });
      content += `</ul><p>Class 9-10 me Science, Commerce, Arts aur NSQF Vocational streams offered hain.</p>`;
      content += `<a href="${kb.streams.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> Explore Streams Page</a>`;

      return { html: content, text: `11th and 12th me PCM, PCB, Agriculture, Commerce aur Arts streams available hain.` };
    } else {
      let content = `<p>🎓 <strong>Academic Streams Offered (Class 11-12):</strong></p><ul>`;
      interStreams.forEach(s => {
        content += `<li><strong>${s.name}:</strong> ${s.subjects} (Careers: ${s.careers})</li>`;
      });
      content += `</ul>`;
      content += `<a href="${kb.streams.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> View Streams & Pathways</a>`;

      return { html: content, text: `Available streams in 11th and 12th include Science PCM, PCB, Agriculture, Commerce, and Arts.` };
    }
  }

  function buildHolidaysResponse(query, lang, kb) {
    const list = kb.holidays ? kb.holidays.majorHolidays : [];
    const vac = kb.holidays ? kb.holidays.vacations : [];

    if (lang === 'hi') {
      let content = `<p>📅 <strong>अवकाश एवं छुट्टी कैलेंडर (2026-27):</strong></p>`;
      content += `<p><strong>मुख्य छुट्टियां:</strong></p><ul>`;
      vac.forEach(v => {
        content += `<li><strong>${v.name}:</strong> ${v.dates}</li>`;
      });
      content += `</ul><p><strong>आगामी त्यौहार एवं पर्व:</strong></p><ul>`;
      list.slice(0, 5).forEach(h => {
        content += `<li>${h.date} — <strong>${h.event}</strong></li>`;
      });
      content += `</ul>`;
      content += `<a href="${kb.holidays.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> पूरा अवकाश कैलेंडर देखें</a>`;

      return { html: content, text: `स्कूल छुट्टियों का विवरण: समर वैकेशन 20 मई से 30 जून तक और विंटर ब्रेक 25 दिसंबर से 5 जनवरी तक रहेगा।` };
    } else if (lang === 'hinglish') {
      let content = `<p>📅 <strong>School Holiday Calendar (2026-27):</strong></p>`;
      content += `<p><strong>Main Vacations:</strong></p><ul>`;
      vac.forEach(v => {
        content += `<li><strong>${v.name}:</strong> ${v.dates}</li>`;
      });
      content += `</ul><p><strong>Upcoming Holidays:</strong></p><ul>`;
      list.slice(0, 5).forEach(h => {
        content += `<li>${h.date} — <strong>${h.event}</strong></li>`;
      });
      content += `</ul>`;
      content += `<a href="${kb.holidays.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> Full Holidays List</a>`;

      return { html: content, text: `Holidays list: Summer break 20 May to 30 June and Winter break 25 Dec to 5 Jan.` };
    } else {
      let content = `<p>📅 <strong>Academic Holiday List (2026-27):</strong></p>`;
      content += `<p><strong>Vacations:</strong></p><ul>`;
      vac.forEach(v => {
        content += `<li><strong>${v.name}:</strong> ${v.dates}</li>`;
      });
      content += `</ul><p><strong>Key Festival Holidays:</strong></p><ul>`;
      list.slice(0, 5).forEach(h => {
        content += `<li>${h.date}: <strong>${h.event}</strong></li>`;
      });
      content += `</ul>`;
      content += `<a href="${kb.holidays.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> View Full Calendar</a>`;

      return { html: content, text: `Academic holiday list including Summer Break May 20 to June 30 and Winter Break Dec 25 to Jan 5.` };
    }
  }

  function buildAdmissionResponse(lang, kb) {
    const docs = kb.admissions ? kb.admissions.documentsRequired : [];

    if (lang === 'hi') {
      let content = `<p>📝 <strong>प्रवेश जानकारी (सत्र 2026-27):</strong></p>`;
      content += `<p>वर्तमान में सत्र 2026-27 के लिए <strong>प्रवेश बंद (Closed)</strong> हैं। सामान्य जानकारी या आगामी अपडेट हेतु कार्यालय से संपर्क करें। आवश्यक दस्तावेज सूची:</p><ul>`;
      docs.forEach(d => content += `<li>${d}</li>`);
      content += `</ul>`;
      content += `<a href="${kb.admissions.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-info-circle"></i> प्रवेश नियम देखें</a>`;
      content += `<a href="tel:+919648904085" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> कार्यालय से संपर्क करें</a>`;

      return { html: content, text: `सत्र 2026-27 के लिए प्रवेश वर्तमान में बंद हैं। आवश्यक जानकारी के लिए स्कूल कार्यालय से संपर्क करें।` };
    } else if (lang === 'hinglish') {
      let content = `<p>📝 <strong>Admission Guidelines (Session 2026-27):</strong></p>`;
      content += `<p>Admissions for session 2026-27 are currently <strong>CLOSED</strong>. For enquiries, contact school office. Document reference:</p><ul>`;
      docs.forEach(d => content += `<li>${d}</li>`);
      content += `</ul>`;
      content += `<a href="${kb.admissions.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-info-circle"></i> Admission Section</a>`;
      content += `<a href="tel:+919648904085" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> Call Office</a>`;

      return { html: content, text: `Admissions 2026-27 are currently CLOSED. Contact school desk for mid-session queries.` };
    } else {
      let content = `<p>📝 <strong>Admission Guidelines (Session 2026-27):</strong></p>`;
      content += `<p>Admissions for session 2026-27 are currently <strong>CLOSED</strong>. For mid-term queries or upcoming intake, please contact the office desk. Reference documents:</p><ul>`;
      docs.forEach(d => content += `<li>${d}</li>`);
      content += `</ul>`;
      content += `<a href="${kb.admissions.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-info-circle"></i> Admission Details</a>`;

      return { html: content, text: `Admissions for session 2026-27 are currently closed. Please contact school counter.` };
    }
  }

  function buildContactResponse(lang, kb) {
    const info = kb.schoolInfo || {};
    const codes = info.officialCodes || {};

    if (lang === 'hi') {
      let content = `<p>📞 <strong>विद्यालय संपर्क एवं आधिकारिक जानकारी:</strong></p>
      <ul>
        <li><strong>पता:</strong> ${info.address}</li>
        <li><strong>फोन नंबर:</strong> ${info.phone}</li>
        <li><strong>व्हाट्सएप:</strong> ${info.whatsapp}</li>
        <li><strong>ईमेल:</strong> ${info.email}</li>
        <li><strong>समय:</strong> ${info.timings}</li>
        <li><strong>कॉलेज कोड:</strong> ${codes.collegeCode}</li>
        <li><strong>UDISE (इंटर कॉलेज):</strong> ${codes.udiseInterCollege}</li>
      </ul>
      <a href="tel:${info.phone}" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> अभी कॉल करें</a>
      <a href="https://wa.me/919454242284" target="_blank" class="kalam-chat-action-btn"><i class="fab fa-whatsapp"></i> व्हाट्सएप चैट</a>`;

      return { html: content, text: `संपर्क विवरण: डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज, बेलवरिया जंगल, बस्ती। फोन: +91 9648904085.` };
    } else if (lang === 'hinglish') {
      let content = `<p>📞 <strong>School Contact & Location:</strong></p>
      <ul>
        <li><strong>Address:</strong> ${info.address}</li>
        <li><strong>Phone:</strong> ${info.phone}</li>
        <li><strong>WhatsApp:</strong> ${info.whatsapp}</li>
        <li><strong>Email:</strong> ${info.email}</li>
        <li><strong>Office Hours:</strong> ${info.timings}</li>
        <li><strong>School Code:</strong> ${codes.collegeCode} (UDISE: ${codes.udiseInterCollege})</li>
      </ul>
      <a href="tel:${info.phone}" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> Call Office</a>
      <a href="https://wa.me/919454242284" target="_blank" class="kalam-chat-action-btn"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>`;

      return { html: content, text: `School contact details: Address Belwariya Jungle Basti. Phone +91 9648904085.` };
    } else {
      let content = `<p>📞 <strong>Contact Details & School Profile:</strong></p>
      <ul>
        <li><strong>Address:</strong> ${info.address}</li>
        <li><strong>Phone:</strong> ${info.phone}</li>
        <li><strong>WhatsApp:</strong> ${info.whatsapp}</li>
        <li><strong>Email:</strong> ${info.email}</li>
        <li><strong>Office Hours:</strong> ${info.timings}</li>
        <li><strong>College Code:</strong> ${codes.collegeCode}</li>
      </ul>
      <a href="tel:${info.phone}" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> Call School Office</a>`;

      return { html: content, text: `Contact details for Dr APJ Abdul Kalam Inter College Basti. Phone: 9648904085.` };
    }
  }

  function buildNoticeResponse(lang, kb) {
    const alerts = kb.noticeboard ? kb.noticeboard.recentAlerts : [];

    let content = `<p>📢 <strong>Recent Updates & Noticeboard Alerts:</strong></p><ul>`;
    alerts.forEach(a => content += `<li>${a}</li>`);
    content += `</ul>`;
    content += `<a href="${kb.noticeboard.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-bullhorn"></i> Open Noticeboard</a>`;

    return { html: content, text: `Latest noticeboard updates include admissions open for 2026-27 and UP Board prep classes.` };
  }

  function buildStudyHubResponse(lang, kb) {
    const sims = kb.studyHub ? kb.studyHub.interactiveSimulators : [];

    let content = `<p>🔬 <strong>Interactive Study Hub & Learning Tools:</strong></p><ul>`;
    sims.forEach(s => content += `<li><strong>${s.name}</strong> (${s.category})</li>`);
    content += `</ul>`;
    content += `<a href="${kb.studyHub.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-atom"></i> Explore Study Hub</a>`;
    content += `<a href="/GradeCalc" class="kalam-chat-action-btn"><i class="fas fa-calculator"></i> SGPA / CGPA Calculator</a>`;

    return { html: content, text: `Study hub includes 3D Heart simulator, Periodic Table, Solar system explorer, and Grade Calculator.` };
  }

  function buildCareerResponse(lang, kb) {
    const positions = kb.careers ? kb.careers.teacherPositions : [];

    let content = `<p>💼 <strong>Careers & Staff Recruitment:</strong></p><p>Available positions:</p><ul>`;
    positions.forEach(p => content += `<li>${p}</li>`);
    content += `</ul><p>Send CV to <strong>drapjakicbjb@gmail.com</strong>.</p>`;
    content += `<a href="${kb.careers.pageUrl}" class="kalam-chat-action-btn"><i class="fas fa-briefcase"></i> View Career Page</a>`;

    return { html: content, text: `Recruitment open for PGT, TGT, PRT teachers and computer lab assistant. Send CV to drapjakicbjb@gmail.com.` };
  }

  function buildFallbackResponse(query, lang, kb) {
    if (lang === 'hi') {
      return {
        html: `<p>मैं आपका प्रश्न समझ गया हूँ: <em>"${escapeHtml(query)}"</em></p>
        <p>डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज के मुख्य अनुभागों की जानकारी:</p>
        <ul>
          <li>💸 <strong><a href="/fees">फीस संरचना</a>:</strong> सभी कक्षाओं की फीस और भुगतान नियम</li>
          <li>🎓 <strong><a href="/streams">शैक्षणिक स्ट्रीम</a>:</strong> साइंस (PCM/PCB), कॉमर्स, आर्ट्स व एग्रीकल्चर</li>
          <li>📅 <strong><a href="/holidays">अवकाश तालिका</a>:</strong> 2026-27 के अवकाश और त्यौहार</li>
          <li>📝 <strong><a href="/#admissions">प्रवेश प्रक्रिया</a>:</strong> रजिस्ट्रेशन एवं दस्तावेज</li>
        </ul>
        <p>अधिक जानकारी के लिए कृपया स्कूल कार्यालय से +91 9648904085 पर संपर्क करें।</p>`,
        text: `मैं आपका प्रश्न समझ गया हूँ। आप फीस, स्ट्रीम, छुट्टियों और एडमिशन के बारे में पूछ सकते हैं।`
      };
    } else if (lang === 'hinglish') {
      return {
        html: `<p>Aapka query check kiya: <em>"${escapeHtml(query)}"</em></p>
        <p>School website ki main details:</p>
        <ul>
          <li>💸 <strong><a href="/fees">Fees Details</a>:</strong> Monthly & annual charges for all classes</li>
          <li>🎓 <strong><a href="/streams">Academic Streams</a>:</strong> PCM, PCB, Agriculture, Commerce, Arts</li>
          <li>📅 <strong><a href="/holidays">Holidays List</a>:</strong> Vacation dates & festival list</li>
          <li>📞 <strong><a href="/#contact">Contact</a>:</strong> Call office at +91 9648904085</li>
        </ul>`,
        text: `Aapka question received. You can ask about fees, streams, holidays or call school helpline at 9648904085.`
      };
    } else {
      return {
        html: `<p>Thank you for asking: <em>"${escapeHtml(query)}"</em></p>
        <p>Here are quick links to the information you might be looking for:</p>
        <ul>
          <li>💸 <strong><a href="/fees">Fee Structure Page</a></strong></li>
          <li>🎓 <strong><a href="/streams">Academic & Vocational Streams</a></strong></li>
          <li>📅 <strong><a href="/holidays">Holiday Calendar 2026-27</a></strong></li>
          <li>📝 <strong><a href="/#admissions">Admission Procedure</a></strong></li>
        </ul>
        <p>You can also call the school office at +91 9648904085.</p>`,
        text: `Thank you for your question. You can explore the fee structure, academic streams, and holiday calendar on our website.`
      };
    }
  }

  /* --- STORAGE & UTILS --- */

  function clearConversation() {
    localStorage.removeItem('kalam_chat_history');
    state.messages = [];

    const msgContainer = document.getElementById('kalam-chat-messages');
    if (msgContainer) {
      msgContainer.innerHTML = '';
    }

    const inputField = document.getElementById('kalam-chat-input');
    if (inputField) {
      inputField.value = '';
      inputField.focus();
    }

    renderWelcomeMessage();
  }

  function renderWelcomeMessage() {
    let welcomeHTML = '';
    let speechText = '';

    if (state.currentLang === 'hi') {
      welcomeHTML = `
        <p>👋 <strong>डॉ. ए.पी.जे. अब्दुल कलाम इंटर कॉलेज में आपका स्वागत है!</strong></p>
        <p>नई बातचीत शुरू हो गई है। मैं आपका एआई सहायक हूँ। आप मुझसे <strong>फीस, एडमिशन, स्ट्रीम या छुट्टियों</strong> के बारे में कोई भी सवाल पूछ सकते हैं!</p>
      `;
      speechText = 'डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज एआई सहायक में आपका स्वागत है। नई बातचीत शुरू हो गई है।';
    } else if (state.currentLang === 'hinglish') {
      welcomeHTML = `
        <p>👋 <strong>Welcome to Dr. A.P.J. Abdul Kalam Inter College!</strong></p>
        <p>New conversation started! Main aapka AI Assistant hoon. Aap मुझसे Fees, Streams, Admission rules ya Holidays list ke baare mein pooch sakte hain!</p>
      `;
      speechText = 'Welcome to Dr APJ Abdul Kalam Inter College AI Assistant. New conversation started.';
    } else {
      welcomeHTML = `
        <p>👋 <strong>Welcome to Dr. A.P.J. Abdul Kalam Inter College!</strong></p>
        <p>A new conversation has started. I am your smart AI Assistant. I can help you in <strong>English, Hindi (हिंदी), or Hinglish</strong>.</p>
        <p>How can I assist you today? Select a quick option below or type your question!</p>
      `;
      speechText = 'Welcome to Dr APJ Abdul Kalam Inter College AI Assistant. A new conversation has started.';
    }

    addMessage(welcomeHTML, 'bot', speechText);
  }

  function saveHistory() {
    try {
      localStorage.setItem('kalam_chat_history', JSON.stringify(state.messages.slice(-20)));
    } catch (e) {
      console.warn('Could not save chat history', e);
    }
  }

  function loadHistory() {
    try {
      const saved = localStorage.getItem('kalam_chat_history');
      if (saved) {
        state.messages = JSON.parse(saved);
        state.messages.forEach(msg => renderMessage(msg));
      } else {
        renderWelcomeMessage();
      }
    } catch (e) {
      renderWelcomeMessage();
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

})();
