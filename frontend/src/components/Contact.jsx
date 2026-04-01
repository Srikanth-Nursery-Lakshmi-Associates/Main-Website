const Contact = ({ contactInfo }) => {
  const primaryContact = contactInfo?.find(c => c.is_primary) || contactInfo?.[0];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Let's discuss your landscaping project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

            {primaryContact && (
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{primaryContact.contact_person}</p>
                    {primaryContact.designation && (
                      <p className="text-gray-600">{primaryContact.designation}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${primaryContact.phone}`} className="text-green-600 hover:text-green-700">
                      {primaryContact.phone}
                    </a>
                  </div>
                </div>

                {primaryContact.email && (
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href={`mailto:${primaryContact.email}`} className="text-green-600 hover:text-green-700">
                        {primaryContact.email}
                      </a>
                    </div>
                  </div>
                )}

                {primaryContact.address && (
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">{primaryContact.address}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-green-700 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Landscape Design & Planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Park & Garden Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Highway & Avenue Plantations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Theme Parks & Rock Gardens</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Irrigation Systems & Water Features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-300 mr-2">✓</span>
                <span>Plant Supply & Garden Maintenance</span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-green-600">
              <p className="text-sm">
                Whether you're planning a government project or a private development,
                we have the expertise and resources to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
