const Hero = ({ companyInfo }) => {
  return (
    <section id="home" className="pt-16 relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/Other%20images/hero%20image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {companyInfo?.name || 'Srikanth Nursery & Lakshmi Associates'}
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 mb-8 drop-shadow">
            {companyInfo?.tagline || 'Landscape Design | Plantations | Park Development'}
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {companyInfo?.location || 'Hyderabad, Telangana'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md px-6 py-4">
              <p className="text-sm text-gray-600">Established</p>
              <p className="text-2xl font-bold text-green-700">
                {companyInfo?.established_year || '2008'}
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md px-6 py-4">
              <p className="text-sm text-gray-600">Area</p>
              <p className="text-2xl font-bold text-green-700">
                {companyInfo?.area_acres || '20'} Acres
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md px-6 py-4">
              <p className="text-sm text-gray-600">Annual Turnover</p>
              <p className="text-2xl font-bold text-green-700">
                {companyInfo?.annual_turnover || '₹25 Crores'}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-green-50 transition-colors duration-200 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
