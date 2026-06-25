const posts = [
  {
    date: "Jun 2026",
    title: "Why I make my students answer before they ask the AI.",
    dek: "A small classroom rule with outsized effects on how students engage with generative tools.",
  },
  {
    date: "May 2026",
    title: "AI literacy isn't a curriculum — it's a posture.",
    dek: "Why the most important AI skills are habits of attention, not lists of facts.",
  },
  {
    date: "Apr 2026",
    title: "What SpeakMesh taught me about feedback loops in learning.",
    dek: "Six months of building a speaking-practice tool, and what surprised me about teenage learners.",
  },
  {
    date: "Mar 2026",
    title: "The quiet cost of \"just ask ChatGPT\".",
    dek: "What we lose when we outsource the first draft of every thought.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="section" style={{ background: "var(--bg-neutral-secondary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 className="mt-4 max-w-2xl">Notes on learning, teaching, and AI.</h2>
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
