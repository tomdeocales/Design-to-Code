export default function Footer() {
  const quickLinks = ['About Us', 'Blog', 'Testimonials', 'Resources', 'Contact', 'Schedule a Consultation']
  const familyLaw = ['Divorce', 'High-Asset Divorce', 'Child Custody', 'Child Support', 'Property Division', 'Spousal Support', 'Prenuptial Agreements', 'Domestic Violence']
  const estatePlanning = ['Will and Trust', 'Power of Attorney']

  return (
    <footer className="bg-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Social */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="text-white font-serif text-xl mb-1">Deer Designer</div>
              <div className="text-gold text-[10px] tracking-[0.2em] uppercase font-body">Family Law, P.L.L.C.</div>
            </div>
            <p className="text-text-light/60 font-body text-xs leading-relaxed mb-6">
              Divorce &amp; Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,
              and Throughout North Carolina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-body font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-light/60 font-body text-xs hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Family Law */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-body font-bold mb-5">
              Family Law
            </h4>
            <ul className="space-y-2.5">
              {familyLaw.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-light/60 font-body text-xs hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Estate Planning */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-body font-bold mb-5">
              Estate Planning
            </h4>
            <ul className="space-y-2.5">
              {estatePlanning.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-light/60 font-body text-xs hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-light/40 font-body text-[10px] tracking-wider">
            © Deer Designer Family Law, P.L.L.C.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-light/40 font-body text-[10px] hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-light/40 font-body text-[10px] hover:text-gold transition-colors">
              Disclaimer
            </a>
          </div>
          <p className="text-text-light/30 font-body text-[10px]">
            Designed by Second Click Media
          </p>
        </div>
      </div>
    </footer>
  )
}
