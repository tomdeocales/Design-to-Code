const partners = [
  {
    name: 'Deer Designer',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Amanda C. Knight',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Autumn D. Osbourne',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
  },
]

export default function Partners() {
  return (
    <section className="bg-cream-2 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label">Our Team</p>
          <h2 className="section-title text-dark">Meet Our Partners</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
          <p className="text-dark/60 font-body text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            Get to know the experienced leaders guiding our firm with strength, strategy,
            and a commitment to exceptional client service.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner) => (
            <div key={partner.name} className="group">
              {/* Image */}
              <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent group-hover:from-dark/50 transition-colors" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="font-serif text-white text-xl mb-1">{partner.name}</h3>
                  <p className="text-gold-light text-[11px] tracking-[0.2em] uppercase font-body">{partner.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#about" className="btn-outline-gold">
            Meet All Attorneys →
          </a>
        </div>
      </div>
    </section>
  )
}
