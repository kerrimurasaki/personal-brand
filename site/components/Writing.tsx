const posts = [
  {
    date: "Jun 2026",
    title: "Output is not capability. It used to be a useful shortcut. It isn't anymore.",
    dek: "Why every assessment, hiring loop, and L&D programme is now downstream of a measurement problem we haven't named.",
  },
  {
    date: "May 2026",
    title: "What MPEM actually measures, and why it isn't the essay.",
    dek: "Evaluative mastery is the part of expertise that AI can't generate. Here's how to grade for it.",
  },
  {
    date: "Apr 2026",
    title: "The HAQ Profile: a vocabulary for AI capability that survives the boardroom.",
    dek: "Most AI-readiness frameworks measure tool usage. The HAQ Profile measures something harder.",
  },
  {
    date: "Mar 2026",
    title: "The quiet cost of \"just ask the AI\".",
    dek: "What we lose when we outsource the first draft of every thought — and how to design against it.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="section" style={{ background: "var(--bg-neutral-primary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 className="mt-4 max-w-2xl">Essays on cognition, assessment, and the work AI cannot do.</h2>
          </div>
          <a href="#" className="link-brand text-sm">All essays →</a>
        </div>

        <ul className="divide-y" style={{ borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)" }}>
          {posts.map((p) => (
            <li key={p.title}>
              <a href="#" className="group grid gap-2 py-8 md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-8">
                <span className="text-sm" style={{ color: "var(--fg-body-subtle)" }}>{p.date}</span>
                <div>
                  <h3 className="!text-2xl transition group-hover:text-[color:var(--fg-brand)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: "var(--fg-body)" }}>{p.dek}</p>
                </div>
                <span className="text-sm link-brand">Read →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
