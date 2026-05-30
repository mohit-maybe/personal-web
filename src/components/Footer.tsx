export function Footer() {
  return (
    <footer className="mt-32 border-t-2 border-bone/30">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="display text-5xl text-acid">END.</p>
          <p className="mono mt-2 text-xs uppercase tracking-widest text-bone/60">
            Pressed in the year MMXXVI
          </p>
        </div>
        <div className="mono space-y-1 text-xs uppercase tracking-widest text-bone/70">
          <p className="text-bone">// Elsewhere</p>
          <a
            href="https://github.com/mohit-maybe"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-acid"
          >
            GitHub ↗
          </a>
          <a
            href="https://calendly.com/mohitpreets67/discussion-meeting"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-acid"
          >
            Calendly ↗
          </a>
        </div>
        <div className="mono space-y-1 text-xs uppercase tracking-widest text-bone/70">
          <p className="text-bone">// Channel</p>
          <a
            href="mailto:mohitpreets67@gmail.com"
            className="block hover:text-acid"
          >
            mohitpreets67@gmail.com
          </a>
          <p>Open to commissions & collaboration</p>
        </div>
      </div>
      <div className="slash h-3" />
    </footer>
  );
}
