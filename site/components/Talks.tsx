const talks = [
  { date: "Aug 2026", venue: "EdTech Asia Summit", topic: "Thinking with AI: A literacy framework for K–12", status: "Upcoming" },
  { date: "May 2026", venue: "Singapore Teachers' Conference", topic: "Designing AI-resilient assessments", status: "Past" },
  { date: "Mar 2026", venue: "NUS School of Computing", topic: "Building SpeakMesh: AI feedback at classroom scale", status: "Past" },
  { date: "Nov 2025", venue: "AI for Good (Youth Track)", topic: "Why young people need AI literacy, not AI fear", status: "Past" },
];

export default function Talks() {
  return (
    <section id="talks" className="section" style={{ background: "var(--bg-neutral-primary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Talks & Workshops</p>
          <h2 className="mt-4">Where I&apos;ve been speaking recently.</h2>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs uppercase tracking-wider" style={{ color: "var(--fg-body-subtle)" }}>
                <th className="px-8 py-5 font-medium">Date</th>
                <th className="px-8 py-5 font-medium">Venue</th>
                <th className="px-8 py-5 font-medium">Topic</th>
                <th className="px-8 py-5 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {talks.map((t, i) => (
                <tr key={t.topic} style={{ borderTop: "1px solid var(--border-default)" }}>
                  <td className="px-8 py-6 text-sm" style={{ color: "var(--fg-body)" }}>{t.date}</td>
                  <td className="px-8 py-6 text-sm font-medium" style={{ color: "var(--fg-heading)" }}>{t.venue}</td>
                  <td className="px-8 py-6 text-sm" style={{ color: "var(--fg-body)" }}>{t.topic}</td>
                  <td className="px-8 py-6 text-right">
                    <span className={t.status === "Upcoming" ? "badge" : "badge badge-neutral"}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
