import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const SERVICE_ICONS = {
  plantation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  ),
  landscape: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  specialized: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

const CATEGORY_META = {
  plantation: { title: 'Plantation Works', desc: 'Strategic planting of trees, shrubs, and specialty flora for avenues, estates, and urban green corridors.' },
  landscape: { title: 'Landscape Development', desc: 'Master planning, hardscaping, and softscaping for world-class residential and commercial properties.' },
  specialized: { title: 'Specialized Services', desc: 'Vertical green walls, theme parks, topiary, synthetic turf, and bespoke horticultural installations.' },
  maintenance: { title: 'Plant Supply & Maintenance', desc: 'Year-round care programs, irrigation management, and bulk plant supply from our nursery.' },
};

const HomePage = () => {
  const { data } = useData();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { companyInfo, services, projects } = data;

  const stats = [
    { label: 'ESTABLISHED', value: companyInfo?.established_year || '2008' },
    { label: 'ACRES COVERED', value: `${companyInfo?.area_acres || '500'}+` },
    { label: 'ANNUAL TURNOVER', value: companyInfo?.annual_turnover || '₹100Cr+' },
  ];

  const serviceEntries = Object.entries(services);
  const teaserServices = serviceEntries.length > 0
    ? serviceEntries.slice(0, 4).map(([key, list]) => ({
        key,
        title: CATEGORY_META[key]?.title || key.charAt(0).toUpperCase() + key.slice(1),
        desc: CATEGORY_META[key]?.desc || `${list.length} service${list.length !== 1 ? 's' : ''} available`,
        count: list.length,
      }))
    : Object.entries(CATEGORY_META).map(([key, meta]) => ({ key, title: meta.title, desc: meta.desc, count: null }));

  const featuredProjects = projects.filter(p => p.is_featured).slice(0, 3);
  const showcaseProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Other%20images/hero%20image.jpg"
            alt="Luxury Estate Landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(1,45,29,0.4), rgba(1,45,29,0.72))' }} />
        </div>

        <div
          className="relative z-10 text-center text-white max-w-4xl px-6 transition-all duration-700"
          style={{ opacity: isHeroVisible ? 1 : 0, transform: isHeroVisible ? 'translateY(0)' : 'translateY(32px)' }}
        >
          <h1
            className="mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {companyInfo?.name || 'Srikanth Nursery & Lakshmi Associates'}
          </h1>
          <p
            className="mb-12 mx-auto max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, opacity: 0.9 }}
          >
            {companyInfo?.tagline || 'Crafting architectural living spaces through horticultural excellence and legacy-driven landscape design for the world\'s most discerning properties.'}
          </p>

          <div className="grid grid-cols-3 gap-8 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            {stats.map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: '#ffe08f', lineHeight: 1.1 }}>{value}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.7, marginTop: '4px' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Legacy Intro */}
      <section className="py-24 lg:py-32" style={{ background: '#fcf9f4' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '600px', boxShadow: '0 32px 80px -16px rgba(1,45,29,0.2)' }}
                  alt="Botanical Excellence"
                />
                <div
                  className="absolute -bottom-8 -right-8 w-56 p-8 hidden md:block"
                  style={{ background: '#012d1d' }}
                >
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, color: '#ffffff', lineHeight: 1.3 }}>
                    Three Decades<br />of Living Art
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6 md:pl-8">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase' }}>
                Our Heritage
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2 }}>
                Nurturing Nature,<br />Designing Legacies
              </h2>
              <div className="editorial-line w-24" />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: 1.7, color: '#414844' }}>
                {companyInfo?.about || 'Since its inception, Srikanth Nursery & Lakshmi Associates has been at the forefront of India\'s green revolution. What began as a passionate pursuit of horticultural perfection has evolved into a full-scale landscape architecture powerhouse.'}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.7, color: '#717973' }}>
                We don't just plant trees; we curate ecosystems. Our legacy is built on the foundation of technical precision and artistic vision, serving premium hospitality giants, luxury real estate developers, and private estates.
              </p>
              <Link
                to="/about"
                style={{ display: 'inline-block', border: '1px solid #755b00', color: '#755b00', padding: '12px 32px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#755b00'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#755b00'; }}
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 lg:py-32" style={{ background: '#f6f3ee' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase' }}>
              Our Expertise
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2, marginTop: '16px' }}>
              Curated Landscape Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaserServices.map((service, i) => (
              <div
                key={service.key || i}
                className="group transition-all duration-500 border border-transparent hover:border-yellow-200"
                style={{ background: '#ffffff', padding: '32px', boxShadow: '0 20px 40px -15px rgba(1,45,29,0.06)' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(1,45,29,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(1,45,29,0.06)')}
              >
                <div className="mb-6" style={{ color: '#755b00' }}>
                  {SERVICE_ICONS[service.key] || SERVICE_ICONS.landscape}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 500, color: '#012d1d', marginBottom: '12px' }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#414844', marginBottom: '20px' }}>
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="flex items-center gap-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', color: '#755b00', textDecoration: 'none' }}
                >
                  LEARN MORE
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              style={{ display: 'inline-block', background: '#012d1d', color: '#ffffff', padding: '14px 40px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#012d1d')}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 lg:py-32" style={{ background: '#fcf9f4', overflowX: 'clip' }}>
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase' }}>Portfolio</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2, marginTop: '12px' }}>
              Landmarks of Green Innovation
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 pb-1"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#755b00', textDecoration: 'none', borderBottom: '2px solid #755b00' }}
          >
            Explore More Projects
          </Link>
        </div>

        {showcaseProjects.length > 0 ? (
          <>
            {/* Mobile: horizontal scroll */}
            <div ref={scrollRef} className="md:hidden flex overflow-x-auto pb-8 gap-6 px-6 no-scrollbar snap-x" style={{ scrollBehavior: 'smooth' }}>
              {showcaseProjects.map((project) => (
                <div key={project.id} className="min-w-[80vw] snap-center group cursor-pointer flex-shrink-0">
                  <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
                    {project.thumbnail_url ? (
                      <img src={project.thumbnail_url} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" style={{ willChange: 'transform' }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#ffffff', textAlign: 'center', padding: '0 24px' }}>{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(1,45,29,0.2)' }} />
                  </div>
                  <div className="mt-5">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#755b00' }}>
                      {project.type === 'government' ? 'Government' : 'Private Sector'}
                      {project.location && ` | ${project.location}`}
                    </span>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, color: '#012d1d', marginTop: '6px' }}>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: centered grid */}
            <div className="hidden md:grid grid-cols-3 gap-8 max-w-[1280px] mx-auto px-6">
              {showcaseProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
                    {project.thumbnail_url ? (
                      <img src={project.thumbnail_url} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" style={{ willChange: 'transform' }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#ffffff', textAlign: 'center', padding: '0 24px' }}>{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(1,45,29,0.2)' }} />
                  </div>
                  <div className="mt-5">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#755b00' }}>
                      {project.type === 'government' ? 'Government' : 'Private Sector'}
                      {project.location && ` | ${project.location}`}
                    </span>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, color: '#012d1d', marginTop: '6px' }}>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="hidden md:grid grid-cols-3 gap-8 max-w-[1280px] mx-auto px-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="rounded-xl" style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, #012d1d, #1b4332)' }} />
                <div className="mt-5">
                  <div style={{ height: '12px', background: '#e8e2d9', borderRadius: '4px', width: '40%', marginBottom: '8px' }} />
                  <div style={{ height: '20px', background: '#e8e2d9', borderRadius: '4px', width: '70%' }} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="md:hidden text-center mt-6 px-6">
          <Link
            to="/projects"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#755b00', textDecoration: 'none', borderBottom: '2px solid #755b00', paddingBottom: '4px' }}
          >
            Explore More Projects
          </Link>
        </div>
      </section>

      {/* Botanical CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#012d1d' }}>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
            <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
            Elevate Your Property with Horticultural Mastery
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', marginBottom: '48px', opacity: 0.9 }}>
            Partner with India's leading landscaping associates to transform your space into a living masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              style={{ background: '#755b00', color: '#ffffff', padding: '14px 40px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fed977')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#755b00')}
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/contact"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff', padding: '14px 40px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
