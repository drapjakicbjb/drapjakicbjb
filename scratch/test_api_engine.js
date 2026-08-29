// Test script for chatbot/api AI generation using all page data
const fs = require('fs');

global.window = {};

require('../chatbot/api/all_pages_data.js');
require('../chatbot/api/ai.js');
require('../chatbot/api/chat.js');

async function runTests() {
  console.log("=== TESTING ALL-PAGE DATA DATASET ===");
  console.log("Pages indexed:", Object.keys(global.window.KalamAllPagesData.pages));

  const questions = [
    { q: "Class 10 English medium ki fee kitni hai?", lang: "hinglish" },
    { q: "कक्षा 11 में कौन-कौन सी स्ट्रीम उपलब्ध हैं?", lang: "hi" },
    { q: "When are the summer and winter breaks?", lang: "en" },
    { q: "School timings aur contact details batao", lang: "hinglish" },
    { q: "Notice board par latest update kya hai?", lang: "hinglish" },
    { q: "What 3D simulators are available in study hub?", lang: "en" }
  ];

  console.log("\n=== TESTING DYNAMIC CUSTOM RESPONSE GENERATION ===");
  for (const item of questions) {
    console.log(`\n--------------------------------------------------`);
    console.log(`Q: "${item.q}" (${item.lang})`);
    const res = await global.window.KalamChatAPI.processChatRequest(item.q, item.lang);
    console.log(`A:\n${res.html}`);
  }
}

runTests();
