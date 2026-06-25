const projects = [
  {
    title: "AI Literacy for Youths",
    blurb:
      "A self-paced course teaching students how AI works, where it fails, and how to use it responsibly. 12 modules, ~100 interactive steps.",
    tags: ["Curriculum", "Vanilla JS", "Vercel"],
    href: "https://github.com/kerrimurasaki/AF-AI-Literacy",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    year: "2026",
  },
  {
    title: "SpeakMesh",
    blurb:
      "An English speaking-practice app using Gemini for real-time feedback. Voice logs, scenarios, and group discussions for classrooms.",
    tags: ["React", "Gemini", "Firebase"],
    href: "https://speakmesh.vercel.app",
    image:
      "https://images.unsplash.com/photo-1573166364524-d9dbfd8bdf83?auto=format&fit=crop&w=1600&q=80",
    year: "2026",
  },
  {
    title: "ThinkFirst",
    blurb:
      "A reasoning-first AI tutor that asks students to commit to an answer before showing the AI's response.",
    tags: ["Pedagogy", "LLM", "Prototype"],
    href: "https://github.com/kerrimurasaki/ThinkFirst",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80",
    year: "2025",
  },
  {
    title: "My Learning OS",
    blurb:
      "A personal experiment in using AI to design adaptive learning paths from any source material.",
    tags: ["Research", "Tooling"],
    href: "https://github.com/kerrimurasaki/my-learning-OS",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1600&q=80",
    year: "2025",
  },
];

export default function Work() {
  return (
    <section id="work" className="section" style={{ background: "var(--bg-neutral-secondary-soft)" }}>
      <div className="container-refined">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-4 max-w-2xl">Products and projects that put learners first.</h2>
          </div>
          <a href="https://github.com/kerrimurasaki" className="link-brand text-sm">
            See everything on GitHub →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="card card-interactive group block overflow-hidden"
            >
              <div className="aspect-[16/10] w-full overflow-hidden" style={{ borderRadius: "32px 32px 0 0" }}>
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="!text-2xl">{p.title}</h3>
                  <span className="text-xs" style={{ color: "var(--fg-body-subtle)" }}>{p.year}</span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--fg-body)" }}>
                  {p.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="badge badge-neutral">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
