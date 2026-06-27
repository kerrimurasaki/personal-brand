export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-aurora" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="container-refined relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow rise rise-1" style={{ color: "var(--fg-brand)" }}>
            Cognitive Effort · Assessment · AI Literacy
          </p>
          <h1 className="hero-title rise rise-2 mt-4">
            Output is no longer a reliable signal of capability.
          </h1>
          <p
            className="rise rise-3 mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--fg-body)" }}
          >
            I help educators, L&amp;D leaders, and operators preserve the cognitive effort
            that AI assistance can quietly replace. Start with a 10-minute diagnostic that
            maps where a learner sits across the dimensions AI cannot replicate.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#spectrum" className="btn btn-pill btn-brand">Take the S+A Spectrum</a>
            <a href="#frameworks" className="btn btn-pill btn-ghost">Read the frameworks →</a>
          </div>
        </div>

        {/* Floating preview card — Apple-style mockup */}
        <div className="rise rise-4 mx-auto mt-20 max-w-5xl">
          <div
            className="card card-premium relative"
            style={{ background: "var(--bg-neutral-primary)", boxShadow: "var(--shadow-2xl)" }}
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-10 md:p-12">
                <p className="eyebrow" style={{ color: "var(--fg-brand)" }}>The S+A Spectrum</p>
                <h3 className="mt-3">Your cognitive profile, in 10 minutes.</h3>
                <p className="mt-4" style={{ color: "var(--fg-body)" }}>
                  Four dimensions. One profile. A short brief on what to do next.
                </p>
                <ul className="mt-6 space-y-2 text-[15px]" style={{ color: "var(--fg-body)" }}>
                  {["Judgment", "Verification", "Evaluative mastery", "Cognitive effort"].map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--bg-brand)" }}
                      />
                      <span style={{ color: "var(--fg-heading)" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative flex items-center justify-center p-10 md:p-12"
                style={{ background: "var(--bg-neutral-secondary-soft)" }}
              >
                <div
                  className="aspect-[4/3] w-full rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--bg-brand) 0%, var(--bg-secondary) 100%)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
