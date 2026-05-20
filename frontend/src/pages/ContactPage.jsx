import { useState } from 'react';
import { useData } from '../context/DataContext';

const ContactPage = () => {
  const { data } = useData();
  const { contactInfo } = data;

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'landscape', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const primaryContact = contactInfo?.[0] || null;

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c1c8c2',
    padding: '12px 0',
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    color: '#012d1d',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: '#717973',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <main className="pt-20">
      {/* Hero Title */}
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <div className="max-w-2xl">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            Connect With Us
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#012d1d', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Let's Cultivate Your Vision.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
            Whether you are looking to transform a private estate or develop a commercial landscape, our team is ready to provide expert guidance and sustainable botanical solutions.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className="rounded-xl relative overflow-hidden"
            style={{ background: '#ffffff', padding: '40px', boxShadow: '0 20px 50px -12px rgba(1,45,29,0.08)', border: '1px solid rgba(193,200,194,0.2)' }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <svg className="w-28 h-28" fill="#012d1d" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /></svg>
            </div>
            <div className="relative z-10 space-y-6">
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#012d1d' }}>
                  {primaryContact?.contact_person || 'Srikanth Nursery'}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#755b00', marginTop: '4px' }}>
                  {primaryContact?.designation || 'Managing Director'}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#012d1d' }}>Corporate Address</p>
                    <address style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#414844', fontStyle: 'normal', marginTop: '4px' }}>
                      {primaryContact?.address || 'Hyderabad, Telangana, India'}
                    </address>
                  </div>
                </div>

                {(primaryContact?.phone || true) && (
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#012d1d' }}>Direct Line</p>
                      <a href={`tel:${primaryContact?.phone || '+919876543210'}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#414844', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#755b00')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#414844')}
                      >
                        {primaryContact?.phone || '+91 98765 43210'}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: '#012d1d' }}>Email Inquiries</p>
                    <a href={`mailto:${primaryContact?.email || 'info@srikanthnursery.com'}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#414844', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#755b00')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#414844')}
                    >
                      {primaryContact?.email || 'info@srikanthnursery.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-52 rounded-xl overflow-hidden" style={{ boxShadow: '0 20px 40px -15px rgba(1,45,29,0.1)' }}>
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Botanical Texture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(1,45,29,0.35)', backdropFilter: 'blur(2px)' }}>
              <div className="text-center" style={{ color: '#ffffff' }}>
                <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Nurturing Nature</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="lg:col-span-7">
          <div
            className="rounded-xl"
            style={{ background: '#fcf9f4', padding: '40px 48px', boxShadow: '0 20px 50px -12px rgba(1,45,29,0.08)', border: '1px solid rgba(193,200,194,0.25)' }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(1,45,29,0.08)' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 600, color: '#012d1d', marginBottom: '12px' }}>Inquiry Submitted</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#414844', lineHeight: 1.6 }}>
                  Thank you for reaching out. Our team will contact you within 24–48 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 600, color: '#012d1d', marginBottom: '12px' }}>Send an Inquiry</h2>
                  <div style={{ width: '48px', height: '4px', background: '#755b00', borderRadius: '9999px' }} />
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" style={labelStyle}>Full Name</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="E.g. Alexander Pierce" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email Address</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 --- --- ----" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" style={labelStyle}>Interested Service</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                      >
                        <option value="landscape">Landscape Design</option>
                        <option value="maintenance">Estate Maintenance</option>
                        <option value="consultation">Horticultural Consultation</option>
                        <option value="bulk">Bulk Plant Supply</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" style={labelStyle}>Your Message</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Describe your project requirements..." rows={4}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                      onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-3 transition-all active:scale-95"
                      style={{ background: '#012d1d', color: '#ffffff', padding: '14px 48px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(1,45,29,0.2)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#012d1d')}
                    >
                      Submit Inquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Botanical Divider */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="botanical-divider" />
      </div>

      {/* Map Section */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="rounded-2xl overflow-hidden relative" style={{ height: '400px', border: '1px solid rgba(193,200,194,0.3)', boxShadow: '0 20px 50px -12px rgba(1,45,29,0.08)' }}>
          <div className="absolute top-5 left-5 z-10 p-4 rounded-lg" style={{ background: 'rgba(252,249,244,0.95)', backdropFilter: 'blur(8px)', boxShadow: '0 8px 24px rgba(1,45,29,0.08)', border: '1px solid rgba(193,200,194,0.3)', maxWidth: '280px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#755b00', textTransform: 'uppercase', marginBottom: '4px' }}>Our Location</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 600, color: '#012d1d', marginBottom: '6px' }}>Headquarters</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.5, color: '#414844' }}>
              {primaryContact?.address || 'Hyderabad, Telangana, India'}
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f6f3ee 0%, #e8e2d9 100%)' }}>
            <div className="text-center" style={{ color: '#c1c8c2' }}>
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>Map view — Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
