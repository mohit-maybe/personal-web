import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  Leaf,
  MessageCircle,
  CloudSun,
  Languages,
  ExternalLink,
  ArrowRight,
  Target,
  Layers,
  Camera,
  IndianRupee,
  ShieldCheck,
  Github,
} from "lucide-react";

export const Route = createFileRoute("/projects/kisan-saathi")({
  head: () => ({
    meta: [
      { title: "KisanSaathi — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "KisanSaathi case study — an AI crop doctor and market advisor for Punjabi farmers, built with vision-based disease diagnosis, live weather, live mandi prices, and a tri-lingual, mobile-first interface.",
      },
    ],
  }),
  component: KisanSaathiPage,
});

/* ─── data ─── */
const features = [
  {
    icon: Camera,
    title: "AI Crop Doctor",
    desc: "A two-pass vision pipeline: the first pass diagnoses the leaf photo like a plant pathologist — crop, disease, severity, differentials — the second rewrites that diagnosis into short, farmer-facing advice with PAU-style dosing per acre.",
  },
  {
    icon: MessageCircle,
    title: "Ask KisanSaathi",
    desc: "A conversational farming assistant that keeps the last few turns of context, replies in under 120 words, and always nudges toward a local Krishi Vigyan Kendra rather than inventing a chemical dose it isn't sure of.",
  },
  {
    icon: CloudSun,
    title: "Live Weather & Mandi Prices",
    desc: "Real-time conditions for five Punjab cities via Open-Meteo, plus mandi prices pulled live from data.gov.in's Agmarknet feed when a key is configured — falling back to clearly-marked indicative rates otherwise, never fake 'live' numbers.",
  },
  {
    icon: Languages,
    title: "Punjabi-First, Trilingual UI",
    desc: "Every screen — including the AI's own answers — renders in Gurmukhi Punjabi, Devanagari Hindi, or English, switchable at any time, with high-contrast, large-touch-target design built for outdoor use on low-end phones.",
  },
];

const stack = [
  { label: "Frontend", items: ["TanStack Start", "React 19", "Tailwind CSS"] },
  { label: "AI / Vision", items: ["Gemini via AI Gateway", "Two-Pass Diagnosis"] },
  { label: "Live Data", items: ["Open-Meteo API", "Agmarknet (data.gov.in)"] },
];

const stats = [
  { n: "03", label: "Core Modules", detail: "Crop Doctor · Chat · Market & Weather" },
  { n: "03", label: "Languages", detail: "Punjabi · Hindi · English" },
  { n: "05", label: "Cities Covered", detail: "Ludhiana, Amritsar, Patiala, Jalandhar, Bathinda" },
  { n: "02", label: "Diagnosis Passes", detail: "Pathology pass + farmer-facing rewrite" },
];

/* ─── component ─── */
function KisanSaathiPage() {
  return (
    <PageTransition>
      {/* ═══════════ HERO ═══════════ */}
      <header className="border-b-2 border-bone/30 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mono text-xs uppercase tracking-[0.3em] text-blood"
        >
          ※ Project Showcase · AI · AgriTech
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone"
        >
          KISAN<span className="text-acid">SAATHI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono mt-4 max-w-2xl text-sm leading-relaxed text-bone/70"
        >
          An AI crop doctor and market advisor built for small farmers in
          Punjab — snap a leaf, get a real diagnosis; ask a question, get a
          straight answer; check the weather and the mandi rate, all in the
          language a farmer already reads.
        </motion.p>

        {/* Impact metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-4 brutal-border bg-ink px-6 py-4"
        >
          <ShieldCheck className="h-5 w-5 text-blood" />
          <span className="mono text-sm text-bone/90">
            Built so the AI <span className="text-acid">never invents</span>{" "}
            a chemical dose it isn't confident about — it defers to the local
            Krishi Vigyan Kendra instead.
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="https://kisan-mitra-xi.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            <span className="heading text-sm">View Live Project</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mohit-maybe/kisan-mitra"
            target="_blank"
            rel="noreferrer"
            className="brutal-border inline-flex items-center gap-3 px-6 py-4 text-bone transition-colors hover:bg-bone hover:text-void"
          >
            <span className="heading text-sm">View Source</span>
            <Github className="h-4 w-4" />
          </a>
          <Link
            to="/work"
            className="brutal-border inline-flex items-center gap-3 px-6 py-4 text-bone transition-colors hover:bg-bone hover:text-void"
          >
            <span className="heading text-sm">Back to Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </header>

      {/* ═══════════ PROBLEM & SOLUTION ═══════════ */}
      <section className="mt-20 grid gap-8 md:grid-cols-2">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="brutal-border bg-ink p-6"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <Target className="h-5 w-5 text-blood" />
            <p className="mono text-xs uppercase tracking-widest text-blood">
              // The Problem
            </p>
          </div>
          <h2 className="display mt-6 text-4xl text-bone md:text-5xl">
            Advice <span className="text-blood">Gap</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            A farmer sees a diseased leaf and has two bad options: guess, or
            wait days for an expert. Meanwhile most agri-tech apps are built
            in English for an urban user — wrong language, wrong tone, wrong
            trust level for someone who needs an answer in the field, right
            now, in Punjabi.
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="brutal-border bg-ink p-6"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <Leaf className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-acid">
              // The Solution
            </p>
          </div>
          <h2 className="display mt-6 text-4xl text-bone md:text-5xl">
            A Pocket <span className="text-acid">Agronomist</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            KisanSaathi puts a photo-based diagnosis, a farming chatbot, and
            live weather and mandi data behind one big-button, high-contrast
            interface — answering in Gurmukhi Punjabi, Hindi, or English, and
            calibrated to say "I'm not sure" rather than guess.
          </p>
        </motion.div>
      </section>

      {/* ═══════════ KEY FEATURES ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
            ※ Technical Deep Dive
          </p>
          <h2 className="display mt-4 text-5xl text-bone md:text-7xl">
            Core <span className="text-acid">Capabilities</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="brutal-border group relative flex flex-col justify-between bg-ink p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-bone/15 pb-4">
                  <span className="mono text-[10px] uppercase tracking-widest text-blood">
                    // Feature {String(i + 1).padStart(2, "0")}
                  </span>
                  <f.icon className="h-5 w-5 text-acid" />
                </div>
                <h3 className="display mt-6 text-3xl text-bone transition-colors group-hover:text-acid md:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone/70">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
            ※ Architecture
          </p>
          <h2 className="display mt-4 text-5xl text-bone md:text-7xl">
            Tech <span className="text-acid">Stack</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stack.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brutal-border bg-ink p-6"
            >
              <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
                <Layers className="h-4 w-4 text-acid" />
                <p className="display text-2xl text-bone">{s.label}</p>
              </div>
              <ul className="mono mt-4 space-y-2 text-sm uppercase tracking-widest text-bone/80">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="text-acid">·</span> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ BY THE NUMBERS ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-border bg-ink p-6 md:p-8"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <IndianRupee className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-blood">
              // By The Numbers
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-start"
              >
                <span className="display text-5xl text-acid md:text-6xl">
                  {s.n}
                </span>
                <p className="mono mt-2 text-xs uppercase tracking-widest text-bone">
                  {s.label}
                </p>
                <p className="mono mt-1 text-[11px] text-bone/50">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="mt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="display text-5xl text-bone md:text-7xl">
            Try It <span className="text-acid">Live</span>
          </h2>
          <p className="mono mx-auto mt-4 max-w-lg text-sm text-bone/60">
            Upload a leaf photo, ask a farming question, or check today's
            mandi rates — the full app is live, and the source is open on
            GitHub.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://kisan-mitra-xi.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-8 py-5 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-base">Launch KisanSaathi</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link
              to="/contact"
              className="brutal-shadow-blood inline-flex items-center gap-3 bg-blood px-8 py-5 text-bone transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-base">Start a Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
