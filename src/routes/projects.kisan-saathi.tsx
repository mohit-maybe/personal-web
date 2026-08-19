import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  Github,
  ArrowRight,
  ExternalLink,
  Target,
  Zap,
  Layers,
  Languages,
  CloudSun,
  ScanSearch,
  MessageSquareText,
  TrendingUp,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/projects/kisan-saathi")({
  head: () => ({
    meta: [
      { title: "KisanSaathi — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "KisanSaathi — an AI crop doctor and market advisor built for Punjabi farmers, with crop disease diagnosis, farming assistance, weather, and mandi intelligence.",
      },
    ],
  }),
  component: KisanSaathiPage,
});

/* ─── data ─── */
const features = [
  {
    icon: ScanSearch,
    title: "AI Crop Doctor",
    desc: "Farmers can use a crop photo to identify likely disease or plant-health issues and receive practical guidance without needing to translate technical agricultural language.",
  },
  {
    icon: MessageSquareText,
    title: "Farming Assistant",
    desc: "A conversational assistant turns agricultural questions into simple, actionable answers — designed around the way farmers actually ask for help in the field.",
  },
  {
    icon: TrendingUp,
    title: "Mandi Intelligence",
    desc: "Market-price information gives farmers a clearer view of mandi conditions so crop decisions are informed by both production and market context.",
  },
  {
    icon: CloudSun,
    title: "Weather Context",
    desc: "Weather information is brought into the same workflow, helping farmers consider upcoming conditions alongside crop-health and market decisions.",
  },
  {
    icon: Languages,
    title: "Built for Punjab",
    desc: "Punjabi, Hindi, and English support makes the product usable across language preferences instead of forcing farmers into an English-first agricultural interface.",
  },
  {
    icon: Smartphone,
    title: "Field-First UX",
    desc: "A mobile-first, high-contrast interface keeps the important actions obvious and usable when the product is being accessed outside a desk environment.",
  },
];

const stack = [
  { label: "Application", items: ["TanStack Start", "TypeScript", "React"] },
  { label: "AI", items: ["Vision Diagnosis", "Conversational AI", "Structured Responses"] },
  { label: "Product", items: ["i18n", "Mobile-first UI", "Weather + Mandi Data"] },
];

const pipeline = [
  { step: "01", label: "Capture", detail: "Farmer question or crop photo" },
  { step: "02", label: "Understand", detail: "AI interprets the agricultural context" },
  { step: "03", label: "Advise", detail: "Diagnosis and practical next steps" },
  { step: "04", label: "Contextualize", detail: "Weather + mandi information" },
  { step: "05", label: "Deliver", detail: "Punjabi, Hindi, or English" },
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
          ※ Project Showcase · AgriTech & AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display mt-4 text-[clamp(2.8rem,11vw,10rem)] text-bone"
        >
          KISAN <span className="text-acid">SAATHI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono mt-4 max-w-2xl text-sm leading-relaxed text-bone/70"
        >
          An AI crop doctor and market advisor built for Punjabi farmers —
          combining photo-based disease diagnosis, a farming chatbot, live
          weather and mandi prices, and multilingual support in one field-first
          interface.
        </motion.p>

        {/* Impact metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-4 brutal-border bg-ink px-6 py-4"
        >
          <Zap className="h-5 w-5 text-blood" />
          <span className="mono text-sm text-bone/90">
            One interface for <span className="text-acid">crop health</span>,{" "}
            <span className="text-acid">market context</span>, and{" "}
            <span className="text-acid">weather</span> — delivered in the
            language the farmer is most comfortable using.
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
            <span className="heading text-sm">View on GitHub</span>
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
            Fragmented <span className="text-blood">Advice</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            A farmer dealing with a crop problem may need disease guidance,
            weather information, market prices, and a clear explanation of
            what to do next. When those answers live in different places and
            different languages, useful information becomes harder to act on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="brutal-border bg-ink p-6"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <Layers className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-acid">
              // The Solution
            </p>
          </div>
          <h2 className="display mt-6 text-4xl text-bone md:text-5xl">
            One <span className="text-acid">Saathi</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            KisanSaathi brings those workflows together: identify a crop issue
            from an image, ask questions in natural language, check weather and
            mandi context, and receive the result in Punjabi, Hindi, or English
            through a mobile-first interface.
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

      {/* ═══════════ ARCHITECTURE ═══════════ */}
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
          {stack.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brutal-border bg-ink p-6"
            >
              <p className="mono text-[10px] uppercase tracking-widest text-blood">
                // {group.label}
              </p>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-bone/10 pb-3"
                  >
                    <span className="h-1.5 w-1.5 bg-acid" />
                    <span className="mono text-sm text-bone/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ PIPELINE ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
            ※ System Flow
          </p>
          <h2 className="display mt-4 text-5xl text-bone md:text-7xl">
            From Field <span className="text-acid">to Answer</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {pipeline.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="brutal-border bg-ink p-5"
            >
              <span className="display text-3xl text-acid">{item.step}</span>
              <h3 className="display mt-4 text-2xl text-bone">{item.label}</h3>
              <p className="mt-3 text-xs leading-relaxed text-bone/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ BUILD NOTES ═══════════ */}
      <section className="mt-24 border-y border-bone/20 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
              ※ Build Notes
            </p>
            <h2 className="display mt-4 text-5xl text-bone md:text-6xl">
              Why <span className="text-acid">It Matters</span>
            </h2>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-bone/70">
            <p>
              KisanSaathi is deliberately more than a chatbot. The product
              combines visual diagnosis, conversational assistance, external
              agricultural context, and localization into one workflow.
            </p>
            <p>
              The core design decision was to reduce the number of steps between
              a farmer noticing a problem and getting an understandable next
              action — while keeping the interface direct enough to work on a
              phone in the field.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER CTA ═══════════ */}
      <section className="mt-20 border-t-2 border-bone/30 pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
              ※ KisanSaathi · 2026
            </p>
            <p className="display mt-3 text-3xl text-bone md:text-4xl">
              Built to put useful intelligence closer to the field.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://kisan-mitra-xi.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="brutal-shadow inline-flex items-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-sm">Live Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              to="/work"
              className="brutal-border inline-flex items-center gap-3 px-6 py-4 text-bone transition-colors hover:bg-bone hover:text-void"
            >
              <span className="heading text-sm">Back to Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
