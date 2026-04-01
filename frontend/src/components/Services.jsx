const categoryMeta = {
  plantation: {
    title: 'Plantation Works',
    icon: '🌳',
    gradient: 'from-green-600 to-green-800',
    badgeColor: 'bg-green-100 text-green-800',
    img: '/images/Other images/plantation works.png',
  },
  landscape: {
    title: 'Landscape Development',
    icon: '🏞️',
    gradient: 'from-emerald-600 to-emerald-800',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    img: '/images/Other images/landscape development.png',
  },
  specialized: {
    title: 'Specialized Services',
    icon: '⚙️',
    gradient: 'from-teal-600 to-teal-800',
    badgeColor: 'bg-teal-100 text-teal-800',
    img: '/images/Other images/specialized services.png',
  },
  maintenance: {
    title: 'Plant Supply & Maintenance',
    icon: '🌿',
    gradient: 'from-lime-600 to-green-700',
    badgeColor: 'bg-lime-100 text-lime-800',
    img: '/images/Other images/plant supply and maintenance.png',
  },
};

const Services = ({ services }) => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We are your single-source solution for all landscaping needs
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-10">
          {Object.entries(services).map(([category, serviceList], idx) => {
            const meta = categoryMeta[category] || {
              title: category,
              icon: '🌿',
              gradient: 'from-green-600 to-emerald-700',
              badgeColor: 'bg-green-100 text-green-800',
              img: '/images/Other images/landscape development.png',
            };
            const isEven = idx % 2 === 0;

            return (
              <div key={category} className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-hover">
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden img-zoom flex-shrink-0">
                    <img
                      src={meta.img}
                      alt={meta.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="text-5xl mb-3">{meta.icon}</div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{meta.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{serviceList.length} services</p>
                    </div>
                  </div>

                  {/* Services grid */}
                  <div className="md:w-3/5 p-8 md:p-10">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {serviceList.map((service) => (
                        <div
                          key={service.id}
                          className="group/card flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-200 cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover/card:bg-green-200 transition-colors mt-0.5">
                            <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 group-hover/card:text-green-800 transition-colors">{service.name}</h4>
                            {service.description && (
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{service.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
