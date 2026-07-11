import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  Zap,
  Search,
  Workflow,
  Palette,
  ExternalLink,
  ArrowRight,
  Target,
  Layers,
  Cpu,
  Radio,
} from "lucide-react";

export const Route = createFileRoute("/projects/axion-ai")({
  head: () => ({
    meta: [
      { title: "Axion AI — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "Axion AI — A fully automated B2B lead generation agency platform engineered to capture, enrich, and convert high-intent prospects autonomously.",
      },
    ],
  }),
  component: AxionAIPage,
});

/* ─── data ─── */
const features = [
  {
    icon: Zap,
    title: "Autonomous Lead Detection",
    desc: "Smart triggers that identify high-intent accounts and key decision-makers instantly based on real-time web triggers and form submissions.",
  },
  {
    icon: Search,
    title: "AI-Driven Data Enrichment",
    desc: "Automatically scrapes, cleans, and verifies prospect data — emails, LinkedIn profiles, company size, and growth metrics — to ensure 99% deliverability.",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Workflow Optimization",
    desc: "Designed around seamless background automation pipelines (n8n/Make architectures) to sync inbound intent seamlessly with CRM systems.",
  },
  {
    icon: Palette,
    title: "Premium UI/UX Experience",
    desc: "A cutting-edge, conversion-focused interface featuring sleek dark-mode aesthetics, responsive grids, and high-performance interactive elements.",
  },
];

const stack = [
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { label: "Platform", items: ["Lovable", "Netlify"] },
  { label: "Automation", items: ["Webhook Pipelines", "Async Data Agents"] },
];

/* ─── component ─── */
function AxionAIPage() {
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
          ※ Project Showcase · Automated Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone"
        >
          AXION <span className="text-acid">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono mt-4 max-w-2xl text-sm leading-relaxed text-bone/70"
        >
          A fully automated B2B lead generation agency platform engineered to
          capture, enrich, and convert high-intent prospects autonomously.
        </motion.p>

        {/* Impact metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-4 brutal-border bg-ink px-6 py-4"
        >
          <Radio className="h-5 w-5 text-blood" />
          <span className="mono text-sm text-bone/90">
            Built to scale outbound infrastructure from{" "}
            <span className="text-acid">0 to 10,000+</span> personalized
            touchpoints monthly with zero manual intervention.
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
            href="https://axion-ai-1.lovable.app"
            target="_blank"
            rel="noreferrer"
            className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            <span className="heading text-sm">View Live Project</span>
            <ExternalLink className="h-4 w-4" />
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
            Manual <span className="text-blood">Chaos</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            Manual lead sourcing is slow, prone to human error, and incredibly
            difficult to scale. Traditional CRM workflows require constant manual
            data entry and disjointed tool hopping — draining hours that should
            be spent closing deals.
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
            <Zap className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-acid">
              // The Solution
            </p>
          </div>
          <h2 className="display mt-6 text-4xl text-bone md:text-5xl">
            Unified <span className="text-acid">Engine</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            Axion AI solves this by unifying lead discovery, deep data
            enrichment, intent tracking, and multi-channel outreach into a
            single autonomous engine that runs 24/7 — so your pipeline never
            sleeps.
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

      {/* ═══════════ SYSTEM ARCHITECTURE DIAGRAM ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-border bg-ink p-6 md:p-8"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <Cpu className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-blood">
              // Pipeline Overview
            </p>
          </div>
          <h3 className="display mt-6 text-3xl text-bone md:text-4xl">
            Automation <span className="text-acid">Pipeline</span>
          </h3>

          {/* Pipeline flow */}
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              { step: "01", label: "Lead Capture", detail: "Web forms & intent signals" },
              { step: "02", label: "Enrichment", detail: "AI data verification" },
              { step: "03", label: "Scoring", detail: "Intent ranking engine" },
              { step: "04", label: "Outreach", detail: "Multi-channel sequences" },
              { step: "05", label: "CRM Sync", detail: "Real-time pipeline update" },
            ].map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center border-2 border-acid bg-void">
                  <span className="display text-lg text-acid">{stage.step}</span>
                </div>
                <p className="mono mt-3 text-[10px] uppercase tracking-widest text-bone">
                  {stage.label}
                </p>
                <p className="mono mt-1 text-[10px] text-bone/50">{stage.detail}</p>
                {i < 4 && (
                  <span className="absolute -right-3 top-5 hidden text-acid md:block">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
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
            See it <span className="text-acid">Live</span>
          </h2>
          <p className="mono mx-auto mt-4 max-w-lg text-sm text-bone/60">
            Experience the platform in action. Every trigger, every pipeline,
            every conversion — fully autonomous.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://axion-ai-1.lovable.app"
              target="_blank"
              rel="noreferrer"
              className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-8 py-5 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-base">Launch Axion AI</span>
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
