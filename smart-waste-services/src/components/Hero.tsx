export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f3320 0%, #1e6b3c 50%, #2d7a4f 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: '#4db87a' }}
      />
      <div
        className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full opacity-10"
        style={{ backgroundColor: '#4db87a' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ backgroundColor: 'rgba(77,184,122,0.2)', border: '1px solid rgba(77,184,122,0.4)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ backgroundColor: '#4db87a' }} />
          Serving Central Florida
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          A Smarter Way to Clean
          <br />
          <span style={{ color: '#4db87a' }}>Professional Cooking Oil Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Central Florida's trusted partner for grease trap cleaning and cooking oil recycling.
          Keeping your kitchen compliant, clean, and running smoothly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#4db87a', color: '#0f3320' }}
          >
            Get A Free Quote
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full text-base font-semibold border-2 border-white/40 hover:bg-white/10 transition-all"
          >
            Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '✓', label: 'No Contracts' },
            { icon: '⚡', label: 'Same-Day Service' },
            { icon: '♻', label: 'Eco-Friendly' },
            { icon: '★', label: 'Free Oil Containers' },
          ].map(badge => (
            <div key={badge.label} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                {badge.icon}
              </div>
              <span className="text-sm text-green-100 font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
