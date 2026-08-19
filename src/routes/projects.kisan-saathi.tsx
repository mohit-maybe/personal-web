import { createFileRoute, Link } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/projects/kisan-saathi")({
  head: () => ({
    meta: [
      { title: "KisanSaathi — Mohitpreet Singh" },
      {
        name: "description",
        content:
          "KisanSaathi — an AI crop doctor and market advisor built for Punjabi farmers.",
      },
    ],
  }),
  component: KisanSaathiPage,
});

function KisanSaathiPage() {
  return (
    <PageTransition>
      <header className="border-b-2 border-bone/30 pb-10">
        <p className="mono text-xs uppercase tracking-[0.3em] text-blood">
          ※ Case Study · 05
        </p>
        <h1 className="display mt-4 text-[clamp(3rem,11vw,10rem)] text-bone">
          KISAN <span className="text-acid">SAATHI</span>
        </h1>
        <p className="mono mt-5 max-w-2xl text-sm leading-6 text-bone/70">
          An AI crop doctor and market advisor designed around the real needs of
          Punjabi farmers — combining crop disease diagnosis, farming guidance,
          weather, and mandi prices in one mobile-first experience.
        </p>
      </header>

      <section className="grid gap-10 py-12 md:grid-cols-3">
        <div className="brutal-border p-6">
          <p className="mono text-[10px] uppercase tracking-widest text-bone/50">
            Problem
          </p>
          <p className="mt-4 text-sm leading-6 text-bone/75">
            Farmers often need quick, understandable answers about crop health,
            weather, and market conditions without navigating several separate
            tools.
          </p>
        </div>
        <div className="brutal-border p-6">
          <p className="mono text-[10px] uppercase tracking-widest text-bone/50">
            Built
          </p>
          <p className="mt-4 text-sm leading-6 text-bone/75">
            Photo-based crop disease diagnosis, an agricultural chatbot, live
            weather and mandi information, with Punjabi, Hindi, and English
            support.
          </p>
        </div>
        <div className="brutal-border p-6">
          <p className="mono text-[10px] uppercase tracking-widest text-bone/50">
            Stack
          </p>
          <p className="mt-4 text-sm leading-6 text-bone/75">
            AI Vision · TanStack Start · TypeScript · i18n · mobile-first UI
          </p>
        </div>
      </section>

      <section className="border-t border-bone/20 py-12">
        <p className="mono text-xs uppercase tracking-[0.25em] text-acid">
          What it does
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="display text-4xl text-bone">CROP DOCTOR</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-bone/65">
              Farmers can use a crop image to get an AI-assisted diagnosis and
              practical next steps in a familiar language.
            </p>
          </div>
          <div>
            <h2 className="display text-4xl text-bone">MARKET + WEATHER</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-bone/65">
              Useful farming context is brought together so decisions do not
              depend on jumping between unrelated apps and websites.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://kisan-mitra-xi.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="brutal-shadow-acid brutal-border bg-acid px-5 py-3 text-void"
        >
          <span className="mono text-xs uppercase tracking-widest">Live site ↗</span>
        </a>
        <a
          href="https://github.com/mohit-maybe/kisan-mitra"
          target="_blank"
          rel="noreferrer"
          className="brutal-border px-5 py-3 text-bone hover:bg-acid hover:text-void"
        >
          <span className="mono text-xs uppercase tracking-widest">GitHub ↗</span>
        </a>
        <Link
          to="/work"
          className="brutal-border px-5 py-3 text-bone hover:bg-acid hover:text-void"
        >
          <span className="mono text-xs uppercase tracking-widest">← Back to work</span>
        </Link>
      </div>
    </PageTransition>
  );
}
