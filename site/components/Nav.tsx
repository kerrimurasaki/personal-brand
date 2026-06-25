export default function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-20">
      <div className="container-refined flex items-center justify-between py-6">
        <a href="#" className="font-serif text-lg font-semibold text-white tracking-tight">
          Kerri Murasaki
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-sm text-white/80 hover:text-white transition">Work</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
          <a href="#writing" className="text-sm text-white/80 hover:text-white transition">Writing</a>
          <a href="#talks" className="text-sm text-white/80 hover:text-white transition">Talks</a>
          <a href="#contact" className="btn btn-ghost-light !py-2 !px-4 !text-sm">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}
