import { useEffect, useState } from 'react';

const Hero = ({ companyInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: 'ESTABLISHED', value: companyInfo?.established_year || '2008' },
    { label: 'ACRES COVERED', value: `${companyInfo?.area_acres || '20'}+` },
    { label: 'ANNUAL TURNOVER', value: companyInfo?.annual_turnover || '₹25 Cr' },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/Other%20images/hero%20image.jpg"
          alt="Luxury Estate Landscaping"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(1,45,29,0.4), rgba(1,45,29,0.72))' }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white max-w-4xl px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {companyInfo?.name || 'Srikanth Nursery & Lakshmi Associates'}
        </h1>

        <p
          className="mb-12 opacity-90 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, letterSpacing: '0.01em' }}
        >
          {companyInfo?.tagline ||
            'Crafting architectural living spaces through horticultural excellence and legacy-driven landscape design for discerning properties.'}
        </p>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#ffe08f',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  opacity: 0.7,
                  marginTop: '6px',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
