import Logo from "./Logo";

export default function Nav() {
  const linkClass =
    "text-sm font-medium text-white/95 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#4a9adb] hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="absolute inset-x-0 top-0 z-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0.25) 60%, transparent 100%)",
        }}
      />
      <div className="container-refined relative flex items-center justify-between py-6">
        <a
          href="#"
          className="drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          <Logo variant="light" size={36} />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#frameworks" className={linkClass}>Frameworks</a>
          <a href="#services" className={linkClass}>Engagements</a>
          <a href="#writing" className={linkClass}>Writing</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#contact" className="btn btn-ghost-light !py-2 !px-4 !text-sm">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}
