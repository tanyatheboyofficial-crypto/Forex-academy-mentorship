// api/chat.js - Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages, provider } = req.body;
  
  // Get API keys from Vercel Environment Variables
  const openAiKey = process.env.OPENAI_API_KEY;
  const deepSeekKey = process.env.DEEPSEEK_API_KEY;

  try {
    if (provider === 'deepseek' && deepSeekKey) {
      // Call DeepSeek API
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${deepSeekKey}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: messages,
          temperature: 0.7
        })
      });
      const data = await response.json();
      return res.status(200).json(data);

    } else if (openAiKey) {
      // Call OpenAI API (Default / Auto)
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Using a fast, vision-capable model
          messages: messages,
          temperature: 0.7
        })
      });
      const data = await response.json();
      return res.status(200).json(data);
    } 
    
    // Fallback simulation if no keys are configured yet
    return res.status(200).json({
      choices: [{
        message: {
          content: "⚠️ **System Notice:** The AI API keys are not yet configured in the Vercel Environment Variables. Please ask the administrator to add `OPENAI_API_KEY` or `DEEPSEEK_API_KEY` in the Vercel Dashboard to activate live responses."
        }
      }]
    });

  } catch (error) {
    console.error("AI Provider Error:", error);
    return res.status(500).json({ error: 'Failed to connect to AI provider.' });
  }
}
