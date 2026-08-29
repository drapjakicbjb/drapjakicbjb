/**
 * Copyright (c) 2008-2026 Tarun Yadav / Dr. A.P.J. Abdul Kalam Inter College.
 * ALL RIGHTS RESERVED. PROPRIETARY CODE.
 * External AI API Integrator & Dynamic RAG Context Generator.
 * Unauthorized copying, cloning, or distribution of this code in any format is strictly prohibited.
 */

window.BodhSakhāAIEngine = (function () {
  'use strict';

  // API Config (Can be set via window.KALAM_AI_CONFIG = { apiKey: '...' })
  const config = {
    apiKey: (window.KALAM_AI_CONFIG && window.KALAM_AI_CONFIG.apiKey) || 'AIzaSyDM8YSU4ZOySKww1uGL7y4qViK-6ZztzSA',
    geminiEndpoint: (window.KALAM_AI_CONFIG && window.KALAM_AI_CONFIG.geminiEndpoint) || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent'
  };

  /**
   * Main function to generate custom response for any query
   */
  async function generateCustomResponse(query, lang = 'auto') {
    const data = window.KalamAllPagesData || {};
    const contextString = buildContextString(data);

    // If Gemini API key is configured, call external Gemini AI API!
    if (config.apiKey) {
      try {
        const aiResponse = await callGeminiAPI(query, contextString, lang);
        if (aiResponse) return aiResponse;
      } catch (err) {
        console.warn('External Gemini API call failed, switching to dynamic RAG engine:', err);
      }
    }

    // Dynamic Context Synthesis Engine (RAG) using full page data
    return generateDynamicRAGResponse(query, data, lang);
  }

  /**
   * Calls External Gemini API Endpoint with pre-loaded All-Page Knowledge Context
   */
  async function callGeminiAPI(query, context, lang) {
    const systemPrompt = `You are  BodhSakhā AI, the official intelligent assistant for Dr. A.P.J. Abdul Kalam Inter College (Belwariya Jungle, Basti, UP).
Use the following official website dataset from ALL pages of the school website to answer the user's question accurately.
Website Context:
${context}

Instructions:
1. Provide a direct, customized, helpful response answering the exact question asked.
2. If the user asks in Hindi, respond in Hindi (हिंदी). If in Hinglish (Roman Hindi), respond in Hinglish. If in English, respond in English.
3. Include relevant page links (e.g. /fees, /streams, /holidays, /noticeboard, /study, /#admissions) when applicable.
4. Do not provide static generic template responses. Tailor the answer to the user's query.`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: `${systemPrompt}\n\nUser Question: ${query}` }
          ]
        }
      ]
    };

    const url = `${config.geminiEndpoint}?key=${config.apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) throw new Error(`API HTTP error ${response.status}`);

    const result = await response.json();
    if (result.candidates && result.candidates[0] && result.candidates[0].content) {
      const rawText = result.candidates[0].content.parts[0].text;
      const htmlFormatted = formatMarkdownToHTML(rawText);
      return { html: htmlFormatted, text: rawText };
    }
    return null;
  }

  /**
   * Compiles complete dataset from all pages into structured text context
   */
  function buildContextString(kb) {
    if (!kb || !kb.pages) return '';
    const p = kb.pages;
    let ctx = `SCHOOL INFO: ${p.home.title}, Address: ${p.home.contact.address}, Phone: ${p.home.contact.phone}, Timings: ${p.home.contact.timings}\n`;
    ctx += `FEE STRUCTURE: ${JSON.stringify(p.fees.table)}\n`;
    ctx += `ACADEMIC STREAMS: Highschool: ${p.streams.highSchool}. Intermediate: ${JSON.stringify(p.streams.intermediate)}\n`;
    ctx += `HOLIDAYS & VACATIONS: ${JSON.stringify(p.holidays.vacations)}, Festivals: ${JSON.stringify(p.holidays.festivals)}\n`;
    ctx += `ADMISSIONS: Status: ${p.admissions.status}, Docs: ${p.admissions.requiredDocuments.join(', ')}\n`;
    ctx += `NOTICES: ${JSON.stringify(p.noticeboard.recentNotices)}\n`;
    ctx += `CAREERS: Positions: ${p.careers.openings.join(', ')}, Email: ${p.careers.application}\n`;
    ctx += `STUDY TOOLS & SIMULATORS: ${JSON.stringify(p.studyHub.simulators)}\n`;
    return ctx;
  }

  /**
   * Advanced Client-Side RAG Synthesizer that generates custom outputs using all page data
   */
  function generateDynamicRAGResponse(query, kb, lang) {
    const q = query.toLowerCase();
    const p = kb.pages || {};

    // Language Detection
    let targetLang = lang;
    if (targetLang === 'auto') {
      if (/[\u0900-\u097F]/.test(query)) {
        targetLang = 'hi';
      } else if (/\b(hai|kya|kaun|kaise|kitni|kitna|chhutti|pariksha|shuru|batao|chahiye|hain|par|se|kab)\b/i.test(query)) {
        targetLang = 'hinglish';
      } else {
        targetLang = 'en';
      }
    }

    // Match Keywords against all pages
    const matches = [];

    // Check Fees Page
    if (/\b(fee|fees|dues|cost|charge|money|rupee|rs|kitni|paisa|class\s*\d+|\d+th|nursery|lkg|ukg)\b/i.test(q)) {
      matches.push(buildCustomFeesContent(q, p.fees, targetLang));
    }

    // Check Streams Page
    if (/\b(stream|streams|subject|subjects|pcm|pcb|pcmb|commerce|arts|agriculture|biology|math|science|nsqf|vocational)\b/i.test(q)) {
      matches.push(buildCustomStreamsContent(q, p.streams, targetLang));
    }

    // Check Holidays Page
    if (/\b(holiday|holidays|chhutti|chutti|vacation|leave|calendar|summer|winter|diwali|holi|eid|raksha|dussehra)\b/i.test(q)) {
      matches.push(buildCustomHolidaysContent(q, p.holidays, targetLang));
    }

    // Check Admissions Page
    if (/\b(admission|admissions|dakhila|form|document|documents|tc|marksheet|aadhar|join|register|apply)\b/i.test(q)) {
      matches.push(buildCustomAdmissionsContent(q, p.admissions, targetLang));
    }

    // Check Notices Page
    if (/\b(notice|notices|noticeboard|exam|exams|test|time|timing|schedule|board|upmsp|up board)\b/i.test(q)) {
      matches.push(buildCustomNoticesContent(q, p.noticeboard, targetLang));
    }

    // Check Careers Page
    if (/\b(career|careers|job|jobs|vacancy|vacancies|teacher|pgt|tgt|prt|recruitment|hire|staff)\b/i.test(q)) {
      matches.push(buildCustomCareersContent(q, p.careers, targetLang));
    }

    // Check Study Hub / Tools
    if (/\b(study|hub|simulator|simulators|heart|periodic|solar|cell|optics|mirror|fractions|grade|cgpa|sgpa|calculator)\b/i.test(q)) {
      matches.push(buildCustomStudyHubContent(q, p.studyHub, targetLang));
    }

    // Check Contact / Location
    if (/\b(contact|phone|mobile|number|call|address|pata|location|where|timing|time|code|udise|email|whatsapp)\b/i.test(q)) {
      matches.push(buildCustomContactContent(q, p.home, targetLang));
    }

    if (matches.length > 0) {
      const fullHtml = matches.join('<br>');
      return { html: fullHtml, text: stripHTML(fullHtml) };
    }

    // Fallback Custom Synthesis from All Pages
    return buildSmartSynthesisFallback(query, p, targetLang);
  }

  /* --- CUSTOM CONTENT GENERATORS FROM ALL PAGE DATA --- */

  function buildCustomFeesContent(query, feesPage, lang) {
    if (!feesPage) return '';

    const classMatch = query.match(/\b(nursery|lkg|ukg|class\s*\d{1,2}|\d{1,2}th)\b/i);
    let classItem = null;
    if (classMatch) {
      const str = classMatch[0].toUpperCase();
      const num = str.replace(/\D/g, '');
      if (num) {
        classItem = feesPage.table.find(t => t.class.includes(num));
      } else {
        classItem = feesPage.table[0];
      }
    }

    if (lang === 'hi') {
      let html = `<p>💸 <strong>फीस संरचना (सत्र 2026-27):</strong></p>`;
      if (classItem) {
        html += `<p><strong>${classItem.class} (${classItem.wing}):</strong></p>
        <ul>
          <li>मासिक शुल्क (छात्र): ₹${classItem.monthlyBoys} / माह</li>
          <li>मासिक शुल्क (छात्राएं): ₹${classItem.monthlyGirls} / माह</li>
          <li>परीक्षा शुल्क: ₹${classItem.testFee} | परीक्षा शुल्क: ₹${classItem.examCharges}</li>
          <li>कुल वार्षिक शुल्क: ₹${classItem.annualBoys} (छात्र) / ₹${classItem.annualGirls} (छात्राएं)</li>
        </ul>`;
      } else {
        html += `<p>विभिन्न कक्षाओं का मासिक शुल्क विवरण:</p><ul>`;
        feesPage.table.slice(0, 5).forEach(f => {
          html += `<li><strong>${f.class}:</strong> ₹${f.monthlyBoys} (छात्र) / ₹${f.monthlyGirls} (छात्राएं)</li>`;
        });
        html += `</ul>`;
      }
      html += `<a href="${feesPage.url}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> पूरा फीस कार्ड देखें</a>`;
      return html;
    } else if (lang === 'hinglish') {
      let html = `<p>💸 <strong>Fee Structure Details (Session 2026-27):</strong></p>`;
      if (classItem) {
        html += `<p><strong>${classItem.class} (${classItem.wing}):</strong></p>
        <ul>
          <li>Monthly Fee (Boys): ₹${classItem.monthlyBoys} / month</li>
          <li>Monthly Fee (Girls): ₹${classItem.monthlyGirls} / month</li>
          <li>Test Fee: ₹${classItem.testFee} | Half/Annual Exam: ₹${classItem.examCharges}</li>
          <li>Total Annual Fee: ₹${classItem.annualBoys} (Boys) / ₹${classItem.annualGirls} (Girls)</li>
        </ul>`;
      } else {
        html += `<p>Monthly tuition fee breakdown:</p><ul>`;
        feesPage.table.slice(0, 5).forEach(f => {
          html += `<li><strong>${f.class}:</strong> ₹${f.monthlyBoys} (Boys) / ₹${f.monthlyGirls} (Girls)</li>`;
        });
        html += `</ul>`;
      }
      html += `<a href="${feesPage.url}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> Open Full Fee Table</a>`;
      return html;
    } else {
      let html = `<p>💸 <strong>Official Fee Structure (2026-27):</strong></p>`;
      if (classItem) {
        html += `<p><strong>${classItem.class} (${classItem.wing}):</strong></p>
        <ul>
          <li>Monthly Tuition (Boys): ₹${classItem.monthlyBoys}</li>
          <li>Monthly Tuition (Girls): ₹${classItem.monthlyGirls}</li>
          <li>Test Fee: ₹${classItem.testFee} | Exam Charges: ₹${classItem.examCharges}</li>
          <li>Total Annual: ₹${classItem.annualBoys} (Boys) / ₹${classItem.annualGirls} (Girls)</li>
        </ul>`;
      } else {
        html += `<p>Monthly tuition fee overview:</p><ul>`;
        feesPage.table.slice(0, 5).forEach(f => {
          html += `<li><strong>${f.class}:</strong> ₹${f.monthlyBoys} (Boys) / ₹${f.monthlyGirls} (Girls)</li>`;
        });
        html += `</ul>`;
      }
      html += `<a href="${feesPage.url}" class="kalam-chat-action-btn"><i class="fas fa-file-invoice-dollar"></i> View Detailed Fee Page</a>`;
      return html;
    }
  }

  function buildCustomStreamsContent(query, streamsPage, lang) {
    if (!streamsPage) return '';
    const inter = streamsPage.intermediate || [];

    if (lang === 'hi') {
      let html = `<p>🎓 <strong>शैक्षणिक स्ट्रीम (कक्षा 11 व 12):</strong></p><ul>`;
      inter.forEach(s => html += `<li><strong>${s.name}:</strong> ${s.subjects}</li>`);
      html += `</ul><a href="${streamsPage.url}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> स्ट्रीम विवरण खोलें</a>`;
      return html;
    } else if (lang === 'hinglish') {
      let html = `<p>🎓 <strong>Available Streams (Class 11 & 12):</strong></p><ul>`;
      inter.forEach(s => html += `<li><strong>${s.name}:</strong> ${s.subjects}</li>`);
      html += `</ul><a href="${streamsPage.url}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> Explore Streams Page</a>`;
      return html;
    } else {
      let html = `<p>🎓 <strong>Academic Pathways (Class 11 & 12):</strong></p><ul>`;
      inter.forEach(s => html += `<li><strong>${s.name}:</strong> ${s.subjects} (Careers: ${s.scope})</li>`);
      html += `</ul><a href="${streamsPage.url}" class="kalam-chat-action-btn"><i class="fas fa-graduation-cap"></i> View Streams & Subjects</a>`;
      return html;
    }
  }

  function buildCustomHolidaysContent(query, holidaysPage, lang) {
    if (!holidaysPage) return '';
    const vac = holidaysPage.vacations || [];
    const fest = holidaysPage.festivals || [];

    if (lang === 'hi') {
      let html = `<p>📅 <strong>अवकाश एवं छुट्टी कैलेंडर (2026-27):</strong></p><p><strong>मुख्य वैकेशन:</strong></p><ul>`;
      vac.forEach(v => html += `<li><strong>${v.name}:</strong> ${v.dates}</li>`);
      html += `</ul><p><strong>आगामी पर्व एवं त्यौहार:</strong></p><ul>`;
      fest.slice(0, 5).forEach(f => html += `<li>${f.date} — <strong>${f.event}</strong></li>`);
      html += `</ul><a href="${holidaysPage.url}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> पूरा कैलेंडर देखें</a>`;
      return html;
    } else if (lang === 'hinglish') {
      let html = `<p>📅 <strong>Holiday List (Session 2026-27):</strong></p><p><strong>Main Vacations:</strong></p><ul>`;
      vac.forEach(v => html += `<li><strong>${v.name}:</strong> ${v.dates}</li>`);
      html += `</ul><p><strong>Upcoming Holidays:</strong></p><ul>`;
      fest.slice(0, 5).forEach(f => html += `<li>${f.date} — <strong>${f.event}</strong></li>`);
      html += `</ul><a href="${holidaysPage.url}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> Open Holiday List</a>`;
      return html;
    } else {
      let html = `<p>📅 <strong>Academic Holiday Calendar (2026-27):</strong></p><p><strong>Vacations:</strong></p><ul>`;
      vac.forEach(v => html += `<li><strong>${v.name}:</strong> ${v.dates}</li>`);
      html += `</ul><p><strong>Major Festival Holidays:</strong></p><ul>`;
      fest.slice(0, 5).forEach(f => html += `<li>${f.date}: <strong>${f.event}</strong></li>`);
      html += `</ul><a href="${holidaysPage.url}" class="kalam-chat-action-btn"><i class="fas fa-calendar-alt"></i> View Full Calendar</a>`;
      return html;
    }
  }

  function buildCustomAdmissionsContent(query, admPage, lang) {
    if (!admPage) return '';
    const docs = admPage.requiredDocuments || [];

    if (lang === 'hi') {
      let html = `<p>📝 <strong>प्रवेश जानकारी (सत्र 2026-27):</strong></p><p>${admPage.status}</p><p><strong>आवश्यक दस्तावेज:</strong></p><ul>`;
      docs.forEach(d => html += `<li>${d}</li>`);
      html += `</ul><a href="${admPage.url}" class="kalam-chat-action-btn"><i class="fas fa-edit"></i> एडमिशन प्रक्रिया</a>`;
      return html;
    } else if (lang === 'hinglish') {
      let html = `<p>📝 <strong>Admission Details (2026-27):</strong></p><p>${admPage.status}</p><p><strong>Required Documents:</strong></p><ul>`;
      docs.forEach(d => html += `<li>${d}</li>`);
      html += `</ul><a href="${admPage.url}" class="kalam-chat-action-btn"><i class="fas fa-edit"></i> Admission Rules</a>`;
      return html;
    } else {
      let html = `<p>📝 <strong>Admissions 2026-27:</strong></p><p>${admPage.status}</p><p><strong>Key Required Documents:</strong></p><ul>`;
      docs.forEach(d => html += `<li>${d}</li>`);
      html += `</ul><a href="${admPage.url}" class="kalam-chat-action-btn"><i class="fas fa-edit"></i> View Admission Process</a>`;
      return html;
    }
  }

  function buildCustomNoticesContent(query, noticePage, lang) {
    if (!noticePage) return '';
    const notices = noticePage.recentNotices || [];
    let html = `<p>📢 <strong>Official Noticeboard Alerts:</strong></p><ul>`;
    notices.forEach(n => html += `<li><strong>${n.title}</strong> (${n.date}): ${n.details}</li>`);
    html += `</ul><a href="${noticePage.url}" class="kalam-chat-action-btn"><i class="fas fa-bullhorn"></i> Open Notice Board</a>`;
    return html;
  }

  function buildCustomCareersContent(query, careerPage, lang) {
    if (!careerPage) return '';
    const openings = careerPage.openings || [];
    let html = `<p>💼 <strong>Career & Teacher Recruitment:</strong></p><ul>`;
    openings.forEach(o => html += `<li>${o}</li>`);
    html += `</ul><p>Email CV to: <strong>${careerPage.application}</strong></p>`;
    html += `<a href="${careerPage.url}" class="kalam-chat-action-btn"><i class="fas fa-briefcase"></i> View Career Page</a>`;
    return html;
  }

  function buildCustomStudyHubContent(query, studyPage, lang) {
    if (!studyPage) return '';
    const sims = studyPage.simulators || [];
    let html = `<p>🔬 <strong>Interactive Study Hub Tools & Simulators:</strong></p><ul>`;
    sims.slice(0, 5).forEach(s => html += `<li><strong>${s.name}</strong> (${s.topic})</li>`);
    html += `</ul><a href="${studyPage.url}" class="kalam-chat-action-btn"><i class="fas fa-atom"></i> Study Hub Simulators</a>`;
    html += `<a href="/GradeCalc" class="kalam-chat-action-btn"><i class="fas fa-calculator"></i> SGPA / CGPA Calculator</a>`;
    return html;
  }

  function buildCustomContactContent(query, homePage, lang) {
    if (!homePage || !homePage.contact) return '';
    const c = homePage.contact;
    let html = `<p>📞 <strong>School Contact & Official Information:</strong></p><ul>`;
    html += `<li><strong>Address:</strong> ${c.address}</li>`;
    html += `<li><strong>Phone:</strong> ${c.phone} | <strong>WhatsApp:</strong> ${c.whatsapp}</li>`;
    html += `<li><strong>Office Hours:</strong> ${c.timings}</li>`;
    html += `<li><strong>School Code:</strong> ${c.collegeCode} | <strong>UDISE:</strong> ${c.udiseCollege}</li>`;
    html += `</ul><a href="tel:${c.phone}" class="kalam-chat-action-btn"><i class="fas fa-phone-alt"></i> Call Office</a>`;
    return html;
  }

  function buildSmartSynthesisFallback(query, p, lang) {
    if (lang === 'hi') {
      return {
        html: `<p>आपकी खोज: <em>"${escapeHtml(query)}"</em></p>
        <p>डॉ ए.पी.जे. अब्दुल कलाम इंटर कॉलेज की सभी पृष्ठ जानकारी:</p>
        <ul>
          <li>💸 <strong><a href="/fees">फीस तालिका</a>:</strong> नर्सरी से कक्षा 12 तक का विवरण</li>
          <li>🎓 <strong><a href="/streams">शैक्षणिक स्ट्रीम</a>:</strong> साइंस (PCM/PCB/Agri), कॉमर्स, आर्ट्स</li>
          <li>📅 <strong><a href="/holidays">अवकाश सूची</a>:</strong> ग्रीष्मावकाश, शीतकालीन अवकाश व त्यौहार</li>
          <li>📝 <strong><a href="/#admissions">प्रवेश प्रक्रिया</a>:</strong> आवेदन एवं दस्तावेज</li>
          <li>🔬 <strong><a href="/study">स्टडी हब</a>:</strong> 3D सिम्युलेटर व ग्रेड कैलकुलेटर</li>
        </ul>
        <p>हेल्पलाइन: +91 9648904085</p>`,
        text: `आपकी खोज: ${query}। आप फीस, स्ट्रीम, छुट्टियों और एडमिशन के बारे में पूछ सकते हैं।`
      };
    } else if (lang === 'hinglish') {
      return {
        html: `<p>Aapka query: <em>"${escapeHtml(query)}"</em></p>
        <p>Website ke all pages ki main content summary:</p>
        <ul>
          <li>💸 <strong><a href="/fees">Fees Table</a>:</strong> Class Nursery to 12th fee details</li>
          <li>🎓 <strong><a href="/streams">Streams</a>:</strong> PCM, PCB, Agriculture, Commerce, Arts</li>
          <li>📅 <strong><a href="/holidays">Holidays</a>:</strong> Session 2026-27 vacation list</li>
          <li>📢 <strong><a href="/noticeboard">Noticeboard</a>:</strong> Exam & circular updates</li>
        </ul>
        <p>Helpline: +91 9648904085</p>`,
        text: `Aapka question received. Check fees, streams, holidays or call helpline 9648904085.`
      };
    } else {
      return {
        html: `<p>Information for: <em>"${escapeHtml(query)}"</em></p>
        <p>Key information synthesized from all website pages:</p>
        <ul>
          <li>💸 <strong><a href="/fees">Fee Structure Page</a></strong></li>
          <li>🎓 <strong><a href="/streams">Academic Streams & Subjects</a></strong></li>
          <li>📅 <strong><a href="/holidays">Holiday Calendar 2026-27</a></strong></li>
          <li>📝 <strong><a href="/#admissions">Admissions & Documents</a></strong></li>
          <li>🔬 <strong><a href="/study">Interactive STEM Simulators</a></strong></li>
        </ul>
        <p>Contact Helpline: +91 9648904085</p>`,
        text: `Synthesized details for ${query}. You can explore fees, streams, admissions, and holidays.`
      };
    }
  }

  function formatMarkdownToHTML(text) {
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
    return `<p>${html}</p>`;
  }

  function stripHTML(html) {
    if (typeof document !== 'undefined' && document.createElement) {
      const tmp = document.createElement('DIV');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
    return (html || '').replace(/<[^>]*>?/gm, '');
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

  return {
    generateCustomResponse,
    setConfig: (newConfig) => Object.assign(config, newConfig)
  };
})();
