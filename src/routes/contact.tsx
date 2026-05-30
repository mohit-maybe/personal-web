import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohitpreet Singh" },
      { name: "description", content: "Send a signal." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setSent(true);
        toast.success("Signal transmitted successfully. Check your email.");
      } else {
        toast.error(result.error || "Failed to transmit signal.");
      }
    } catch (error) {
      toast.error("A system error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <header className="border-b-2 border-bone/30 pb-8">
        <p className="mono text-xs uppercase tracking-[0.3em] text-blood">※ Chapter IV</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone">
          SEND A <span className="text-acid">SIGNAL.</span>
        </h1>
        <p className="mono mt-4 max-w-xl text-sm text-bone/70">
          Commissions, collaborations, the occasional rant about typography — all welcome.
        </p>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="brutal-border space-y-6 bg-ink p-8"
        >
          <Field label="Your name" name="name" />
          <Field label="Your email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="mono text-xs uppercase tracking-widest text-bone/60">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              disabled={isSubmitting || sent}
              className="mt-2 w-full border-2 border-bone/40 bg-transparent p-3 text-bone outline-none transition-colors focus:border-acid disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || sent}
            className="brutal-shadow group flex w-full items-center justify-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0"
          >
            <span className="heading text-sm">
              {sent ? "Signal Received ✦" : isSubmitting ? "Transmitting..." : "Transmit"}
            </span>
            {!sent && <span className="display text-xl">→</span>}
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <div className="brutal-border p-6">
            <p className="mono text-xs uppercase tracking-widest text-blood">// Direct</p>
            
              href="mailto:mohitpreets67@gmail.com"
              className="display mt-3 block break-all text-3xl text-bone hover:text-acid"
            >
              mohitpreets67@gmail.com
            </a>
          </div>

          <div className="brutal-border p-6">
            <p className="mono text-xs uppercase tracking-widest text-blood">// Elsewhere</p>
            <ul className="mono mt-3 space-y-2 text-sm uppercase tracking-widest text-bone/80">
              <li>
                <a href="https://github.com/mohit-maybe" target="_blank" rel="noreferrer" className="hover:text-acid">
                  GitHub ↗
                </a>
              </li>
              <li>
                
                  href="https://calendly.com/mohitpreets67/discussion-meeting"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-acid"
                >
                  Book a meeting (Calendly) ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-acid p-6 text-void">
            <p className="mono text-xs uppercase tracking-widest">// Currently</p>
            <p className="heading mt-2 text-lg">
              Accepting one new project for Q2 MMXXVI.
            </p>
          </div>
        </motion.aside>
      </div>
    </PageTransition>
  );
}

function Field({ label, name, type = "text", disabled = false }: { label: string; name: string; type?: string; disabled?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mono text-xs uppercase tracking-widest text-bone/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        disabled={disabled}
        className="mt-2 w-full border-b-2 border-bone/40 bg-transparent py-2 text-bone outline-none transition-colors focus:border-acid disabled:opacity-50"
      />
    </div>
  );
}
