import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const CATEGORY_META = {
  plantation: {
    title: 'Plantation Works',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  landscape: {
    title: 'Landscape Development',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  specialized: {
    title: 'Specialized Services',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  maintenance: {
    title: 'Plant Supply & Maintenance',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
};

const DEFAULT_ICON = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18" />
  </svg>
);

const ServicesPage = () => {
  const { data } = useData();
  const { services, companyInfo } = data;

  const categoryKeys = Object.keys(services);
  const [activeTab, setActiveTab] = useState(categoryKeys[0] || 'plantation');

  const tabs = categoryKeys.map((key) => ({
    key,
    label: CATEGORY_META[key]?.title || key.charAt(0).toUpperCase() + key.slice(1),
    icon: CATEGORY_META[key]?.icon || DEFAULT_ICON,
  }));

  const activeServices = services[activeTab] || [];
  const currentTabMeta = CATEGORY_META[activeTab] || { icon: DEFAULT_ICON, title: activeTab };

  const yearsExp = companyInfo?.established_year
    ? new Date().getFullYear() - parseInt(companyInfo.established_year)
    : 17;

  return (
    <main className="pt-20">
      {/* Header */}
      <header className="max-w-[1280px] mx-auto px-6 pt-16 pb-12 text-center">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
          Our Expertise
        </span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#012d1d', letterSpacing: '-0.02em', marginBottom: '20px' }}>
          Landscape &amp; Horticultural Services
        </h1>
        <p className="max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
          Elevating environments through meticulous botanical artistry and sustainable landscape engineering. Our services bridge the gap between architectural precision and organic beauty.
        </p>
      </header>

      {/* Tab Navigation */}
      {tabs.length > 0 && (
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 pb-4" style={{ borderBottom: '1px solid rgba(193,200,194,0.3)' }}>
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '8px 16px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: activeTab === key ? '#755b00' : '#414844',
                  borderBottom: activeTab === key ? '2px solid #755b00' : '2px solid transparent',
                  marginBottom: '-1px',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Service Cards */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        {categoryKeys.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full border-4 mb-4" style={{ width: '40px', height: '40px', borderColor: '#e8e2d9', borderTopColor: '#755b00' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973' }}>Loading services…</p>
          </div>
        ) : activeServices.length === 0 ? (
          <div className="text-center py-16">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#717973' }}>No services listed in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col rounded-xl service-card overflow-hidden"
                style={{ background: '#ffffff', boxShadow: '0 20px 40px -15px rgba(1,45,29,0.06)', border: '1px solid rgba(193,200,194,0.15)' }}
              >
                {service.image_url && (
                  <div className="w-full overflow-hidden flex-shrink-0" style={{ height: '180px' }}>
                    <img src={service.image_url} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-8">
                <div
                  className="flex items-center justify-center rounded-full mb-6 flex-shrink-0"
                  style={{ width: '56px', height: '56px', background: 'rgba(1,45,29,0.08)', color: '#012d1d' }}
                >
                  {currentTabMeta.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 500, color: '#012d1d', marginBottom: '12px', lineHeight: 1.3 }}>
                  {service.name}
                </h3>
                {service.description && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#414844', flex: 1, marginBottom: '20px' }}>
                    {service.description}
                  </p>
                )}
                <div className="botanical-divider mb-5" />
                <Link
                  to="/contact"
                  className="flex items-center gap-2 group"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', color: '#755b00', textDecoration: 'none' }}
                >
                  Enquire about this service
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bento Feature Section */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ minHeight: '480px' }}>
          <div className="md:col-span-8 relative overflow-hidden rounded-xl" style={{ minHeight: '360px' }}>
            <img
              src="/images/Other%20images/landscape%20development.png"
              alt="Large scale landscape development"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="absolute inset-0 items-center justify-center hidden"
              style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }}
            />
            <div className="absolute inset-0 flex items-end p-10" style={{ background: 'linear-gradient(to top, rgba(1,45,29,0.65), transparent)' }}>
              <div style={{ color: '#ffffff' }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, marginBottom: '12px' }}>Large Scale Development</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.6, maxWidth: '500px', opacity: 0.9 }}>
                  From initial grading to final sculptural planting, we manage the transformation of raw land into curated estates.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="rounded-xl flex flex-col justify-center p-8" style={{ background: '#012d1d' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#ffe08f', display: 'block', marginBottom: '8px' }}>
                {yearsExp}+
              </span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#86af99' }}>
                Years of Experience
              </p>
            </div>
            <div className="rounded-xl flex flex-col justify-center p-8" style={{ background: '#fed977' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#755b00', display: 'block', marginBottom: '8px' }}>
                {companyInfo?.area_acres ? `${companyInfo.area_acres}` : '20'} Acres
              </span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#785d00' }}>
                Nursery Coverage
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
