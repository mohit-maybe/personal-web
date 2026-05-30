import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "00 // Index" },
  { to: "/work", label: "01 // Work" },
  { to: "/about", label: "02 // About" },
  { to: "/contact", label: "03 // Contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b-2 border-bone/30 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="grid h-9 w-9 place-items-center bg-acid text-void"
          >
            <span className="display text-2xl leading-none">M</span>
          </motion.div>
          <span className="heading text-sm text-bone">Mohitpreet&nbsp;Singh</span>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`mono relative px-3 py-2 text-xs uppercase tracking-widest transition-colors ${
                  active ? "text-acid" : "text-bone/70 hover:text-bone"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-acid"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:mohitpreets67@gmail.com"
          className="tape-blood mono hidden text-[10px] uppercase tracking-widest md:inline-block"
        >
          Available · 2026
        </a>
      </div>

      {/* marquee strip */}
      <div className="overflow-hidden border-y border-bone/30 bg-acid text-void">
        <div className="marquee-track flex whitespace-nowrap py-1">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="mono text-[11px] font-bold uppercase tracking-widest">
                  ✦ Designer · Developer · Builder of strange beautiful things · Portfolio MMXXVI
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
