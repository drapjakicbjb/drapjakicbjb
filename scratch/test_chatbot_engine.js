const fs = require('fs');

global.window = {
  KalamChatbotKB: {},
  KalamAllPagesData: {},
  initKalamChatbot: null,
  addEventListener: () => {},
  document: {
    readyState: 'complete',
    getElementById: () => null,
    querySelector: () => null,
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {} }),
    addEventListener: () => {}
  }
};
global.document = global.window.document;

// Load chatbot scripts sequence
const files = [
  'chatbot/knowledge_base.js',
  'chatbot/api/all_pages_data.js',
  'chatbot/api/ai.js',
  'chatbot/api/chat.js',
  'chatbot/chatbot.js'
];

files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  eval(code);
  console.log(`Loaded ${f} successfully!`);
});

console.log("Checking window.initKalamChatbot:", typeof global.window.initKalamChatbot);
console.log("Checking window.BodhSakhāAIEngine:", typeof global.window.BodhSakhāAIEngine);
