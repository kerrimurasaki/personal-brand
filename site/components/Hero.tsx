export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#09090b]">
      {/* TODO: replace with your own photographic hero */}
      <img
        src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2400&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-refined flex min-h-[100svh] flex-col justify-end pb-24 pt-40 md:pb-32">
        <p className="eyebrow rise rise-1 !text-[#d4b896]">
          Cognitive Effort · Assessment · AI Literacy
        </p>
        <h1 className="rise rise-2 mt-6 max-w-4xl !text-white">
          Output is no longer a reliable signal of capability.
        </h1>
        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
          I help educators, L&amp;D leaders, and operators preserve the cognitive effort
          that AI assistance can quietly replace. Start with a 10-minute diagnostic that
          maps where a learner or professional sits across the dimensions AI cannot replicate.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <a href="#spectrum" className="btn btn-brand">Take the S+A Spectrum</a>
          <a href="#frameworks" className="btn btn-ghost-light">Read the frameworks →</a>
        </div>
      </div>
    </section>
  );
}
