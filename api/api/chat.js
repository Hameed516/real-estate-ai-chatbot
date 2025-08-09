export default async function handler(req, res) {
  // CORS headers to allow frontend requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { question } = req.body;

    // Simple placeholder answer for demo — replace with real AI call logic later
    const answer = `You asked: "${question}". Sorry, AI backend is not yet implemented.`;

    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unknown error' });
  }
}
