// Scratch test script for  BodhSakhā AI Chatbot Response Engine
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
  getItem: () => null,
  setItem: () => { }
};

// Load Knowledge Base
require('../chatbot/knowledge_base.js');

console.log("=== KNOWLEDGE BASE LOADED ===");
console.log("School Name:", global.window.KalamChatbotKB.schoolInfo.name);
console.log("Fee Classes count:", global.window.KalamChatbotKB.fees.structure.length);
console.log("Streams count:", global.window.KalamChatbotKB.streams.intermediate.length);

// Test queries
const testQueries = [
  "Class 10 fee structure kya hai?",
  "कक्षा 11 में कौन सी स्ट्रीम हैं?",
  "What is the admission procedure?",
  "When are the summer holidays?",
  "School contact number and address"
];

console.log("\n=== RUNNING QUERY NLP TESTS ===");
// Load chatbot script code
const chatbotCode = fs.readFileSync('chatbot/chatbot.js', 'utf8');
eval(chatbotCode);

// Trigger DOMContentLoaded
dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));

console.log("Chatbot initialized successfully in DOM!");
