import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{ background: 'rgba(252,249,244,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(193,200,194,0.3)' }}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 px-6">
        <Link
          to="/"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#012d1d', textDecoration: 'none', letterSpacing: '-0.01em' }}
        >
          Srikanth Nursery
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: isActive ? 700 : 600,
                letterSpacing: '0.05em',
                color: isActive ? '#755b00' : '#414844',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #755b00' : '2px solid transparent',
                paddingBottom: '4px',
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block transition-all duration-300"
            style={{ background: '#012d1d', color: '#ffffff', padding: '8px 24px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#012d1d')}
          >
            Get a Quote
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <rect y={menuOpen ? '7' : '0'} width="22" height="2" rx="1" fill="#012d1d" style={{ transform: menuOpen ? 'rotate(45deg)' : 'none', transformOrigin: '50% 50%', transition: 'all 0.2s' }} />
              <rect y="7" width="22" height="2" rx="1" fill="#012d1d" style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <rect y={menuOpen ? '7' : '14'} width="22" height="2" rx="1" fill="#012d1d" style={{ transform: menuOpen ? 'rotate(-45deg)' : 'none', transformOrigin: '50% 50%', transition: 'all 0.2s' }} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: 'rgba(252,249,244,0.98)', borderTop: '1px solid rgba(193,200,194,0.3)' }}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                color: isActive ? '#755b00' : '#414844',
                textDecoration: 'none',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(193,200,194,0.3)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ background: '#012d1d', color: '#ffffff', padding: '10px 24px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', marginTop: '4px' }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
