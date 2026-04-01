import { useEffect, useState } from 'react';

const Hero = ({ companyInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: 'Est.', value: companyInfo?.established_year || '2008', icon: '🌱' },
    { label: 'Area', value: `${companyInfo?.area_acres || '20'} Ac`, icon: '🌍' },
    { label: 'Turnover', value: companyInfo?.annual_turnover || '₹25 Cr', icon: '📈' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: 'url("/images/Other%20images/hero%20image.jpg")', transition: 'transform 8s ease-out' }}
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-green-900/60 to-emerald-800/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-green-400/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-emerald-300/10 blur-3xl animate-float delay-300" />

      {/* Leaf accent */}
      <div className="absolute top-20 right-20 text-6xl opacity-20 animate-leaf-drift hidden lg:block">🌿</div>
      <div className="absolute bottom-32 left-20 text-4xl opacity-15 animate-leaf-drift delay-500 hidden lg:block">🍃</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-200 text-sm font-medium tracking-wide">Est. 2008 · Hyderabad, Telangana</span>
          </div>

          {/* Headline */}
          <h1 className={`font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            {companyInfo?.name || (
              <>
                Srikanth Nursery<br />
                <span className="shimmer-text">&amp; Lakshmi Associates</span>
              </>
            )}
          </h1>

          {/* Tagline */}
          <p className={`text-xl sm:text-2xl text-green-100/90 font-light mb-4 tracking-wide transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {companyInfo?.tagline || 'Landscape Design · Plantations · Park Development'}
          </p>

          <p className={`text-base text-white/70 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transforming outdoor spaces into sustainable, breath-taking environments
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#projects"
              className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white text-base inline-flex items-center justify-center gap-2 group"
            >
              Explore Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-outline-white px-8 py-4 rounded-xl font-semibold text-white text-base inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>

          {/* Stat cards */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-8 py-5 min-w-[130px] group cursor-default"
                style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
              >
                <p className="text-3xl mb-1">{stat.icon}</p>
                <p className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-200">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
