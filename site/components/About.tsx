export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-neutral-primary-soft)" }}>
      <div className="container-refined">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-24">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 max-w-3xl">
              The production barrier has collapsed. The work that remains is upstream of production.
            </h2>
            <div className="mt-10 space-y-6 text-[17px] leading-relaxed" style={{ color: "var(--fg-body)", maxWidth: "62ch" }}>
              <p>
                I&apos;m Kerri — I work across assessment, learning design, and workforce
                development in a moment when AI assistance can produce plausible work in seconds.
                The questions I care about are downstream of one shared problem: how do we
                distinguish the cognition that produces work from the work itself?
              </p>
              <p>
                That distinction used to be safe to ignore. A finished essay implied a thinking
                writer; a working prototype implied a competent builder. It doesn&apos;t anymore.
                The durable human work is now upstream — in judgment, verification, evaluative
                mastery, and the kind of effort that a frictionless AI workflow can quietly
                replace if no one designs against it.
              </p>
              <p>
                The frameworks on this site — the <strong>S+A Spectrum</strong>, the{" "}
                <strong>HAQ Profile</strong>, and <strong>MPEM</strong> — are three angles on that
                same problem, built for educators, L&amp;D professionals, and operators who want
                a defensible vocabulary for the difference between performance and competence.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              <span className="badge">Assessment in the AI era</span>
              <span className="badge badge-neutral">Workforce capability</span>
              <span className="badge badge-neutral">AI literacy</span>
              <span className="badge badge-neutral">ASEAN</span>
            </div>
          </div>

          <aside className="relative">
            {/* TODO: replace with your headshot */}
            <div
              className="aspect-[4/5] w-full overflow-hidden"
              style={{ borderRadius: 32, border: "1px solid var(--border-default)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Kerri Murasaki portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--fg-body-subtle)" }}>
              Based in Singapore · Working across ASEAN and beyond
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
