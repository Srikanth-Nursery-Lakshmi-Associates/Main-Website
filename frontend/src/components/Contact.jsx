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

  const contactItems = primaryContact
    ? [
        primaryContact.contact_person && {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
          label: 'Contact Person',
          value: primaryContact.contact_person,
          sub: primaryContact.designation,
          href: null,
        },
        primaryContact.phone && {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          ),
          label: 'Phone',
          value: primaryContact.phone,
          href: `tel:${primaryContact.phone}`,
        },
        primaryContact.email && {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          label: 'Email',
          value: primaryContact.email,
          href: `mailto:${primaryContact.email}`,
        },
        primaryContact.address && {
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          label: 'Address',
          value: primaryContact.address,
          href: null,
        },
      ].filter(Boolean)
    : [];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-50 -translate-y-1/2 translate-x-1/2 opacity-70" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-50 translate-y-1/2 -translate-x-1/2 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500">Let's discuss your landscaping project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="text-2xl">📞</span> Get in Touch
            </h3>

            {contactItems.length > 0 ? (
              <div className="space-y-5">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-green-100 hover:border-green-300 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-gray-900 hover:text-green-700 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900">{item.value}</p>
                      )}
                      {item.sub && <p className="text-sm text-gray-500">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana' },
                  { icon: '🌐', label: 'Website', value: 'srikanthnursery.com' },
                  { icon: '📧', label: 'Email', value: 'info@srikanthnursery.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-green-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Expertise card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 text-white p-8">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">🌿</span> Our Expertise
              </h3>
              <ul className="space-y-3 mb-8">
                {expertiseItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/75 text-sm leading-relaxed">
                  Whether you're planning a government project or a private development, we have the expertise and resources to bring your vision to life.
                </p>
                <a
                  href="#projects"
                  className="mt-5 inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors duration-200 text-sm group"
                >
                  View Our Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
