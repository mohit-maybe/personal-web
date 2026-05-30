import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohitpreet Singh" },
      { name: "description", content: "Designer, developer, and quiet maximalist." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { label: "Design", items: ["Brand Systems", "Product Design", "Typography", "Editorial"] },
  { label: "Build", items: ["TypeScript", "React", "Node", "Vite"] },
  { label: "Think", items: ["Strategy", "Research", "Prototyping", "Writing"] },
];

const timeline = [
  { year: "2025", note: "Won Youth Parliament Award (Best Speaker) and AI Vidyasetu Hackathon Medal. Top 2.5% student at KV." },
  { year: "2024", note: "Deep dive into advanced programming and industrial problem-solving." },
  { year: "2022", note: "Won ATAL Innovation Mission Award (National Level) for a fitness application." },
  { year: "2020", note: "First line of production code went live somewhere strange." },
];

const achievements = [
  {
    title: "Atal Innovation Mission",
    rank: "National Winner",
    year: "2022",
    desc: "Awarded at the national level for designing and developing a comprehensive fitness application.",
  },
  {
    title: "AI Vidyasetu Hackathon",
    rank: "Regional Medalist",
    year: "2025",
    desc: "Recognized for innovative problem-solving and technical implementation in artificial intelligence.",
  },
  {
    title: "Youth Parliament",
    rank: "Best Speaker",
    year: "2025",
    desc: "Awarded best speaker at the regional level for excellence in debate and public discourse.",
  },
  {
    title: "Academic Excellence",
    rank: "Top 2.5%",
    year: "2025",
    desc: "Ranked within the top 2.5% of students academically at Kendriya Vidyalaya.",
  },
];

function AboutPage() {
  return (
    <PageTransition>
      <header className="border-b-2 border-bone/30 pb-8">
        <p className="mono text-xs uppercase tracking-[0.3em] text-blood">※ Chapter III</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,12rem)] text-bone">
          <span className="text-acid">WHO</span> AM I?
        </h1>
      </header>

      <section className="mt-16 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg leading-relaxed text-bone/85"
        >
          <p>
            I'm <span className="tape mono text-base">Mohitpreet Singh</span>, a designer
            and developer who treats every screen like the cover of a heavy zine —
            something that demands to be picked up, held, read out loud.
          </p>
          <p>
            My work lives at the seam between editorial design and engineered systems.
            I love brutalist grids, sharp typography, and the quiet click of a well-built
            component.
          </p>
          <p>
            When I'm not in a browser, I'm collecting print ephemera, listening to
            doom-metal soundtracks, and sketching layouts on the backs of receipts.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="brutal-border bg-ink p-6"
        >
          <p className="mono text-xs uppercase tracking-widest text-blood">// Field Card</p>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              ["Name", "Mohitpreet Singh"],
              ["Role", "Designer / Developer"],
              ["Stack", "TS · React · Node"],
              ["Tools", "Figma · Vite · Vim"],
              ["Status", "Open to work"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-bone/15 pb-2">
                <dt className="mono text-bone/50">{k}</dt>
                <dd className="heading text-bone">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </section>

      {/* Achievements */}
      <section className="mt-24">
        <h2 className="display text-5xl text-bone md:text-7xl">
          THE <span className="text-acid">HONORS</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brutal-border relative flex flex-col justify-between bg-ink p-6"
            >
              <div>
                <div className="flex items-center justify-between border-b border-bone/15 pb-4">
                  <span className="mono text-[10px] uppercase tracking-widest text-blood">
                    // Artifact {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-2xl text-acid">{a.year}</span>
                </div>
                <h3 className="display mt-6 text-4xl text-bone">{a.title}</h3>
                <p className="heading mt-2 text-sm text-acid">{a.rank}</p>
                <p className="mt-4 text-sm leading-relaxed text-bone/70">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <h2 className="display text-5xl text-bone md:text-7xl">
          The <span className="text-acid">Toolkit</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brutal-border bg-ink p-6"
            >
              <p className="display text-3xl text-acid">{s.label}.</p>
              <ul className="mono mt-4 space-y-1 text-sm uppercase tracking-widest text-bone/80">
                {s.items.map((it) => (
                  <li key={it}>· {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-24">
        <h2 className="display text-5xl text-bone md:text-7xl">
          A short <span className="text-acid">timeline</span>
        </h2>
        <ol className="mt-10 space-y-6">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-bone/20 pb-6"
            >
              <span className="display text-4xl text-acid md:text-6xl">{t.year}</span>
              <p className="text-base text-bone/80 md:text-lg">{t.note}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </PageTransition>
  );
}
