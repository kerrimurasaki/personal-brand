import Logo from "./Logo";

export default function Nav() {
  const linkClass =
    "text-sm font-medium transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[color:var(--fg-brand)] hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.72)", borderBottom: "1px solid var(--border-default-subtle)" }}>
      <div className="container-refined relative flex items-center justify-between py-4">
        <a href="#">
          <Logo size={28} />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#frameworks" className={linkClass} style={{ color: "var(--fg-heading)" }}>Frameworks</a>
          <a href="#services" className={linkClass} style={{ color: "var(--fg-heading)" }}>Engagements</a>
          <a href="#writing" className={linkClass} style={{ color: "var(--fg-heading)" }}>Writing</a>
          <a href="#about" className={linkClass} style={{ color: "var(--fg-heading)" }}>About</a>
          <a href="#contact" className="btn btn-pill btn-brand !py-2 !px-4 !text-sm">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}
