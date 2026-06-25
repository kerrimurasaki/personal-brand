const quotes = [
  {
    quote:
      "Kerri's workshop reframed how our whole department thinks about AI in the classroom. Practical, principled, and deeply considered.",
    name: "Head of Curriculum",
    org: "International school, Singapore",
  },
  {
    quote:
      "SpeakMesh has been a quiet revolution for my ESL students. The kind of tool that only an educator could have built.",
    name: "Secondary English Teacher",
    org: "Public school district",
  },
  {
    quote: "Rare to find someone who can both ship the product and teach the pedagogy. Kerri does both.",
    name: "EdTech Founder",
    org: "YC-backed startup",
  },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--bg-neutral-secondary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-4">From educators, founders, and collaborators.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="card flex h-full flex-col p-10">
              <span className="font-serif text-5xl leading-none" style={{ color: "var(--fg-brand)" }}>&ldquo;</span>
              <blockquote
                className="mt-4 flex-1 font-serif text-xl leading-snug"
                style={{ color: "var(--fg-heading)" }}
              >
                {q.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-medium" style={{ color: "var(--fg-heading)" }}>{q.name}</p>
                <p className="text-sm" style={{ color: "var(--fg-body-subtle)" }}>{q.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
