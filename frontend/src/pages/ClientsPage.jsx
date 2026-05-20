import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const ClientsPage = () => {
  const { data } = useData();
  const { clients } = data;

  const governmentClients = clients.filter((c) => c.type === 'government');
  const privateClients = clients.filter((c) => c.type === 'private');

  return (
    <main className="pt-20">
      {/* Hero Header */}
      <header className="py-20 lg:py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            Distinguished Partnerships
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#012d1d', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Our Valued Clients
          </h1>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
            From expansive government infrastructure projects to bespoke corporate landscape solutions, we have been the trusted partner for premium greenery and sustainable landscaping for over three decades.
          </p>
          <div className="botanical-divider max-w-xs mx-auto mt-12" />
        </div>
      </header>

      {/* Marquee Client Feature */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center rounded-xl p-8 md:p-14 relative overflow-hidden" style={{ background: '#ffffff', boxShadow: '0 20px 50px -10px rgba(1,45,29,0.08)' }}>
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#012d1d' }}>
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              </svg>
            </div>
            <div className="relative z-10 space-y-6">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#ffe08f', background: '#012d1d', padding: '4px 12px', borderRadius: '4px', display: 'inline-block' }}>
                Marquee Partnership
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2 }}>
                The Grand Metropolitan Green Corridor
              </h2>
              <blockquote
                className="pl-6"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '18px', lineHeight: 1.6, color: '#414844', borderLeft: '4px solid #755b00' }}
              >
                "Srikanth Nursery transformed our urban concrete landscape into a living, breathing ecosystem. Their commitment to plant health and architectural precision is unmatched in the industry."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#fed977' }}>
                  <svg className="w-6 h-6" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#012d1d' }}>Dr. Arvind Kumar</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#717973' }}>Director of Urban Development</p>
                </div>
              </div>
            </div>
            <div className="h-[420px] rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Urban landscape project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(1,45,29,0.35), transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Client Grid */}
      <section className="py-20 lg:py-24" style={{ background: '#f6f3ee' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Government Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid #c1c8c2' }}>
                <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: '40px', height: '40px', background: '#012d1d' }}>
                  <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M9 10v11M15 10v11" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 500, color: '#012d1d' }}>Public &amp; Government</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {governmentClients.map((client) => (
                  <div
                    key={client.id}
                    className="group rounded-lg border transition-all duration-300 hover:-translate-y-1 p-7"
                    style={{ background: '#ffffff', borderColor: 'transparent', boxShadow: '0 20px 40px -15px rgba(1,45,29,0.06)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffe08f')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                  >
                    <div
                      className="flex items-center justify-center rounded-full mb-5 transition-colors duration-300"
                      style={{ width: '56px', height: '56px', background: '#f0ede9' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#012d1d')}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M9 10v11M15 10v11" />
                      </svg>
                    </div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#012d1d' }}>{client.name}</h4>
                  </div>
                ))}
                {governmentClients.length === 0 && (
                  <p className="col-span-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973' }}>No government clients listed yet.</p>
                )}
              </div>
            </div>

            {/* Private Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid #c1c8c2' }}>
                <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: '40px', height: '40px', background: '#755b00' }}>
                  <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 500, color: '#012d1d' }}>Private &amp; Corporate</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {privateClients.map((client) => (
                  <div
                    key={client.id}
                    className="group rounded-lg border transition-all duration-300 hover:-translate-y-1 p-7"
                    style={{ background: '#ffffff', borderColor: 'transparent', boxShadow: '0 20px 40px -15px rgba(1,45,29,0.06)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffe08f')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                  >
                    <div
                      className="flex items-center justify-center rounded-full mb-5 transition-colors duration-300"
                      style={{ width: '56px', height: '56px', background: '#f0ede9' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#012d1d' }}>{client.name}</h4>
                  </div>
                ))}
                {privateClients.length === 0 && (
                  <p className="col-span-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973' }}>No private clients listed yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24" style={{ background: '#012d1d' }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 600, color: '#ffffff', marginBottom: '20px' }}>
            Ready to Elevate Your Landscape?
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', marginBottom: '40px' }}>
            Join our elite network of clients and transform your property with the wisdom of Srikanth Nursery.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              style={{ background: '#755b00', color: '#ffffff', padding: '14px 40px', borderRadius: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fed977')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#755b00')}
            >
              Discuss Your Project
            </Link>
            <Link
              to="/projects"
              style={{ border: '1px solid rgba(193,200,194,0.4)', color: '#ffffff', padding: '14px 40px', borderRadius: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientsPage;
