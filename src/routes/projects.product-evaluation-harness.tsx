import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  Github,
  ArrowRight,
  Target,
  Zap,
  Layers,
  Scale,
  FlaskConical,
  DollarSign,
  GitCompare,
  Puzzle,
  Gauge,
} from "lucide-react";

export const Route = createFileRoute("/projects/product-evaluation-harness")({
  head: () => ({
    meta: [
      { title: "Product Evaluation Harness — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "Product Evaluation Harness — A production-grade framework for evaluating LLM summarization with statistical rigor, cost analysis, and A/B testing.",
      },
    ],
  }),
  component: ProductEvaluationHarnessPage,
});

/* ─── data ─── */
const features = [
  {
    icon: Scale,
    title: "Weighted Product Judgment",
    desc: "A rubric that weighs hallucination over conciseness for enterprise use cases — because a wrong deadline is worse than a wordy summary, and the scoring reflects that.",
  },
  {
    icon: FlaskConical,
    title: "Statistical Rigor",
    desc: "Welch's t-tests, Cohen's d effect sizes, and 95% confidence intervals turn 'this model feels better' into a number you can defend in a ship review.",
  },
  {
    icon: Layers,
    title: "Systems Thinking",
    desc: "Five independent, composable stages — execute, judge, aggregate, visualize, A/B test — that can be re-run and re-mixed without touching the rest of the pipeline.",
  },
  {
    icon: DollarSign,
    title: "Cost Awareness",
    desc: "Cost-per-quality scatter plots and Pareto frontier analysis surface the model that's actually the best value, not just the highest score.",
  },
  {
    icon: GitCompare,
    title: "Failure Triage",
    desc: "A side-by-side diff viewer with line-level highlighting and a composite severity score, so flagged failures are diagnosed in seconds, not guessed at.",
  },
  {
    icon: Puzzle,
    title: "Built to Extend",
    desc: "Swap models, criteria, or rubrics by editing a flag or a JSON file — the core pipeline never needs to change.",
  },
];

const stack = [
  { label: "Core", items: ["Python", "LiteLLM", "JSON-mode Judging"] },
  { label: "Statistics", items: ["Welch's t-test", "Cohen's d", "95% CI"] },
  { label: "Dashboard", items: ["Streamlit", "Plotly", "Pandas"] },
];

const pipeline = [
  { step: "01", label: "Golden Dataset", detail: "10 cases, 8 categories" },
  { step: "02", label: "Model Executor", detail: "Multi-provider via LiteLLM" },
  { step: "03", label: "LLM-as-Judge", detail: "Rubric-based scoring" },
  { step: "04", label: "Aggregator", detail: "Per-model & category stats" },
  { step: "05", label: "Dashboard / A-B Test", detail: "Streamlit + t-tests" },
];

const tabs = [
  "Results Table — filterable, color-coded, CSV export",
  "Model Comparison — radar chart + pairwise significance",
  "Category Breakdown — difficulty heatmap by model",
  "Cost-Quality Analysis — Pareto frontier scatter plot",
  "Flagged Failures — diff viewer + severity scoring",
];

/* ─── component ─── */
function ProductEvaluationHarnessPage() {
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
          ※ Project Showcase · Product Analytics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="display mt-4 text-[clamp(2.5rem,10vw,9.5rem)] text-bone"
        >
          EVAL <span className="text-acid">HARNESS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono mt-4 max-w-2xl text-sm leading-relaxed text-bone/70"
        >
          A production-grade framework for evaluating LLM summarization with
          statistical rigor, cost analysis, and A/B testing — built for PMs
          who need defensible, data-driven answers to "which model do we
          ship?"
        </motion.p>

        {/* Impact metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-4 brutal-border bg-ink px-6 py-4"
        >
          <Gauge className="h-5 w-5 text-blood" />
          <span className="mono text-sm text-bone/90">
            Every model is judged on{" "}
            <span className="text-acid">10 golden test cases</span> across 8
            categories and 4 edge cases — scored, ranked, and A/B tested with
            p-values before it ships.
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
            href="https://github.com/mohit-maybe/product-evaluation-harness"
            target="_blank"
            rel="noreferrer"
            className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-6 py-4 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
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
            Vibes-Based <span className="text-blood">Shipping</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            Most teams pick an LLM by eyeballing a few outputs and going with
            their gut. There's no audit trail, no confidence interval, and no
            answer for "are we sure GPT-4o is actually better than Claude
            here, or is that just noise?"
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
            Defensible <span className="text-acid">Decisions</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            The harness runs every model against a golden dataset, judges
            each output on a weighted rubric, and reports Welch's t-tests,
            Cohen's d, and cost-per-quality — so "ship Model X" comes with the
            math to back it up.
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
                    // Skill {String(i + 1).padStart(2, "0")}
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

      {/* ═══════════ PIPELINE ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="brutal-border bg-ink p-6 md:p-8"
        >
          <div className="flex items-center gap-3 border-b border-bone/15 pb-4">
            <Layers className="h-5 w-5 text-acid" />
            <p className="mono text-xs uppercase tracking-widest text-blood">
              // Pipeline Overview
            </p>
          </div>
          <h3 className="display mt-6 text-3xl text-bone md:text-4xl">
            Five-Stage <span className="text-acid">Pipeline</span>
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {pipeline.map((stage, i) => (
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

      {/* ═══════════ DASHBOARD TABS ═══════════ */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
            ※ The Dashboard
          </p>
          <h2 className="display mt-4 text-5xl text-bone md:text-7xl">
            Five <span className="text-acid">Tabs</span>, One Verdict
          </h2>
        </motion.div>

        <ul className="mt-10">
          {tabs.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-baseline gap-4 border-b border-bone/20 py-4"
            >
              <span className="display text-xl text-acid md:text-2xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mono text-sm text-bone/80">{t}</p>
            </motion.li>
          ))}
        </ul>
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
            Read the <span className="text-acid">Code</span>
          </h2>
          <p className="mono mx-auto mt-4 max-w-lg text-sm text-bone/60">
            No live demo — this one lives in the repo. Clone it, run the demo
            mode with mock data, or plug in real API keys and judge your own
            models.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/mohit-maybe/product-evaluation-harness"
              target="_blank"
              rel="noreferrer"
              className="brutal-shadow group inline-flex items-center gap-3 bg-acid px-8 py-5 text-void transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <span className="heading text-base">View on GitHub</span>
              <Github className="h-5 w-5" />
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
