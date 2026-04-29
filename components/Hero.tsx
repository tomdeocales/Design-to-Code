export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(26,26,14,0.7) 0%, rgba(26,26,14,0.5) 40%, rgba(26,26,14,0.85) 100%), url("/hero-family.jpg") center/cover no-repeat',
      }}
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 pt-44">
        {/* Star badge */}
        <p className="star-text text-gold tracking-[0.3em] uppercase font-body mb-8 opacity-90">
          ★ Led By Board Certified Specialists In Family Law ★
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight mb-6">
          Your Future
          <br />
          <em className="italic">Starts Here</em>
        </h1>

        <div className="w-16 h-px bg-gold mx-auto my-6" />

        <p className="text-text-light font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-3 tracking-wide">
          Divorce &amp; Family Law Attorneys Serving Durham, Raleigh, Cary,
          <br className="hidden md:block" /> the Triangle, and Throughout North Carolina.
        </p>

        <p className="star-text text-gold tracking-[0.25em] uppercase font-body mb-10 opacity-80">
          ★ Led By Board Certified Specialists In Family Law ★
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:9196269148" className="btn-outline-light w-full sm:w-auto text-center">
            Call Now
          </a>
          <a href="#contact" className="btn-gold w-full sm:w-auto text-center">
            Schedule a Consultation
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  )
}
