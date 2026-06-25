export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-neutral-primary-soft)" }}>
      <div className="container-refined">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-24">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 max-w-3xl">
              An educator and product builder working at the intersection of AI and learning.
            </h2>
            <div className="mt-10 space-y-6 text-[17px] leading-relaxed" style={{ color: "var(--fg-body)", maxWidth: "62ch" }}>
              <p>
                I&apos;m Kerri — I run workshops on AI literacy for youths, design
                EdTech products like <a className="link-brand" href="#work">SpeakMesh</a> and{" "}
                <a className="link-brand" href="#work">ThinkFirst</a>, and write about what it
                means to learn well when machines can think alongside us.
              </p>
              <p>
                My belief is simple: AI shouldn&apos;t replace the hard work of thinking — it
                should make that work richer, more curious, and more accessible to every learner.
                The most important question of this decade isn&apos;t <em>what can AI do</em>,
                but <em>what becomes of us if we stop doing it ourselves</em>.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              <span className="badge">AI Literacy</span>
              <span className="badge badge-neutral">EdTech</span>
              <span className="badge badge-neutral">Curriculum Design</span>
              <span className="badge badge-neutral">Speaking</span>
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
              Based in Singapore · Available worldwide
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
