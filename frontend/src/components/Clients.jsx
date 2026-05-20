const Clients = ({ clients }) => {
  const governmentClients = clients.filter((c) => c.type === 'government');
  const privateClients = clients.filter((c) => c.type === 'private');

  return (
    <section id="clients" style={{ background: '#fcf9f4' }} className="overflow-hidden">
      {/* Header */}
      <div style={{ background: '#ffffff', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span
            className="block mb-4 uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00' }}
          >
            Distinguished Partnerships
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2, marginBottom: '24px' }}
          >
            Our Valued Clients
          </h1>
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844', maxWidth: '640px', margin: '0 auto' }}
          >
            From expansive government infrastructure projects to bespoke corporate landscape solutions, we have been the trusted partner for premium greenery and sustainable landscaping.
          </p>
          <div className="botanical-divider max-w-xs mx-auto" style={{ marginTop: '48px', marginBottom: 0 }} />
        </div>
      </div>

      {/* Two-column client lists */}
      <div style={{ background: '#f6f3ee' }} className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Government */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid #c1c8c2' }}>
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: '40px', height: '40px', background: '#012d1d' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M9 10v11M15 10v11" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 500, color: '#012d1d' }}>
                  Public &amp; Government
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {governmentClients.map((client) => (
                  <div
                    key={client.id}
                    className="group rounded-lg luxury-shadow border transition-all duration-300 hover:-translate-y-1 p-8"
                    style={{ background: '#ffffff', borderColor: 'transparent' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffe08f')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                  >
                    <div
                      className="flex items-center justify-center rounded-full mb-6 transition-colors duration-300"
                      style={{ width: '64px', height: '64px', background: '#f0ede9' }}
                    >
                      <svg className="w-7 h-7 transition-colors duration-300" style={{ color: '#012d1d' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M9 10v11M15 10v11" />
                      </svg>
                    </div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#012d1d', marginBottom: '8px' }}>
                      {client.name}
                    </h4>
                    {client.description && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.4, color: '#717973' }}>
                        {client.description}
                      </p>
                    )}
                  </div>
                ))}
                {governmentClients.length === 0 && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973', gridColumn: 'span 2' }}>No government clients listed</p>
                )}
              </div>
            </div>

            {/* Private */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 pb-6" style={{ borderBottom: '1px solid #c1c8c2' }}>
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: '40px', height: '40px', background: '#755b00' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 500, color: '#012d1d' }}>
                  Private &amp; Corporate
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {privateClients.map((client) => (
                  <div
                    key={client.id}
                    className="group rounded-lg luxury-shadow border transition-all duration-300 hover:-translate-y-1 p-8"
                    style={{ background: '#ffffff', borderColor: 'transparent' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffe08f')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                  >
                    <div
                      className="flex items-center justify-center rounded-full mb-6 transition-colors duration-300"
                      style={{ width: '64px', height: '64px', background: '#f0ede9' }}
                    >
                      <svg className="w-7 h-7" style={{ color: '#755b00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#012d1d', marginBottom: '8px' }}>
                      {client.name}
                    </h4>
                    {client.description && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.4, color: '#717973' }}>
                        {client.description}
                      </p>
                    )}
                  </div>
                ))}
                {privateClients.length === 0 && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973', gridColumn: 'span 2' }}>No private clients listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Major client highlight */}
      <div style={{ background: '#012d1d' }} className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 600, color: '#ffffff', marginBottom: '24px' }}
          >
            Ready to Elevate Your Landscape?
          </h2>
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', maxWidth: '560px', margin: '0 auto 48px' }}
          >
            Join our network of clients and transform your property with the wisdom of Srikanth Nursery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="rounded-lg transition-all duration-300"
              style={{
                background: '#755b00',
                color: '#ffffff',
                padding: '14px 40px',
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
              Discuss Your Project
            </a>
            <a
              href="#projects"
              className="rounded-lg transition-all duration-300"
              style={{
                border: '1px solid rgba(193,200,194,0.4)',
                color: '#ffffff',
                padding: '14px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
