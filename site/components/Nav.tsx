export default function Nav() {
  const linkClass =
    "text-sm font-medium text-white/95 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#d4b896] hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="absolute inset-x-0 top-0 z-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,9,11,0.55) 0%, rgba(9,9,11,0.25) 60%, transparent 100%)",
        }}
      />
      <div className="container-refined relative flex items-center justify-between py-6">
        <a
          href="#"
          className="font-serif text-lg font-semibold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          Kerri Murasaki
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#work" className={linkClass}>Work</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#writing" className={linkClass}>Writing</a>
          <a href="#talks" className={linkClass}>Talks</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
