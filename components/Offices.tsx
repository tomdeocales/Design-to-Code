const offices = [
  {
    city: 'Durham Office',
    address: '3511 Shannon Road Suite 150',
    cityState: 'Durham, NC, 27707',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    city: 'Cary Office',
    address: '201 Shannon Oaks Circle Suite 100',
    cityState: 'Cary, NC, 27511',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    city: 'Wake Forest Office',
    address: '1740 Heritage Center Drive Suite 202',
    cityState: 'Wake Forest, NC, 27587',
    image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=600&q=80',
  },
  {
    city: 'Pittsboro Office',
    address: '27 Hillsboro Street',
    cityState: 'Pittsboro, NC, 27312',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  },
]

export default function Offices() {
  return (
    <section className="bg-dark-2 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office) => (
            <div key={office.city} className="group relative overflow-hidden">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-colors" />
              </div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="mb-1">
                  <svg className="w-5 h-5 text-gold mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-white text-lg mb-1">{office.city}</h3>
                <p className="text-text-light/80 font-body text-xs leading-relaxed">
                  {office.address}
                  <br />
                  {office.cityState}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
