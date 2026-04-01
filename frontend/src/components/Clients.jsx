const Clients = ({ clients }) => {
  const governmentClients = clients.filter(c => c.type === 'government');
  const privateClients = clients.filter(c => c.type === 'private');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
              Government Projects
            </h3>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                {governmentClients.map((client) => (
                  <li key={client.id} className="flex items-center">
                    <span className="text-blue-600 mr-3 text-xl">▸</span>
                    <span className="text-gray-700">{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">
              Private Projects
            </h3>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-4">
                {privateClients.map((client) => (
                  <li key={client.id} className="flex items-center">
                    <span className="text-purple-600 mr-3 text-xl">▸</span>
                    <span className="text-gray-700">{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Major Client Highlight</h3>
          <p className="text-lg mb-2">G Square Developers (Chennai)</p>
          <p className="text-xl font-semibold mb-2">Project Value: ₹5 Crores</p>
          <p className="text-sm">Work: Plant Supply & Plantation</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
