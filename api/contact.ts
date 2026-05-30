import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    // Email to you (notification)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Signal from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Signal Received ✦",
      html: `
        <div style="font-family:monospace; background-color:#080808; color:#f5f5f0; padding:40px; border:3px solid #f5f5f0;">
          <p style="color:#ff3e3b; text-transform:uppercase; letter-spacing:0.3em;">※ AUTOMATED RESPONSE</p>
          <h1 style="font-size:32px; text-transform:uppercase;">SIGNAL RECEIVED.</h1>
          <p>Hello ${name},</p>
          <p>Your transmission has been received. I've logged your message regarding "<strong>${subject}</strong>" into the codex.</p>
          <p>If you'd like to fast-track our discussion, you can book a slot directly in my calendar here:</p>
          <a href="https://calendly.com/mohitpreets67/discussion-meeting" 
             style="display:inline-block; background:#ccff00; color:#080808; padding:12px 24px; text-decoration:none; text-transform:uppercase; letter-spacing:0.2em; font-weight:bold; margin:16px 0;">
            BOOK A MEETING →
          </a>
          <p>// Stay sharp,<br/>// Mohitpreet Singh</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
