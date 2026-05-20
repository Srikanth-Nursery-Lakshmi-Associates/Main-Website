import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const AboutPage = () => {
  const { data } = useData();
  const { companyInfo } = data;

  const companies = [
    {
      key: 'srikanth',
      name: 'Srikanth Nursery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      desc: companyInfo?.about || 'Founded in the early 1990s, Srikanth Nursery began as a specialized botanical collection focused on exotic tropical flora. Today, it stands as one of the region\'s largest nursery hubs, supplying mature trees and rare specimens to premium developers across the country. Our focus remains on sustainability and the preservation of native biodiversity.',
      stats: [
        { value: '30+', label: 'Years Excellence' },
        { value: '500+', label: 'Plant Species' },
      ],
    },
    {
      key: 'lakshmi',
      name: 'Lakshmi Associates',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      desc: companyInfo?.lakshmi_description || 'Lakshmi Associates was established to bridge the gap between architectural vision and botanical reality. Specializing in hardscaping, irrigation engineering, and site planning, our team of landscape architects ensures that every project is a structural masterpiece as much as it is a natural one.',
      stats: [
        { value: '200+', label: 'Projects Delivered' },
        { value: '15', label: 'Design Awards' },
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Split */}
      <section className="max-w-[1280px] mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-7">
          <div className="space-y-3">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase' }}>
              Our Heritage
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#012d1d', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Cultivating Landscapes,<br />Shaping Legacies.
            </h1>
          </div>
          <div className="editorial-line w-20" />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#414844' }}>
            {companyInfo?.about || 'For over three decades, the names Srikanth Nursery and Lakshmi Associates have been synonymous with horticultural excellence and architectural landscape mastery. Our journey began with a simple passion for the earth, evolving into a multidisciplinary powerhouse that serves the nation\'s most prestigious residential and commercial estates.'}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.7, color: '#717973' }}>
            We don't just plant trees; we curate living environments. Our synergy between botanical expertise and structural design allows us to create outdoor sanctuaries that grow in beauty and value with every passing season.
          </p>
        </div>

        <div className="relative h-[480px] lg:h-[600px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Luxury Landscape Design"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ border: '24px solid rgba(252,249,244,0.15)' }} />
        </div>
      </section>

      {/* Company Cards */}
      <section style={{ background: '#f6f3ee' }} className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {companies.map((company) => (
              <div
                key={company.key}
                className="rounded-xl space-y-5"
                style={{ background: '#ffffff', padding: '48px', boxShadow: '0 20px 40px -15px rgba(1,45,29,0.06)', border: '1px solid rgba(193,200,194,0.2)' }}
              >
                <div className="flex items-center gap-4">
                  <div style={{ color: '#755b00' }}>{company.icon}</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 500, color: '#012d1d' }}>
                    {company.name}
                  </h2>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#414844' }}>
                  {company.desc}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {company.stats.map((stat) => (
                    <div key={stat.label} className="pl-4" style={{ borderLeft: '2px solid #755b00' }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 600, color: '#755b00' }}>{stat.value}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#414844', marginTop: '2px' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1280px] mx-auto px-6 py-24 lg:py-32">
        <div className="text-center mb-16 space-y-3">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase' }}>Our Purpose</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#012d1d' }}>Grounded in Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex gap-6 group">
            <div
              className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(254,217,119,0.2)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(254,217,119,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(254,217,119,0.2)')}
            >
              <svg className="w-9 h-9" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 500, color: '#012d1d' }}>Our Vision</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#414844' }}>
                {companyInfo?.vision || 'To be the global benchmark for luxury landscaping, where every garden we design serves as a timeless sanctuary that harmonizes human habitat with the natural world, fostering peace and ecological balance for generations.'}
              </p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div
              className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(254,217,119,0.2)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(254,217,119,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(254,217,119,0.2)')}
            >
              <svg className="w-9 h-9" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 500, color: '#012d1d' }}>Our Mission</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#414844' }}>
                {companyInfo?.mission || 'We are committed to delivering uncompromising quality through scientific horticultural practices and innovative landscape engineering. We strive to exceed client expectations by blending artistic creativity with environmental stewardship.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-24" style={{ background: '#012d1d' }}>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /></svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10 space-y-6">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#ffffff' }}>
            Ready to transform your sanctuary?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', maxWidth: '560px', margin: '0 auto' }}>
            Let us bring the vision of your perfect landscape to life with our expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Link
              to="/contact"
              style={{ background: '#755b00', color: '#ffffff', padding: '14px 40px', borderRadius: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fed977')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#755b00')}
            >
              Start a Project
            </Link>
            <Link
              to="/projects"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff', padding: '14px 40px', borderRadius: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
