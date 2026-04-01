import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className={`rounded-xl p-1.5 transition-all duration-300 ${scrolled ? 'bg-green-50' : 'bg-white/10 backdrop-blur-sm'}`}>
              <img
                src="/logo.png"
                alt="Srikanth Nursery Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="ml-3 hidden sm:block">
              <span className={`text-lg font-bold leading-tight block transition-colors duration-300 ${scrolled ? 'text-green-800' : 'text-white'}`}>
                Srikanth Nursery
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-green-600' : 'text-green-200'}`}>
                & Lakshmi Associates
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                  scrolled
                    ? 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${scrolled ? 'bg-green-600' : 'bg-white'}`} />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white btn-gradient"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${scrolled ? 'text-gray-700 hover:bg-green-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-green-100 shadow-xl">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all duration-200 font-medium"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-2 px-4 py-3 text-center text-white font-semibold rounded-xl btn-gradient"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
