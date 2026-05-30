import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { name, email, subject, message } = await req.json();

  if (!process.env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Email service not configured" }), { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mohitpreets67@gmail.com",
      subject: `New Signal: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
