'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <a href="#" className="text-text-light hover:text-gold transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-text-light hover:text-gold transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-text-light hover:text-gold transition-colors" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:9196269148" className="text-text-light text-xs font-body tracking-wider hover:text-gold transition-colors">
              Call 919-626-9148
            </a>
            <a href="#contact" className="btn-gold py-1.5 px-4 text-[10px]">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {/* Deer silhouette SVG */}
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 60 60">
                <path d="M30 5 C28 5 27 7 27 9 C26 8 24 8 23 9 C22 10 22 12 23 13 C21 12 20 13 20 14 C20 16 21 17 23 17 C22 19 22 21 24 22 L24 28 C22 30 20 33 20 37 L20 52 C20 53 21 54 22 54 C23 54 24 53 24 52 L24 42 C25 41 26 41 27 41 L27 52 C27 53 28 54 29 54 C30 54 31 53 31 52 L31 41 C32 41 33 41 34 42 L34 52 C34 53 35 54 36 54 C37 54 38 53 38 52 L38 37 C38 33 36 30 34 28 L34 22 C36 21 37 19 36 17 C38 17 39 16 39 14 C39 13 38 12 36 13 C37 12 38 10 37 9 C36 8 34 8 33 9 C33 7 32 5 30 5 Z" />
              </svg>
              <div>
                <div className="text-white font-serif text-base leading-tight tracking-wide">Deer Designer</div>
                <div className="text-gold text-[9px] tracking-[0.2em] uppercase font-body">Family Law, P.L.L.C.</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {['About', 'Family Law', 'Estate Planning', 'Testimonials', 'Resources', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link text-text-light text-[11px] tracking-[0.15em] uppercase font-body hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-2 border-t border-white/10 px-6 py-4">
          {['About', 'Family Law', 'Estate Planning', 'Testimonials', 'Resources', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block text-text-light text-[11px] tracking-[0.15em] uppercase font-body py-3 border-b border-white/5 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
