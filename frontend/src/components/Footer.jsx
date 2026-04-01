const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Plantation Works',
    'Landscape Development',
    'Theme Parks',
    'Garden Maintenance',
    'Plant Supply',
    'Irrigation Systems',
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-600/5 -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-900/50 rounded-xl p-1.5">
                <img src="/logo.png" alt="Srikanth Nursery Logo" className="h-12 w-auto" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">Srikanth Nursery</span>
                <span className="text-xs text-green-400">& Lakshmi Associates</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Transforming outdoor spaces into sustainable and beautiful environments since 2008. Spread across 20 acres in Hyderabad, Telangana.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Hyderabad, Telangana
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-green-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-green-500 rounded-full transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-green-500 rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">▸</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Srikanth Nursery & Lakshmi Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Landscape Excellence Since 2008
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
