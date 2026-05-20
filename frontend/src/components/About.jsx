const About = ({ companyInfo }) => {
  const companies = [
    {
      name: 'Srikanth Nursery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 0v18M3 12h18" />
        </svg>
      ),
      facts: [
        'Established in 2008 in Hyderabad, Telangana',
        'Spread across 20 acres with 500+ plant species',
        'Specialized in plant cultivation and premium landscaping',
      ],
      stats: [
        { value: '17+', label: 'Years Excellence' },
        { value: '500+', label: 'Plant Species' },
      ],
    },
    {
      name: 'Lakshmi Associates',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      facts: [
        'Established in 2013 as sister concern',
        'Specialises in project execution & hardscaping',
        'Handles business activities and client management',
      ],
      stats: [
        { value: '200+', label: 'Projects Delivered' },
        { value: '15', label: 'Design Awards' },
      ],
    },
  ];

  return (
    <section id="about" style={{ background: '#fcf9f4' }} className="relative overflow-hidden">
      {/* Heritage intro */}
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative img-zoom">
            <img
              src="/images/Other images/nursery image.jpg"
              alt="Srikanth Nursery"
              className="w-full object-cover rounded-xl"
              style={{ height: '560px' }}
            />
            <div
              className="absolute -bottom-8 -right-8 p-8 hidden md:block rounded"
              style={{ background: '#012d1d', width: '220px' }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff', fontSize: '22px', fontWeight: 600, lineHeight: 1.3 }}>
                Three Decades of Living Art
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div>
              <span
                className="block mb-4 uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00' }}
              >
                Our Heritage
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, lineHeight: 1.2, color: '#012d1d' }}
              >
                Nurturing Nature,<br />Designing Legacies
              </h2>
            </div>

            <div className="editorial-line w-24" />

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
              {companyInfo?.about ||
                'Since its inception, Srikanth Nursery & Lakshmi Associates has been at the forefront of India\'s green revolution. What began as a passionate pursuit of horticultural perfection has evolved into a full-scale landscape architecture powerhouse.'}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844' }}>
              We don't just plant trees; we curate ecosystems. Our legacy is built on the foundation of technical precision and artistic vision, serving premium developers, luxury estates, and government bodies with an unwavering commitment to sustainability.
            </p>

            <a
              href="#contact"
              className="inline-block transition-all duration-300"
              style={{
                border: '1px solid #755b00',
                color: '#755b00',
                padding: '12px 32px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#755b00'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#755b00'; }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Company cards */}
      <div style={{ background: '#f6f3ee' }} className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {companies.map((co) => (
              <div
                key={co.name}
                className="luxury-shadow rounded-xl border space-y-6"
                style={{ background: '#ffffff', padding: '48px', borderColor: 'rgba(193,200,194,0.2)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ width: '56px', height: '56px', background: 'rgba(1,45,29,0.08)', color: '#012d1d' }}
                  >
                    {co.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 500, color: '#012d1d', lineHeight: 1.3 }}>
                    {co.name}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {co.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 rounded-full" style={{ width: '6px', height: '6px', background: '#755b00', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844' }}>{fact}</span>
                    </li>
                  ))}
                </ul>

                <div className="botanical-divider" style={{ margin: '16px 0' }} />

                <div className="grid grid-cols-2 gap-6 pt-2">
                  {co.stats.map((stat) => (
                    <div key={stat.label} className="pl-4" style={{ borderLeft: '2px solid #755b00' }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 500, color: '#755b00' }}>{stat.value}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="text-center mb-20 space-y-4">
          <span
            className="block uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00' }}
          >
            Our Purpose
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2 }}>
            Grounded in Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {[
            {
              title: 'Our Vision',
              text: companyInfo?.vision ||
                'To be the global benchmark for luxury landscaping, where every garden we design serves as a timeless sanctuary that harmonizes human habitat with the natural world, fostering peace and ecological balance for generations.',
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
            },
            {
              title: 'Our Mission',
              text: companyInfo?.mission ||
                'We are committed to delivering uncompromising quality through scientific horticultural practices and innovative landscape engineering. We strive to exceed client expectations by blending artistic creativity with environmental stewardship.',
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-8 group">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                style={{ width: '80px', height: '80px', background: 'rgba(254,217,119,0.3)', color: '#755b00' }}
              >
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 500, color: '#012d1d', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0" style={{ background: '#012d1d' }}>
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="currentColor">
              <path d="M200 10 C200 10 380 100 380 200 C380 300 300 390 200 390 C100 390 20 300 20 200 C20 100 200 10 200 10Z" opacity="0.5" />
            </svg>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>
            Ready to transform your sanctuary?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', maxWidth: '600px', margin: '0 auto' }}>
            Let us bring the vision of your perfect landscape to life with our expertise and passion.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#contact"
              className="rounded-lg transition-all duration-300"
              style={{
                background: '#755b00',
                color: '#ffffff',
                padding: '12px 32px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fed977')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#755b00')}
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="rounded-lg transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#ffffff',
                padding: '12px 32px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
