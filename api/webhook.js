// /api/webhook.js (at root level)
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const data = req.body;

    // Redirect to your app with the data
    const encoded = encodeURIComponent(JSON.stringify(data));
    res.redirect(302, `https://l-output.vercel.app/?data=${encoded}`);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}