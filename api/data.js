export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Receive data from n8n
    const data = req.body;

    // Store temporarily and redirect to main page
    // You can use a simple query param with a session ID or timestamp
    const timestamp = Date.now();

    // Store data with timestamp key (in production, use Redis or database)
    global.tempData = global.tempData || {};
    global.tempData[timestamp] = data;

    // Clean up old data (keep only last 5 entries)
    const keys = Object.keys(global.tempData);
    if (keys.length > 5) {
      keys.slice(0, -5).forEach(key => delete global.tempData[key]);
    }

    // Return redirect URL with data key
    const redirectUrl = `https://l-output.vercel.app/?datakey=${timestamp}`;

    res.status(200).json({
      success: true,
      redirect: redirectUrl,
      message: 'Data received, redirect to view'
    });

  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}