const frameworks = [
  {
    abbr: "S+A",
    name: "The S+A Spectrum",
    tag: "Diagnostic · 10 minutes",
    body:
      "A short diagnostic that maps where a learner or professional sits across the dimensions AI cannot replicate — judgment, verification, evaluative reasoning, and the cognitive effort that produces real expertise. Designed for individuals to take in 10 minutes and for institutions to deploy at cohort scale.",
    href: "#spectrum",
    cta: "Take the diagnostic",
  },
  {
    abbr: "HAQ",
    name: "The HAQ Profile",
    tag: "Human-AI Quotient",
    body:
      "A profile of how a person actually works alongside AI — what they delegate, what they verify, where they over-trust, and where they under-use. Built for L&D leads who need a vocabulary for AI capability that survives a board presentation, and for individuals who want to see their own pattern.",
    href: "#haq",
    cta: "Read the framework",
  },
  {
    abbr: "MPEM",
    name: "MPEM",
    tag: "Mediated Process & Evaluative Mastery",
    body:
      "An assessment design framework for the AI era. MPEM separates the process of producing work from the evaluative mastery that distinguishes good work from plausible work — and gives faculty and assessment leads a way to grade for the second when the first can be generated.",
    href: "#mpem",
    cta: "Read the framework",
  },
];

export default function Frameworks() {
  return (
    <section
      id="frameworks"
      className="section"
      style={{ background: "var(--bg-neutral-primary-soft)" }}
    >
      <div className="container-refined">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Frameworks</p>
          <h2 className="mt-4">
            Three angles on the same problem: distinguishing cognition from output.
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--fg-body)", maxWidth: "60ch" }}>
            Each framework is designed to do real work for a different audience — but they
            share one premise: the durable human capability is upstream of production, and it
            has to be designed for explicitly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {frameworks.map((f, i) => (
            <article key={f.abbr} className="card flex h-full flex-col p-10">
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className="font-serif text-5xl"
                  style={{ color: "var(--fg-brand)", letterSpacing: "-0.02em" }}
                >
                  {f.abbr}
                </span>
                <span className="text-xs uppercase tracking-wider" style={{ color: "var(--fg-body-subtle)" }}>
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 !text-2xl">{f.name}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-brand-strong)" }}>{f.tag}</p>
              <p
                className="mt-5 flex-1 text-[15px] leading-relaxed"
                style={{ color: "var(--fg-body)" }}
              >
                {f.body}
              </p>
              <a href={f.href} className="link-brand mt-8 inline-block text-sm">
                {f.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
