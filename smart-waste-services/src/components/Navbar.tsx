import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e6b3c' }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-sm" style={{ color: '#1e6b3c' }}>Smart Waste Service</div>
              <div className="text-xs text-gray-500">LLC</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
                style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:3527060410"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1e6b3c' }}
          >
            <Phone size={15} />
            352-706-0410
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 mt-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:3527060410"
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: '#1e6b3c' }}
            >
              <Phone size={15} />
              352-706-0410
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
