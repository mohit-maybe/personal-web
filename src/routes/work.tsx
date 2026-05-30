import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Mohitpreet Singh" },
      { name: "description", content: "A codex of projects by Mohitpreet Singh." },
    ],
  }),
  component: WorkPage,
});

type Work = {
  n: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
};

const works: Work[] = [
  {
    n: "01",
    title: "Student OS",
    kind: "SaaS · Full-stack",
    year: "2025",
    blurb:
      "A school management platform built from scratch — QR attendance, auto report cards, PTM exports, role-based logins for admins, teachers & students, and multi-school support. Built because the existing systems were broken.",
    tags: ["SaaS", "Full-stack", "Education"],
    href: "https://student-os.onrender.com",
    repo: "https://github.com/mohit-maybe",
  },
];

export function WorkPage() {
  return (
    <PageTransition>
      <header className="border-b-2 border-bone/30 pb-8">
        <p className="mono text-xs uppercase tracking-[0.3em] text-blood">※ Chapter II</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone">
          THE <span className="text-acid">CODEX</span>
        </h1>
        <p className="mono mt-4 max-w-xl text-sm text-bone/70">
          Artifacts pulled from years of practice. Each one shaped by a different obsession.
        </p>
      </header>

      <ul className="mt-2">
        {works.map((w, i) => (
          <motion.li
            key={w.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-bone/20 py-8 transition-colors hover:bg-ink/60 md:gap-12 md:py-12"
          >
            <span className="display text-3xl text-acid md:text-5xl">{w.n}</span>
            <div>
              <h2 className="display text-4xl text-bone transition-colors group-hover:text-acid md:text-7xl">
                {w.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-bone/70">{w.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {w.tags.map((t) => (
                  <span key={t} className="mono text-[10px] uppercase tracking-widest text-bone/50">
                    · {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {w.href && (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-border mono px-3 py-1.5 text-[11px] uppercase tracking-widest text-bone hover:bg-acid hover:text-void"
                  >
                    Live site ↗
                  </a>
                )}
                {w.repo && (
                  <a
                    href={w.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-border mono px-3 py-1.5 text-[11px] uppercase tracking-widest text-bone hover:bg-acid hover:text-void"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            <div className="mono text-right text-xs uppercase tracking-widest text-bone/60">
              <p>{w.kind}</p>
              <p className="mt-1">{w.year}</p>
              <p className="display mt-4 text-3xl text-acid transition-transform group-hover:translate-x-2">→</p>
            </div>
          </motion.li>
        ))}

        <li className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-dashed border-bone/20 py-12 md:gap-12">
          <span className="display text-3xl text-bone/30 md:text-5xl">02</span>
          <div>
            <h2 className="display text-4xl text-bone/40 md:text-7xl">[ Forthcoming ]</h2>
            <p className="mt-2 max-w-xl text-sm text-bone/50">
              More artifacts incoming. Mohit is mid-build.
            </p>
          </div>
          <div className="mono text-right text-xs uppercase tracking-widest text-bone/30">
            <p>TBA</p>
            <p className="mt-1">2026</p>
          </div>
        </li>
      </ul>

      <div className="mt-20 text-center">
        <Link
          to="/contact"
          className="brutal-shadow-blood inline-flex items-center gap-3 bg-blood px-8 py-5 text-bone transition-transform hover:-translate-x-1 hover:-translate-y-1"
        >
          <span className="heading text-base">Have a project? Let's talk.</span>
          <span className="display text-2xl">→</span>
        </Link>
      </div>
    </PageTransition>
  );
}
