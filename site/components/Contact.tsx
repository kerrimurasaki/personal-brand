export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-brand) 0%, var(--bg-brand-strong) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, rgba(205,82,184,0.35) 0%, transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(204,147,60,0.20) 0%, transparent 70%)",
        }}
      />
      <div className="container-refined relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Work With Me</p>
          <h2 className="mt-6 !text-white">
            For faculties, L&amp;D teams, and operators ready to design for the work AI cannot do.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/85">
            Institutional partnerships, workshops, advisory retainers, or a short conversation
            to see if the frameworks fit your context — start with an email.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:kerrimurasaki@gmail.com"
              className="btn btn-pill"
              style={{ background: "#ffffff", color: "var(--bg-brand)" }}
            >
              kerrimurasaki@gmail.com
            </a>
            <a
              href="https://github.com/kerrimurasaki"
              target="_blank"
              rel="noreferrer"
              className="btn btn-pill"
              style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kerrimurasaki"
              target="_blank"
              rel="noreferrer"
              className="btn btn-pill"
              style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
