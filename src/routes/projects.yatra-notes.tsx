import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  MapPin,
  SlidersHorizontal,
  MousePointerClick,
  ShieldCheck,
  Palette,
  ExternalLink,
  ArrowRight,
  Target,
  Layers,
  Compass,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/projects/yatra-notes")({
  head: () => ({
    meta: [
      { title: "Yatra Notes — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "Yatra Notes — a hand-built, dependency-free travel guide showcasing eight of India's iconic and hidden-gem destinations, with an accessible filter system, real-time form validation, and scroll-driven reveals written in vanilla HTML, CSS, and JavaScript.",
      },
    ],
  }),
  component: YatraNotesPage,
});

/* ─── data ─── */
const features = [
  {
    icon: SlidersHorizontal,
    title: "Accessible Region Filtering",
    desc: "A full tablist/tab ARIA pattern built from scratch — Arrow, Home & End key navigation, roving tabindex, and animated re-reveals when the destination grid re-filters by North, South, East, West, or the Himalayas.",
  },
  {
    icon: MousePointerClick,
    title: "Scroll-Triggered Reveals",
    desc: "IntersectionObserver drives every fade-and-rise entrance across the page — staggered per card, unobserved after firing once, so nothing costs a frame it doesn't need to.",
  },
  {
    icon: ShieldCheck,
    title: "Real-Time Form Validation",
    desc: "Field-level validators for name, email, and message run on blur and live-correct on input, with accessible error states (aria-invalid, live error text) before the message ever reaches Formspree.",
  },
  {
    icon: Palette,
    title: "Custom Design System",
    desc: "An earthy, India-inspired palette — terracotta, saffron, indigo, sandstone — expressed entirely through CSS custom properties, paired with Cormorant Garamond and Inter for a warm editorial feel.",
  },
];

const stack = [
  { label: "Markup", items: ["Semantic HTML5", "ARIA Patterns"] },
  { label: "Styling", items: ["CSS Custom Properties", "Grid & Flexbox"] },
  { label: "Behavior", items: ["Vanilla JS (ES6+)", "IntersectionObserver"] },
];

const stats = [
  { n: "08", label: "Destinations", detail: "Curated across five regions" },
  { n: "05", label: "Regions Covered", detail: "North, South, East, West, Himalayas" },
  { n: "02", label: "Type Families", detail: "Cormorant Garamond + Inter" },
  { n: "00", label: "JS Dependencies", detail: "Every line hand-written" },
];

/* ─── component ─── */
function YatraNotesPage() {
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
          ※ Project Showcase · Travel & Editorial
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone"
        >
          YATRA <span className="text-acid">NOTES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono mt-4 max-w-2xl text-sm leading-relaxed text-bone/70"
        >
          A hand-built travel guide to India's hidden gems and iconic
          destinations — no framework, no component library, just disciplined
          HTML, CSS, and JavaScript doing exactly what it needs to.
        </motion.p>

        {/* Impact metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-4 brutal-border bg-ink px-6 py-4"
        >
          <Compass className="h-5 w-5 text-blood" />
          <span className="mono text-sm text-bone/90">
            Built as a <span className="text-acid">zero-dependency</span>{" "}
            front-end exercise — every interaction, animation, and
            validation rule written from first principles.
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
            href="/yatra-notes.html"
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
            SEO <span className="text-blood">Sludge</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            Most travel content is written for search engines first and
            travellers second — generic listicles with stock advice and no
            sense of place. The specific things that matter (which month
            Jaisalmer turns gold, when the passes to Ladakh actually open)
            get buried under padding.
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
            <MapPin className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-acid">
              // The Solution
            </p>
          </div>
          <h2 className="display mt-6 text-4xl text-bone md:text-5xl">
            Curated <span className="text-acid">Intel</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            Yatra Notes cuts it down to eight destinations that earn their
            place, each with seasonal intelligence baked directly into the
            card — best-time windows, region tags, and a one-line hook
            instead of a wall of filler text.
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
            <Mail className="h-5 w-5 text-acid" />
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
            Explore the <span className="text-acid">Journey</span>
          </h2>
          <p className="mono mx-auto mt-4 max-w-lg text-sm text-bone/60">
            Filter by region, read the seasonal notes, and see the whole
            interface built without a single external script.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/yatra-notes.html"
              target="_blank"
              rel="noreferrer"
              className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-8 py-5 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-base">Launch Yatra Notes</span>
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
