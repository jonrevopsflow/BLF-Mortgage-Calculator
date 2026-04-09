import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire this up to a backend / form service
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ backgroundColor: '#dcf5e7', color: '#1e6b3c' }}
          >
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ready to schedule service or have a question? Reach out — we respond quickly
            and never require a contract.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-2xl p-7 text-white"
              style={{ background: 'linear-gradient(135deg, #0f3320, #1e6b3c)' }}
            >
              <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5">
                <a href="tel:3527060410" className="flex items-start gap-4 group">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-green-200 mb-0.5">Phone / SMS</div>
                    <div className="font-semibold group-hover:underline">352-706-0410</div>
                  </div>
                </a>

                <a href="mailto:info@SmartWasteService.com" className="flex items-start gap-4 group">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-green-200 mb-0.5">Email</div>
                    <div className="font-semibold group-hover:underline break-all">
                      info@SmartWasteService.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-green-200 mb-0.5">Address</div>
                    <div className="font-medium text-sm leading-relaxed">
                      2405 US-441, Suite 6<br />
                      Fruitland Park, FL 34731
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-green-200 mb-0.5">Hours</div>
                    <div className="text-sm leading-relaxed">
                      Mon – Fri: 8:00 AM – 5:00 PM<br />
                      <span style={{ color: '#4db87a' }}>Emergency service available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                style={{ backgroundColor: '#f0faf4' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: '#dcf5e7' }}
                >
                  ✓
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': '#1e6b3c' } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your Restaurant, LLC"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@restaurant.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(352) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="grease-trap">Grease Trap Cleaning</option>
                    <option value="cooking-oil">Cooking Oil Recycling</option>
                    <option value="both">Both Services</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your business and service needs..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#1e6b3c' }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
