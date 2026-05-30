import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: any }) => {
    const { name, email, subject, message } = data;

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return { success: false, error: "Email service not configured" };
    }

    try {
      // 1. Send notification to the owner (Mohit)
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "mohitpreets67@gmail.com",
        subject: `New Signal: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      // 2. Send automated response to the sender
      await resend.emails.send({
        from: "Mohitpreet Singh <onboarding@resend.dev>",
        to: email,
        subject: "Signal Received ✦",
        html: `
          <div style="font-family: monospace; background-color: #080808; color: #f5f5f0; padding: 40px; border: 3px solid #f5f5f0;">
            <p style="color: #ff3e8b; text-transform: uppercase; letter-spacing: 0.3em;">※ AUTOMATED RESPONSE</p>
            <h1 style="font-size: 32px; text-transform: uppercase;">SIGNAL RECEIVED.</h1>
            <p style="font-size: 16px; line-height: 1.6;">
              Hello ${name},<br/><br/>
              Your transmission has been received. I've logged your message regarding "<strong>${subject}</strong>" into the codex.<br/><br/>
              If you'd like to fast-track our discussion, you can book a slot directly in my calendar here:
            </p>
            <div style="margin: 32px 0;">
              <a href="https://calendly.com/mohitpreets67/discussion-meeting" 
                 style="background-color: #dfff00; color: #080808; padding: 16px 24px; text-decoration: none; font-weight: bold; border-bottom: 8px solid #dfff00; box-shadow: 8px 8px 0 #dfff00;">
                BOOK A MEETING →
              </a>
            </div>
            <p style="font-size: 14px; color: rgba(245, 245, 240, 0.6);">
              // Stay sharp,<br/>
              // Mohitpreet Singh
            </p>
          </div>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: "Failed to transmit signal" };
    }
  });
