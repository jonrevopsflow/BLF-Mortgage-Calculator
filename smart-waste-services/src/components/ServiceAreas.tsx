import { MapPin } from 'lucide-react';

const counties = [
  'Marion County',
  'Lake County',
  'Volusia County',
  'Polk County',
  'Citrus County',
  'Orange County',
  'Sumter County',
  'Seminole County',
];

export default function ServiceAreas() {
  return (
    <section className="py-16" style={{ backgroundColor: '#1e6b3c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="text-white lg:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} style={{ color: '#4db87a' }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#4db87a' }}>
                Service Coverage
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Proudly Serving Central Florida
            </h2>
            <p className="text-green-100 text-sm leading-relaxed">
              Based in Fruitland Park, FL, we cover eight counties across Central Florida
              to keep your commercial kitchen running clean and compliant.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {counties.map(county => (
              <div
                key={county}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                <MapPin size={14} style={{ color: '#4db87a' }} />
                {county}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
