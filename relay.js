export default async function handler(req, res) {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxiUBSGSSz0GoBA6iSrypf0MiVbgIzdH4g_wRFvxFrng6WSQMkXJJMX8yjXIMhTQ-TcnA/exec';
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: req.body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    res.status(200).json({ result: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Relay failed', message: err.message });
  }
}
