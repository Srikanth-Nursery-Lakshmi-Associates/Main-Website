const Services = ({ services }) => {
  const categoryTitles = {
    plantation: 'Plantation Works',
    landscape: 'Landscape Development',
    specialized: 'Specialized Services',
    maintenance: 'Plant Supply & Maintenance'
  };

  const categoryImages = {
    plantation: '/images/Other images/plantation works.png',
    landscape: '/images/Other images/landscape development.png',
    specialized: '/images/Other images/specialized services.png',
    maintenance: '/images/Other images/plant supply and maintenance.png'
  };

  const categoryColors = {
    plantation: 'border-green-500 bg-green-50',
    landscape: 'border-emerald-500 bg-emerald-50',
    specialized: 'border-teal-500 bg-teal-50',
    maintenance: 'border-lime-500 bg-lime-50'
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are your single-source solution for all landscaping needs
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(services).map(([category, serviceList]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img
                    src={categoryImages[category] || '/images/Other images/landscape development.png'}
                    alt={categoryTitles[category]}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
                    {categoryTitles[category] || category}
                  </h3>
                </div>

                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceList.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 rounded-lg border-l-4 ${categoryColors[category] || 'border-gray-300 bg-gray-50'} hover:shadow-md transition-shadow duration-200`}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {service.name}
                        </h4>
                        {service.description && (
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
