const categoryMeta = {
  plantation: {
    title: 'Plantation Works',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m-8-8H3m18 0h-2M6.34 6.34l-.7-.7M18.36 18.36l-.7-.7M6.34 17.66l-.7.7M18.36 5.64l-.7.7M12 7a5 5 0 100 10A5 5 0 0012 7z" />
      </svg>
    ),
    img: '/images/Other images/plantation works.png',
  },
  landscape: {
    title: 'Landscape Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    img: '/images/Other images/landscape development.png',
  },
  specialized: {
    title: 'Specialized Services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    img: '/images/Other images/specialized services.png',
  },
  maintenance: {
    title: 'Plant Supply & Maintenance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    img: '/images/Other images/plant supply and maintenance.png',
  },
};

const Services = ({ services }) => {
  return (
    <section id="services" className="relative overflow-hidden" style={{ background: '#fcf9f4' }}>
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 pt-24 pb-16 text-center">
        <span
          className="block mb-4 uppercase"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00' }}
        >
          Our Expertise
        </span>
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2 }}
        >
          Landscape &amp; Horticultural Services
        </h2>
        <p
          className="max-w-2xl mx-auto mt-6"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}
        >
          Elevating environments through meticulous botanical artistry and sustainable landscape engineering.
        </p>
      </div>

      {/* Service cards */}
      <div className="max-w-[1280px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([category, serviceList]) => {
            const meta = categoryMeta[category] || {
              title: category,
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18" />
                </svg>
              ),
              img: '/images/Other images/landscape development.png',
            };

            return (
              <div
                key={category}
                className="service-card flex flex-col rounded-xl border luxury-shadow"
                style={{ background: '#ffffff', borderColor: 'rgba(193,200,194,0.15)' }}
              >
                {/* Card icon header */}
                <div className="p-8 pb-6">
                  <div
                    className="flex items-center justify-center rounded-full mb-6"
                    style={{ width: '56px', height: '56px', background: 'rgba(1,45,29,0.08)', color: '#012d1d' }}
                  >
                    {meta.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 500, color: '#012d1d', lineHeight: 1.3, marginBottom: '12px' }}
                  >
                    {meta.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844', marginBottom: '24px', flexGrow: 1 }}>
                    {serviceList.length} service{serviceList.length !== 1 ? 's' : ''} — from planning to execution
                  </p>
                  <div className="botanical-divider" style={{ margin: '0 0 24px' }} />
                </div>

                {/* Service list */}
                <div className="px-8 pb-8 flex-grow space-y-3">
                  {serviceList.slice(0, 5).map((service) => (
                    <div key={service.id} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 rounded-full" style={{ width: '5px', height: '5px', background: '#755b00' }} />
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#1c1c19' }}>{service.name}</p>
                        {service.description && (
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#717973', lineHeight: 1.4, marginTop: '2px' }}>
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  {serviceList.length > 5 && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#755b00', marginTop: '8px' }}>
                      + {serviceList.length - 5} more services
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="px-8 pb-8">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 group"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#755b00', textDecoration: 'none' }}
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured bento */}
      <div style={{ background: '#f6f3ee' }} className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-6" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="md:col-span-8 relative overflow-hidden rounded-xl img-zoom" style={{ minHeight: '400px' }}>
              <img
                src="/images/Other images/landscape development.png"
                alt="Large Scale Development"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-end p-12" style={{ background: 'linear-gradient(to top, rgba(1,45,29,0.6), transparent)' }}>
                <div style={{ color: '#ffffff' }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 600, marginBottom: '12px' }}>Large Scale Development</h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, maxWidth: '500px', opacity: 0.9 }}>
                    From initial grading to final sculptural planting, we manage the transformation of raw land into curated estates.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-xl flex flex-col justify-center p-8 text-white" style={{ background: '#012d1d' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>17+</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.8 }}>YEARS OF EXPERIENCE</p>
              </div>
              <div className="rounded-xl flex flex-col justify-center p-8" style={{ background: '#fed977' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#755b00', display: 'block', marginBottom: '8px' }}>200+</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', color: '#785d00', opacity: 0.8 }}>PROJECTS COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
