"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-sm font-semibold text-[#09090b] hover:text-[#96734d] transition"
    : "text-sm font-semibold text-white hover:text-[#d4b896] transition drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]";

  const logoTextClass = scrolled
    ? "font-serif text-lg font-semibold tracking-tight text-[#09090b]"
    : "font-serif text-lg font-semibold tracking-tight text-white";

  return (
    <nav
      className={
        "fixed inset-x-0 top-0 z-20 transition-all duration-300" +
        (scrolled
          ? " bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : " bg-transparent")
      }
    >
      {!scrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-44"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,9,11,0.78) 0%, rgba(9,9,11,0.55) 40%, rgba(9,9,11,0.25) 75%, transparent 100%)",
          }}
        />
      )}
      <div className="container-refined relative grid grid-cols-2 items-center py-6 md:grid-cols-3">
        {/* Left: icon + wordmark */}
        <a
          href="#"
          className={
            "flex items-center gap-2.5 transition-all duration-300" +
            (scrolled ? "" : " drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]")
          }
          aria-label="Kerri Murasaki — home"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full font-serif text-base font-semibold"
            style={{
              background: "var(--bg-brand)",
              color: "#0a0a0c",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            K
          </span>
          <span className={logoTextClass}>Kerri Murasaki</span>
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
