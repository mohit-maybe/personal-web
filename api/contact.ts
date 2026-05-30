import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("API key exists:", !!process.env.RESEND_API_KEY);
  console.log("Body:", req.body);

  const { name, email, subject, message } = req.body;

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mohitpreets67@gmail.com",
      subject: `New Signal: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    console.log("Resend result:", JSON.stringify(result));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
