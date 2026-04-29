const steps = [
  {
    number: '01',
    title: 'Consult',
    desc: 'When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior level attorney to tell your story.',
  },
  {
    number: '02',
    title: 'Match',
    desc: 'We take care to match you with the attorney at our firm who can be of the most help in your unique situation. From there, you will work with one lawyer for the duration of your case.',
  },
  {
    number: '03',
    title: 'Advocate',
    desc: 'We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you face the future from a position of strength and hope.',
  },
]

export default function Process() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Our Approach</p>
          <h2 className="section-title text-dark">Close Attention To What You Need</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-px bg-gold/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-gold bg-cream flex items-center justify-center z-10 relative group-hover:bg-gold transition-colors duration-300">
                    <span className="font-serif text-gold text-2xl group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                  {/* Arrow between circles (hidden on first step) */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 -translate-y-1/2 z-20">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-dark text-2xl mb-3">{step.title}</h3>
                <p className="text-dark/60 font-body text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#about" className="btn-gold">
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  )
}
