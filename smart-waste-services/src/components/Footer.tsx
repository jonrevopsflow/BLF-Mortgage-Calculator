import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

const counties = [
  'Marion', 'Lake', 'Volusia', 'Polk',
  'Citrus', 'Orange', 'Sumter', 'Seminole',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f3320' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e6b3c' }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-heading font-bold text-sm">Smart Waste Service</div>
                <div className="text-xs text-green-300">LLC</div>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5">
              Central Florida's trusted commercial grease trap cleaning and cooking oil
              recycling specialists.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-green-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-green-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-green-300 mb-4">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {counties.map(county => (
                <span key={county} className="text-sm text-green-100">
                  {county} Co.
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-green-300 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:3527060410" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors">
                <Phone size={15} style={{ color: '#4db87a' }} />
                352-706-0410
              </a>
              <a href="mailto:info@SmartWasteService.com" className="flex items-center gap-3 text-sm text-green-100 hover:text-white transition-colors break-all">
                <Mail size={15} style={{ color: '#4db87a' }} />
                info@SmartWasteService.com
              </a>
              <div className="flex items-start gap-3 text-sm text-green-100">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#4db87a' }} />
                <span>
                  2405 US-441, Suite 6<br />
                  Fruitland Park, FL 34731
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-300">
          <span>© {new Date().getFullYear()} Smart Waste Service, LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
