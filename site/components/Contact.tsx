export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      style={{ background: "#09090b" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 30%, rgba(184,149,106,0.25) 0%, transparent 60%), radial-gradient(40% 40% at 80% 80%, rgba(184,149,106,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container-refined relative">
        <div className="max-w-3xl">
          <p className="eyebrow !text-[#d4b896]">Get in Touch</p>
          <h2 className="mt-6 !text-white">Let&apos;s build something thoughtful.</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Workshops, talks, advisory, or just a good conversation about AI and learning —
            I read every email.
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
