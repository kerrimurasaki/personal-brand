export default function Nav() {
  const linkClass =
    "text-sm font-medium text-white/65 hover:text-white transition-colors";

  return (
    <nav
      className="fixed inset-x-0 top-0 z-20"
      style={{ background: "#09090b", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-refined relative grid grid-cols-2 items-center py-3.5 md:grid-cols-3">
        {/* Left: icon + wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5"
          aria-label="Kerri Murasaki — home"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full font-serif text-sm font-semibold"
            style={{
              background: "var(--bg-brand)",
              color: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            K
          </span>
          <span className="font-serif text-base font-semibold tracking-tight text-white">
            Kerri Murasaki
          </span>
        </a>

        {/* Center: nav links */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          <a href="#frameworks" className={linkClass}>Frameworks</a>
          <a href="#services" className={linkClass}>Engagements</a>
          <a href="#writing" className={linkClass}>Writing</a>
          <a href="#about" className={linkClass}>About</a>
        </div>

        {/* Right: secondary + primary CTA */}
        <div className="hidden items-center justify-end gap-3 md:flex">
          <a href="#spectrum" className={linkClass}>
            S+A Spectrum
          </a>
          <a
            href="#contact"
            className="btn btn-brand !py-2 !px-4 !text-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile: just the primary CTA on the right */}
        <div className="flex items-center justify-end md:hidden">
          <a href="#contact" className="btn btn-brand !py-2 !px-4 !text-sm">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
