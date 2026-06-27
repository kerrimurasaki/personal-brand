export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      style={{ background: "#0b1220" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 30%, rgba(33,121,189,0.30) 0%, transparent 60%), radial-gradient(40% 40% at 80% 80%, rgba(178,84,212,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container-refined relative">
        <div className="max-w-3xl">
          <p className="eyebrow !text-[#6db1e3]">Work With Me</p>
          <h2 className="mt-6 !text-white">
            For faculties, L&amp;D teams, and operators ready to design for the work AI cannot do.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Institutional partnerships, workshops, advisory retainers, or a short conversation
            to see if the frameworks fit your context — start with an email.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="mailto:kerrimurasaki@gmail.com" className="btn btn-brand">
              kerrimurasaki@gmail.com
            </a>
            <a
              href="https://github.com/kerrimurasaki"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost-light"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kerrimurasaki"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost-light"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/kerrimurasaki"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost-light"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
