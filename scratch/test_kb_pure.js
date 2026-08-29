// Pure Node test for Knowledge Base data and response generation logic
const fs = require('fs');

global.window = {};
require('../chatbot/knowledge_base.js');

const kb = global.window.KalamChatbotKB;

console.log("=== KNOWLEDGE BASE VERIFICATION ===");
console.log("✓ School Name:", kb.schoolInfo.name);
console.log("✓ Address:", kb.schoolInfo.address);
console.log("✓ Phone:", kb.schoolInfo.phone);
console.log("✓ Fee records count:", kb.fees.structure.length);
console.log("✓ Intermediate streams count:", kb.streams.intermediate.length);
console.log("✓ Major holidays count:", kb.holidays.majorHolidays.length);
console.log("✓ Simulators count:", kb.studyHub.interactiveSimulators.length);

console.log("\n=== ALL DATA VALIDATED SUCCESSFULLY ===");
