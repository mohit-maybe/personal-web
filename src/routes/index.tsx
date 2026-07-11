import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohitpreet Singh — Designer & Developer" },
      { name: "description", content: "Portfolio of Mohitpreet Singh. Strange, beautiful, useful things." },
    ],
  }),
  component: Index,
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const rise = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Index() {
  return (
    <PageTransition>
      {/* HERO */}
      <motion.section variants={stagger} initial="hidden" animate="show" className="relative pt-6">
        <motion.p variants={rise} className="mono text-xs uppercase tracking-[0.3em] text-blood">
          ※ Portfolio · Vol. I · Codex of works
        </motion.p>

        <motion.h1
          variants={rise}
          className="display mt-6 text-[clamp(4rem,16vw,16rem)] text-bone"
        >
          MOHIT<span className="text-acid">·</span>
          <br />
          <span className="relative inline-block">
            PREET
            <span className="absolute -right-4 top-2 hidden rotate-12 md:inline-block">
              <span className="tape-blood mono text-xs">v1.0</span>
            </span>
          </span>
          <br />
          <span className="text-acid glitch inline-block">SINGH.</span>
        </motion.h1>

        <motion.div variants={rise} className="mt-10 grid gap-6 md:grid-cols-[2fr_1fr]">
          <p className="max-w-2xl text-lg leading-relaxed text-bone/85 md:text-xl">
            A designer & developer forging interfaces with the weight of print and the
            soul of a heavy-metal zine. I build things that are{" "}
            <span className="tape mono text-sm">loud</span>,{" "}
            <span className="tape-blood mono text-sm">sharp</span>, and quietly useful.
          </p>
          <div className="mono space-y-1 text-xs uppercase tracking-widest text-bone/60">
            <p>// Based · Earth</p>
            <p>// Status · Forging</p>
            <p>// Year · MMXXVI</p>
          </div>
        </motion.div>

        <motion.div variants={rise} className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/work"
            className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            <span className="heading text-sm">View the Codex</span>
            <span className="display text-xl">→</span>
          </Link>
          <Link
            to="/contact"
            className="brutal-border inline-flex items-center gap-3 px-6 py-4 text-bone transition-colors hover:bg-bone hover:text-void"
          >
            <span className="heading text-sm">Summon Me</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* SELECTED WORK PREVIEW */}
      <section className="mt-32">
        <div className="flex items-end justify-between border-b-2 border-bone/30 pb-4">
          <h2 className="display text-5xl text-bone md:text-7xl">
            Selected <span className="text-acid">Works</span>
          </h2>
          <Link to="/work" className="mono text-xs uppercase tracking-widest text-bone/70 hover:text-acid">
            All works ↗
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {previews.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="brutal-border group relative cursor-pointer overflow-hidden bg-ink p-6"
            >
              {p.internal ? (
                <Link to={p.internal} className="block">
                  <PreviewContent p={p} i={i} />
                </Link>
              ) : (
                <a href={p.href} target="_blank" rel="noreferrer" className="block">
                  <PreviewContent p={p} i={i} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="mt-32">
        <div className="slash h-2" />
        <blockquote className="display py-16 text-center text-4xl text-bone md:text-7xl">
          “Design like the page is on fire,
          <br />
          <span className="text-acid">code</span> like nobody is watching.”
        </blockquote>
        <div className="slash h-2" />
      </section>
    </PageTransition>
  );
}

function PreviewContent({ p, i }: { p: typeof previews[number]; i: number }) {
  return (
    <>
      <div className="flex items-start justify-between">
        <span className="mono text-xs uppercase tracking-widest text-blood">
          №{String(i + 1).padStart(2, "0")} / {p.kind}
        </span>
        <span className="mono text-xs text-bone/50">{p.year}</span>
      </div>

      <h3 className="display mt-8 text-5xl text-bone transition-colors group-hover:text-acid">
        {p.title}
      </h3>
      <p className="mt-4 max-w-md text-sm text-bone/70">{p.blurb}</p>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {p.tags.map((t) => (
            <span key={t} className="mono text-[10px] uppercase tracking-widest text-bone/60">
              · {t}
            </span>
          ))}
        </div>
        <span className="display text-3xl text-acid transition-transform group-hover:translate-x-2">→</span>
      </div>
    </>
  );
}

const previews = [
  {
    title: "Student OS",
    kind: "SaaS · Software",
    year: "2025",
    blurb: "A specialized platform for schools to simplify day-to-day operations through automation — QR attendance, auto report cards, and multi-role systems.",
    tags: ["SaaS", "Automation", "Education"],
    href: "https://student-os.onrender.com",
  },
  {
    title: "Axion AI",
    kind: "Automation · AI",
    year: "2026",
    blurb: "A fully automated B2B lead generation agency platform — capturing, enriching, and converting high-intent prospects at scale with zero manual intervention.",
    tags: ["Automation", "AI", "Lead Gen"],
    href: "https://axion-ai-1.lovable.app",
    internal: "/projects/axion-ai",
  },
];
