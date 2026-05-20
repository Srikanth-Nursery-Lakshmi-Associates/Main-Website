import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Footer = () => {
  const { data } = useData();
  const { companyInfo, contactInfo } = data;
  const primaryContact = contactInfo?.[0] || null;

  const services = [
    'Plantation Works',
    'Landscape Development',
    'Specialized Services',
    'Plant Supply & Maintenance',
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Clients', to: '/clients' },
  ];

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    color: '#fed977',
    textTransform: 'uppercase',
    marginBottom: '20px',
    display: 'block',
  };

  const linkStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#86af99',
    textDecoration: 'none',
    display: 'block',
    transition: 'color 0.2s',
  };

  return (
    <footer style={{ background: '#012d1d', borderTop: '1px solid #1b4332' }}>
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <Link
              to="/"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: '#ffffff', textDecoration: 'none', display: 'block' }}
            >
              Srikanth Nursery
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.6, color: '#86af99' }}>
              {companyInfo?.tagline || 'Premium landscaping and nursery solutions since 2008. Dedicated to creating sustainable green landmarks across India.'}
            </p>
            <div className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#86af99' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#755b00', display: 'inline-block', flexShrink: 0 }} />
              {companyInfo?.location || 'Hyderabad, Telangana'}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <span style={labelStyle}>Our Services</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span style={{ color: '#755b00', fontSize: '10px', flexShrink: 0 }}>&#9658;</span>
                  <Link
                    to="/services"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86af99')}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <span style={labelStyle}>Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86af99')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span style={labelStyle}>Contact Information</span>
            <div className="space-y-4">
              <div className="flex items-start gap-3" style={{ color: '#86af99' }}>
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
                  {primaryContact?.address || companyInfo?.location || 'Hyderabad, Telangana, India'}
                </span>
              </div>
              {(primaryContact?.email) && (
                <div className="flex items-center gap-3" style={{ color: '#86af99' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${primaryContact.email}`}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#86af99', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86af99')}
                  >
                    {primaryContact.email}
                  </a>
                </div>
              )}
              {(primaryContact?.phone) && (
                <div className="flex items-center gap-3" style={{ color: '#86af99' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={`tel:${primaryContact.phone}`}
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#86af99', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86af99')}
                  >
                    {primaryContact.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(134,175,153,0.2)', paddingTop: '32px' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(134,175,153,0.5)' }}>
              © {new Date().getFullYear()} {companyInfo?.name || 'Srikanth Nursery & Lakshmi Associates'}. All rights reserved.
            </p>
            <div className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(134,175,153,0.5)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#755b00', display: 'inline-block' }} />
              Landscape Excellence Since {companyInfo?.established_year || '2008'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
