import { CheckCircle, Recycle, Droplets } from 'lucide-react';

const greaseTrapFeatures = [
  'Prevent costly backups and violations',
  'Quick, efficient service with minimal disruption',
  'Flexible scheduling around your business hours',
  'Specialized equipment for all trap sizes',
  'Full documentation & compliance records',
  'Preventative maintenance programs available',
];

const cookingOilFeatures = [
  'Complimentary collection containers provided',
  'Free pickup service for most facilities',
  'Safe, responsible oil transport & disposal',
  'High-volume facilities may receive rebates',
  'Eco-friendly recycling into biodiesel',
  'Scheduled or on-demand collection',
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ backgroundColor: '#dcf5e7', color: '#1e6b3c' }}
          >
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to Smart Waste Service, LLC
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your partner in responsible kitchen management. We specialize in commercial grease
            management for Central Florida's food service industry.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grease Trap Cleaning */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div
              className="p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #0f3320, #1e6b3c)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <Droplets size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Grease Trap Cleaning</h3>
              <p className="text-green-100 font-medium">Reliable Cleaning Service</p>
            </div>
            <div className="p-8 bg-white flex-1">
              <p className="text-gray-600 mb-6">
                Regular grease trap maintenance keeps your kitchen compliant with local
                regulations, prevents costly emergency repairs, and ensures uninterrupted
                business operations.
              </p>
              <ul className="space-y-3">
                {greaseTrapFeatures.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#1e6b3c' }} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1e6b3c' }}
              >
                Get A Quote
              </a>
            </div>
          </div>

          {/* Cooking Oil Recycling */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div
              className="p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #1e6b3c, #3a9c63)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <Recycle size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Cooking Oil Recycling</h3>
              <p className="text-green-100 font-medium">Florida Cooking Oil Solutions</p>
            </div>
            <div className="p-8 bg-white flex-1">
              <p className="text-gray-600 mb-6">
                We make used cooking oil disposal easy and eco-friendly. We provide free
                containers and typically offer complimentary collection — high-volume
                facilities may even receive payment or rebates.
              </p>
              <ul className="space-y-3">
                {cookingOilFeatures.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#3a9c63' }} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#3a9c63' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Who we serve */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#f0faf4' }}
        >
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Who We Serve</h3>
          <p className="text-gray-600 mb-5">
            We proudly serve commercial establishments throughout Central Florida — no residential service.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Restaurants', 'Hotels', 'Schools', 'Food Trucks', 'Supermarkets', 'Cafeterias', 'Catering Facilities'].map(type => (
              <span
                key={type}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: '#dcf5e7', color: '#1a4f30' }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
