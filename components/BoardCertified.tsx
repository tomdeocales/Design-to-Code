export default function BoardCertified() {
  return (
    <section className="bg-cream py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Badge / Seal */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Outer circle */}
              <div className="w-96 h-96 rounded-full border-4 border-gold flex items-center justify-center bg-dark shadow-2xl">
                <div className="w-72 h-72 rounded-full border-2 border-gold/40 flex flex-col items-center justify-center text-center px-6">
                  {/* Check icon */}
                  <div className="w-28 h-28 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-6">
                    <svg className="w-14 h-14 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-body font-bold leading-tight">
                    Board
                    <br />
                    Certified
                  </p>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-gold/20 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-gold/10 pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label">Certified Specialists</p>
            <h2 className="section-title text-dark leading-tight">
              Caring Representation Led By{' '}
              <em className="italic text-gold">Board-Certified Specialists</em>
            </h2>
            <div className="divider-gold" />
            <p className="text-dark/70 font-body text-sm leading-relaxed mb-4">
              When you are facing a divorce or another family law challenge in the Triangle area,
              it can seem like the world is falling apart around you. At Deer Designer Family Law,
              P.L.L.C., we understand the turmoil you are going through, and we are committed to
              guiding you toward the best resolution possible.
            </p>
            <p className="text-dark/70 font-body text-sm leading-relaxed mb-8">
              Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne, both
              specialists with a board certification in family law from the North Carolina State
              Board of Legal Specialization, and includes other board certified family law
              specialists as well.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-gold text-[10px] tracking-[0.2em] uppercase font-body font-bold border border-gold px-6 py-3 hover:bg-gold hover:text-white transition-colors"
            >
              What Does It Mean To Be A Certified Family Law Specialist?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
