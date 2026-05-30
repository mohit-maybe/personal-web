import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        subject,
        message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: "Failed to send" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
