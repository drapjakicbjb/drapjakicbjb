const fs = require('fs');

global.window = {};
global.fetch = async (url, options = {}) => {
  // Attach Referer header for test
  options.headers = { ...(options.headers || {}), 'Referer': 'https://drapjakicbjb.ac.in/' };
  return fetch(url, options);
};

const allPagesDataCode = fs.readFileSync('chatbot/api/all_pages_data.js', 'utf8');
eval(allPagesDataCode);

const aiCode = fs.readFileSync('chatbot/api/ai.js', 'utf8');
eval(aiCode);

async function testAdmissionQuery() {
  console.log("Testing admission query in BodhSakhā AIEngine...");
  try {
    const res = await window.BodhSakhāAIEngine.generateCustomResponse("Admission open hai kya?", "hinglish");
    console.log("\n--- RESULT ---");
    console.log("HTML Output:\n", res.html);
    console.log("\nText Output:\n", res.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

testAdmissionQuery();
