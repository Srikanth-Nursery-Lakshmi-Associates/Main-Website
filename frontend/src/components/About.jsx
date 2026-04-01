const About = ({ companyInfo }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/Other images/nursery image.jpg"
              alt="Srikanth Nursery"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Legacy of Greenery</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {companyInfo?.about ||
                'With over 17 years of experience, Srikanth Nursery is a leading landscaping firm dedicated to transforming outdoor spaces into sustainable and visually appealing environments. We combine horticultural expertise with innovative landscape design to deliver high-quality projects across Hyderabad and Telangana.'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Srikanth Nursery</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">●</span>
                <span>Established in 2008</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">●</span>
                <span>Spread across 20 acres in and around Hyderabad</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">●</span>
                <span>Specialized in plant cultivation and landscaping</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-600">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Lakshmi Associates</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">●</span>
                <span>Established in 2013</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">●</span>
                <span>Sister concern of Srikanth Nursery</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">●</span>
                <span>Handles project execution and business activities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="bg-white border-2 border-green-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  {companyInfo?.mission ||
                    'At Srikanth Nursery, our mission is to transform outdoor spaces into beautiful, sustainable, and functional environments that enrich the lives of our clients. We are committed to providing exceptional craftsmanship, innovative design, and a client-focused approach to every project.'}
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  {companyInfo?.vision ||
                    'To be the leading landscape design and build firm in our region, recognized for our commitment to quality, environmental stewardship, and the creation of unique, lasting landscapes that inspire and delight.'}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="/images/Other images/overhead view.png"
              alt="Aerial view of our projects"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Horticultural Expertise</h3>
          <p className="leading-relaxed text-lg">
            As a distinguished nursery, we possess an unparalleled understanding of plants. Our team of experts meticulously selects and cultivates a wide variety of high-quality plants, ensuring every green element in your landscape is healthy and perfectly suited for the local climate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
