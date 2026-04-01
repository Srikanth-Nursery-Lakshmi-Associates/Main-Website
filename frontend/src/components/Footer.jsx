const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Srikanth Nursery Logo"
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-white">
                Srikanth Nursery
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming outdoor spaces into sustainable and beautiful environments since 2008.
            </p>
            <p className="text-gray-400">
              Spread across 20 acres in Hyderabad, Telangana
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plantation Works</li>
              <li>Landscape Development</li>
              <li>Theme Parks</li>
              <li>Garden Maintenance</li>
              <li>Plant Supply</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Srikanth Nursery & Lakshmi Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
