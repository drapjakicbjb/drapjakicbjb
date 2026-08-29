const apiKey = 'AIzaSyDM8YSU4ZOySKww1uGL7y4qViK-6ZztzSA';
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;

const systemPrompt = `You are BodhSakhā AI, the official intelligent assistant for Dr. A.P.J. Abdul Kalam Inter College (Belwariya Jungle, Basti, UP).`;
const query = "What is the fee structure for Class 10?";

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

async function testWithReferer(refererUrl) {
  console.log(`Testing with Referer: "${refererUrl}"...`);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Referer': refererUrl
      },
      body: JSON.stringify(requestBody)
    });
    console.log("Status Code:", res.status, res.statusText);
    const data = await res.json();
    if (res.ok && data.candidates && data.candidates[0]) {
      console.log("🎉 SUCCESS (200 OK)!");
      console.log("AI Response snippet:\n", data.candidates[0].content.parts[0].text.trim().substring(0, 200));
    } else {
      console.log("❌ Error:", data.error ? data.error.message : data);
    }
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

async function run() {
  await testWithReferer("https://drapjakicbjb.ac.in/");
  await testWithReferer("http://localhost:3000/");
  await testWithReferer("http://127.0.0.1/");
}

run();
