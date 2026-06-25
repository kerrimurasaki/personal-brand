const services = [
  {
    title: "Workshops",
    body: "Hands-on AI literacy sessions for schools, educators, and youth programs. Half-day to multi-week formats.",
    label: "01",
  },
  {
    title: "Speaking",
    body: "Keynotes and panels on AI in education, critical thinking, and what young people actually need.",
    label: "02",
  },
  {
    title: "Advisory",
    body: "Working with EdTech founders and school leaders on AI product strategy and responsible deployment.",
    label: "03",
  },
];

export default function Services() {
  return (
    <section className="section" style={{ background: "var(--bg-neutral-primary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">What I Do</p>
          <h2 className="mt-4">Three ways we can work together.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card p-10">
              <p className="font-serif text-3xl" style={{ color: "var(--fg-brand)" }}>{s.label}</p>
              <h3 className="mt-8 !text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--fg-body)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
