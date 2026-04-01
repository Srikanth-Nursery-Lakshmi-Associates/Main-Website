const About = ({ companyInfo }) => {
  const companies = [
    {
      name: 'Srikanth Nursery',
      color: 'from-green-600 to-emerald-700',
      icon: '🌱',
      facts: [
        'Established in 2008',
        'Spread across 20 acres in and around Hyderabad',
        'Specialized in plant cultivation and landscaping',
      ],
    },
    {
      name: 'Lakshmi Associates',
      color: 'from-emerald-600 to-teal-700',
      icon: '🏗️',
      facts: [
        'Established in 2013',
        'Sister concern of Srikanth Nursery',
        'Handles project execution and business activities',
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-50 -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-50 translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Story
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Over 17 years of turning visions into vibrant, living landscapes
          </p>
        </div>

        {/* Story section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl img-zoom">
              <img
                src="/images/Other images/nursery image.jpg"
                alt="Srikanth Nursery"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-3 inline-block">
                  <p className="text-white font-semibold text-sm">17+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 section-underline" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of Greenery
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {companyInfo?.about ||
                'With over 17 years of experience, Srikanth Nursery is a leading landscaping firm dedicated to transforming outdoor spaces into sustainable and visually appealing environments. We combine horticultural expertise with innovative landscape design to deliver high-quality projects across Hyderabad and Telangana.'}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'Projects Completed', icon: '✅' },
                { value: '20 Ac', label: 'Nursery Spread', icon: '🌳' },
                { value: '₹25 Cr', label: 'Annual Turnover', icon: '💰' },
                { value: '15+', label: 'Years Experience', icon: '⭐' },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100 hover:border-green-300 transition-colors duration-200">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-2xl font-bold text-green-700 mb-0.5">{item.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {companies.map((co) => (
            <div key={co.name} className="relative overflow-hidden rounded-3xl group card-hover">
              <div className={`absolute inset-0 bg-gradient-to-br ${co.color} opacity-95`} />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                    {co.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{co.name}</h3>
                </div>
                <ul className="space-y-3">
                  {co.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-white/90 text-sm">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            {[
              {
                title: 'Our Mission',
                text: companyInfo?.mission || 'At Srikanth Nursery, our mission is to transform outdoor spaces into beautiful, sustainable, and functional environments. We are committed to exceptional craftsmanship and innovative design for every project.',
                icon: '🎯',
                gradient: 'from-green-50 to-emerald-50',
                border: 'border-green-200',
              },
              {
                title: 'Our Vision',
                text: companyInfo?.vision || 'To be the leading landscape design and build firm in our region, recognized for our commitment to quality, environmental stewardship, and the creation of unique, lasting landscapes.',
                icon: '👁️',
                gradient: 'from-emerald-50 to-teal-50',
                border: 'border-emerald-200',
              },
            ].map((item) => (
              <div key={item.title} className={`bg-gradient-to-br ${item.gradient} border ${item.border} p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl img-zoom">
              <img
                src="/images/Other images/overhead view.png"
                alt="Aerial view of our projects"
                className="w-full h-[430px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Expertise banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 animate-gradient-x text-white p-10">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <span className="text-6xl animate-leaf-drift flex-shrink-0">🌿</span>
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Unparalleled Horticultural Expertise
              </h3>
              <p className="text-white/85 leading-relaxed text-lg">
                Our team meticulously selects and cultivates a wide variety of high-quality plants, ensuring every green element is healthy and perfectly suited for the local climate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
