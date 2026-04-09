import { ShieldCheck, Clock, ThumbsUp, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'No Contracts Required',
    description:
      'We believe in earning your business every visit. Set up maintenance schedules on your terms with no binding agreements.',
  },
  {
    icon: Clock,
    title: 'Emergency Same-Day Service',
    description:
      "Grease trap emergencies can't wait. We offer same-day and next-day emergency service to get your kitchen back up quickly.",
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Practices',
    description:
      "Used cooking oil is recycled into biodiesel fuel. We're committed to reducing environmental impact while keeping your kitchen clean.",
  },
  {
    icon: ThumbsUp,
    title: 'Prevention Over Reaction',
    description:
      'We emphasize regular preventative maintenance to save you money and avoid costly emergency repairs or health code violations.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div
              className="rounded-2xl p-10 text-white"
              style={{ background: 'linear-gradient(135deg, #0f3320, #1e6b3c)' }}
            >
              <div className="text-6xl font-extrabold font-heading opacity-20 mb-4">SWS</div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Central Florida's Commercial Kitchen Experts
              </h3>
              <p className="text-green-100 text-sm leading-relaxed mb-6">
                Smart Waste Service, LLC is based in Fruitland Park, FL and has been
                serving Central Florida's food service industry with professional,
                reliable, and eco-conscious waste management solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '8', label: 'Counties Served' },
                  { value: '24/7', label: 'Emergency Line' },
                  { value: '100%', label: 'Commercial Focus' },
                  { value: '$0', label: 'Contract Required' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="font-heading text-2xl font-extrabold" style={{ color: '#4db87a' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-green-100 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Accent box */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ backgroundColor: '#dcf5e7' }}
            />
          </div>

          {/* Right: Why choose us */}
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ backgroundColor: '#dcf5e7', color: '#1e6b3c' }}
            >
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Your Partner in Responsible Kitchen Management
            </h2>
            <p className="text-gray-600 mb-8">
              We understand the demands of running a food service business. That's why we offer
              flexible, no-hassle service that works around your schedule.
            </p>

            <div className="space-y-6">
              {reasons.map(reason => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#dcf5e7' }}
                  >
                    <reason.icon size={20} style={{ color: '#1e6b3c' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
