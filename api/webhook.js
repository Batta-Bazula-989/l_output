// /api/webhook.js (NOT in src, at project root)
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

    // Store data in a cookie to avoid header overflow
    const cookieData = Buffer.from(JSON.stringify(data)).toString('base64');

    res.setHeader('Set-Cookie', `webhookData=${cookieData}; Path=/; HttpOnly=false; Max-Age=60`);
    res.redirect(302, '/');
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}