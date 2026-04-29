'use client'

import { useEffect, useState } from 'react'

const testimonials = [
  {
    category: 'Divorce',
    author: 'Mary',
    text: "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her. The entire Deer Designer Family Law team — from Autumn to paralegals to office staff — consistently goes above and beyond for their clients. I can't recommend Autumn and Deer Designer Family Law enough. Thank you!",
  },
  {
    category: 'Family',
    author: 'David and Pam',
    text: "We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in a very difficult family issue and we have been more than satisfied. The firm is extremely knowledgeable about family law and has consistently conducted themselves with the utmost professionalism. We would not think of going into a courtroom without them.",
  },
  {
    category: 'Child Custody',
    author: 'Jennifer R.',
    text: "I was terrified going into my custody battle, but the team at Deer Designer made me feel heard from day one. They fought tirelessly for my children and the outcome was better than I ever hoped. Exceptional representation, exceptional people.",
  },
  {
    category: 'Domestic Violence',
    author: 'Anonymous',
    text: "When I was in crisis, Deer Designer Family Law responded immediately with compassion and decisive action. They secured my protective order quickly and walked me through every step. I felt safe and supported throughout the entire process.",
  },
  {
    category: 'Family',
    author: 'Robert M.',
    text: "The level of professionalism and care I received from this firm was extraordinary. They navigated a complex estate matter with skill and sensitivity. I would trust them with any family legal matter.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pauseUntil, setPauseUntil] = useState(0)
  const categories = [...new Set(testimonials.map((item) => item.category))]
  const activeCategory = testimonials[activeIndex]?.category

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (Date.now() < pauseUntil) return
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [pauseUntil])

  return (
    <section className="bg-dark py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-normal">
            Hear What Our Clients Have to Say
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Category Labels */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                const targetIndex = testimonials.findIndex((item) => item.category === category)
                if (targetIndex >= 0) {
                  setActiveIndex(targetIndex)
                  setPauseUntil(Date.now() + 15000)
                }
              }}
              className={`px-5 py-2 text-[10px] tracking-[0.2em] uppercase font-body font-bold transition-all ${
                activeCategory === category
                  ? 'bg-gold text-white'
                  : 'border border-white/20 text-text-light hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="w-full flex-shrink-0 px-1">
                <div className="max-w-3xl mx-auto bg-dark-2 border border-white/10 p-8 md:p-10 relative">
                  <div className="text-gold/20 mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-text-light font-body text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-gold" />
                      <span className="text-gold text-[11px] tracking-[0.15em] uppercase font-body font-bold">
                        {testimonial.author}
                      </span>
                    </div>
                    <span className="text-text-light/70 text-[10px] tracking-[0.2em] uppercase font-body">
                      {testimonial.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => {
                setActiveIndex(index)
                setPauseUntil(Date.now() + 15000)
              }}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? 'w-5 h-2 rounded-full bg-gold'
                  : 'w-2 h-2 rounded-full bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#testimonials" className="btn-outline-light">
            Read More Testimonials →
          </a>
        </div>
      </div>
    </section>
  )
}
