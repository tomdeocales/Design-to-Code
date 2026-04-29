'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setName('')
    setEmail('')
  }

  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            <p className="section-label">Newsletter Signup</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-2 leading-tight">
              Ex Files featuring{' '}
              <em className="italic text-gold">Pour Decisions</em>
            </h2>
            <div className="divider-gold" />
            <ul className="space-y-3 mt-4">
              {[
                'Stay up to date on changes in North Carolina law',
                'Get specialist legal insights to your most pressing family law questions',
                'Access exclusive guides and resources you won\'t find anywhere else',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-dark/70 font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-dark/60 font-body text-sm mt-5 leading-relaxed italic">
              And for a fun twist: don&apos;t miss our &ldquo;Pour Decisions&rdquo; section,
              featuring wine tips from our lawyer-wine specialist Deer Designer!
            </p>
          </div>

          {/* Right: Form */}
          <div className="bg-transparent p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-cream-2 bg-[#f1ede6] px-4 py-3 text-sm font-body text-dark placeholder-dark/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-cream-2 bg-[#f1ede6] px-4 py-3 text-sm font-body text-dark placeholder-dark/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white py-3 text-xs tracking-[0.2em] uppercase font-body font-bold hover:bg-gold-dark transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
