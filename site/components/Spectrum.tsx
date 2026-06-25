export default function Spectrum() {
  return (
    <section
      id="spectrum"
      className="section relative overflow-hidden"
      style={{ background: "var(--bg-brand-softer)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 30%, rgba(184,149,106,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="container-refined relative">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">The S+A Spectrum</p>
            <h2 className="mt-4">
              A 10-minute diagnostic for the work AI cannot do for you.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--fg-body)", maxWidth: "60ch" }}>
              <p>
                Faculty members use it before redesigning a course. L&amp;D leads use it before
                rolling out an AI-capability programme. Operators use it before deciding what
                their team should and shouldn&apos;t hand to an AI.
              </p>
              <p>
                You&apos;ll get a profile across the dimensions of cognitive effort that
                separate competence from production, and a short brief on what to do with it.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#" className="btn btn-brand">Take the Spectrum →</a>
              <a href="#frameworks" className="link-brand text-sm">
                Read the methodology
              </a>
            </div>
          </div>

          <div className="card p-10" style={{ background: "var(--bg-neutral-primary-soft)" }}>
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--fg-body-subtle)" }}>
              What you&apos;ll see
            </p>
            <ul className="mt-6 space-y-5">
              {[
                { k: "Judgment", v: "Where your decisions hold up under scrutiny." },
                { k: "Verification", v: "How well you catch what an AI gets wrong." },
                { k: "Evaluative mastery", v: "Telling good work from plausible work." },
                { k: "Cognitive effort", v: "What you would lose by automating it away." },
              ].map((d) => (
                <li key={d.k} className="flex flex-col gap-1 border-t pt-5 first:border-0 first:pt-0" style={{ borderColor: "var(--border-default)" }}>
                  <span className="font-serif text-lg" style={{ color: "var(--fg-heading)" }}>{d.k}</span>
                  <span className="text-sm" style={{ color: "var(--fg-body)" }}>{d.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
