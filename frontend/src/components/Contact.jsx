import { useState } from 'react';

const expertiseItems = [
  'Landscape Design & Planning',
  'Park & Garden Development',
  'Highway & Avenue Plantations',
  'Theme Parks & Rock Gardens',
  'Irrigation Systems & Water Features',
  'Plant Supply & Garden Maintenance',
];

const Contact = ({ contactInfo }) => {
  const primaryContact = contactInfo?.find((c) => c.is_primary) || contactInfo?.[0];
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'landscape', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = primaryContact
    ? [
        primaryContact.contact_person && {
          label: 'Contact Person',
          value: primaryContact.contact_person,
          sub: primaryContact.designation,
          href: null,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
        },
        primaryContact.phone && {
          label: 'Direct Line',
          value: primaryContact.phone,
          sub: null,
          href: `tel:${primaryContact.phone}`,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          ),
        },
        primaryContact.email && {
          label: 'Email Inquiries',
          value: primaryContact.email,
          sub: null,
          href: `mailto:${primaryContact.email}`,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        primaryContact.address && {
          label: 'Corporate Address',
          value: primaryContact.address,
          sub: null,
          href: null,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ].filter(Boolean)
    : [
        { label: 'Location', value: 'Hyderabad, Telangana', href: null, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg> },
        { label: 'Email', value: 'info@srikanthnursery.com', href: 'mailto:info@srikanthnursery.com', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
      ];

  return (
    <section id="contact" style={{ background: '#fcf9f4' }} className="overflow-hidden">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <span
            className="block mb-4 uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.2em', color: '#755b00' }}
          >
            Connect With Us
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2, marginBottom: '24px' }}
          >
            Let's Cultivate Your Vision.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
            Whether you are looking to transform a private estate or develop a commercial landscape, our team is ready to provide expert guidance and sustainable botanical solutions.
          </p>
        </div>
      </div>

      {/* Contact + Form grid */}
      <div className="max-w-[1280px] mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact info */}
        <div className="lg:col-span-5 space-y-8">
          <div
            className="rounded-xl luxury-shadow border relative overflow-hidden group"
            style={{ background: '#ffffff', borderColor: 'rgba(193,200,194,0.2)', padding: '40px' }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#012d1d' }}>
                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 0v18M3 12h18" />
              </svg>
            </div>
            <div className="relative z-10">
              {primaryContact?.contact_person && (
                <div className="mb-8">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 500, color: '#012d1d', marginBottom: '4px' }}>
                    {primaryContact.contact_person}
                  </h3>
                  {primaryContact.designation && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#755b00' }}>
                      {primaryContact.designation}
                    </p>
                  )}
                </div>
              )}
              <div className="space-y-6">
                {contactItems.map((item, idx) => (
                  item.label !== 'Contact Person' && (
                    <div key={idx} className="flex items-start gap-4">
                      <span style={{ color: '#755b00', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#012d1d', marginBottom: '4px' }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844', textDecoration: 'none' }}
                            onMouseEnter={(e) => (e.target.style.color = '#755b00')}
                            onMouseLeave={(e) => (e.target.style.color = '#414844')}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: 1.5, color: '#414844' }}>{item.value}</p>
                        )}
                        {item.sub && (
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#717973' }}>{item.sub}</p>
                        )}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="rounded-xl p-8" style={{ background: '#012d1d' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#ffffff', marginBottom: '20px' }}>
              Our Expertise
            </h3>
            <ul className="space-y-3">
              {expertiseItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="rounded-full flex-shrink-0" style={{ width: '5px', height: '5px', background: '#755b00' }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <div
            className="rounded-xl luxury-shadow border"
            style={{ background: '#ffffff', borderColor: 'rgba(193,200,194,0.2)', padding: '48px 56px' }}
          >
            <div className="mb-10">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 600, color: '#012d1d', marginBottom: '12px' }}>
                Send an Inquiry
              </h2>
              <div style={{ width: '48px', height: '3px', background: '#755b00', borderRadius: '2px' }} />
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ width: '72px', height: '72px', background: 'rgba(254,217,119,0.3)' }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="#755b00" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#012d1d', marginBottom: '12px' }}>
                  Inquiry Received
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#414844' }}>
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="group">
                      <label
                        htmlFor={id}
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844', display: 'block', marginBottom: '8px' }}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={form[id]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid #c1c8c2',
                          padding: '12px 0',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '16px',
                          color: '#012d1d',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                        onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="phone"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844', display: 'block', marginBottom: '8px' }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 --- --- ----"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #c1c8c2',
                        padding: '12px 0',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        color: '#012d1d',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                      onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844', display: 'block', marginBottom: '8px' }}
                    >
                      Interested Service
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid #c1c8c2',
                        padding: '12px 0',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        color: '#012d1d',
                        outline: 'none',
                        appearance: 'none',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                      onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                    >
                      <option value="landscape">Landscape Design</option>
                      <option value="maintenance">Estate Maintenance</option>
                      <option value="consultation">Horticultural Consultation</option>
                      <option value="bulk">Bulk Plant Supply</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844', display: 'block', marginBottom: '8px' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your project requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #c1c8c2',
                      padding: '12px 0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '16px',
                      color: '#012d1d',
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = '#755b00')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#c1c8c2')}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex items-center gap-3 rounded-full transition-all duration-300 active:scale-[0.98] luxury-shadow"
                    style={{
                      background: '#012d1d',
                      color: '#ffffff',
                      padding: '16px 48px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#012d1d')}
                  >
                    Submit Inquiry
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
