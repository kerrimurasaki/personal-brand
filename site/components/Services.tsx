const services = [
  {
    label: "01",
    audience: "For Faculty & Educators",
    title: "Assessment redesign for the AI era",
    body:
      "Workshops and engagements with university lecturers, course coordinators, and assessment leads who need to rebuild what they grade now that students can generate plausible work in seconds. Uses MPEM to design assessments that measure evaluative mastery, not production.",
    bullets: [
      "Department-wide assessment audits",
      "MPEM-based course redesign",
      "Workshops for faculty and curriculum committees",
    ],
  },
  {
    label: "02",
    audience: "For L&D & Talent Leaders",
    title: "Capability frameworks that survive the board",
    body:
      "Working with corporate L&D leads, capability specialists, and talent directors who need to distinguish performance from competence in a workforce where the half-life of skills is collapsing. Uses the HAQ Profile to give leaders a defensible vocabulary for AI capability.",
    bullets: [
      "HAQ Profile rollouts at team and org scale",
      "Capability frameworks for AI-augmented roles",
      "Train-the-trainer for internal L&D",
    ],
  },
  {
    label: "03",
    audience: "For Founders & Operators",
    title: "Cognitive triage for AI-augmented teams",
    body:
      "Advisory for executives and senior operators who have noticed their teams are getting faster but not necessarily better. We work through which kinds of cognitive work to preserve, which to delegate to AI, and how to tell the difference before it shows up in your outputs.",
    bullets: [
      "Cognitive triage sessions with leadership",
      "AI-use policy design grounded in capability",
      "Quarterly advisory retainers",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--bg-neutral-secondary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Engagements</p>
          <h2 className="mt-4">Three ways the work shows up in institutions.</h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--fg-body)", maxWidth: "60ch" }}>
            Every engagement is anchored to one of the frameworks above. Scopes range from a
            single workshop to a multi-quarter institutional partnership.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.label} className="card flex h-full flex-col p-10">
              <p className="font-serif text-3xl" style={{ color: "var(--fg-brand)" }}>{s.label}</p>
              <p className="mt-8 text-xs uppercase tracking-wider" style={{ color: "var(--fg-body-subtle)" }}>
                {s.audience}
              </p>
              <h3 className="mt-3 !text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--fg-body)" }}>
                {s.body}
              </p>
              <ul className="mt-6 space-y-2 text-[14px]" style={{ color: "var(--fg-body)" }}>
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span style={{ color: "var(--fg-brand)" }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
