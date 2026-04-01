const Clients = ({ clients }) => {
  const governmentClients = clients.filter((c) => c.type === 'government');
  const privateClients = clients.filter((c) => c.type === 'private');

  const ClientList = ({ items, icon, color, label }) => (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Card header */}
      <div className={`bg-gradient-to-r ${color} p-6 flex items-center gap-4`}>
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{label}</h3>
          <p className="text-white/70 text-sm">{items.length} clients</p>
        </div>
      </div>

      {/* List */}
      <ul className="p-6 space-y-3">
        {items.map((client) => (
          <li key={client.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 group">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
              <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm font-medium">{client.name}</span>
          </li>
        ))}
        {items.length === 0 && (
          <li className="text-gray-400 text-sm text-center py-6">No clients listed</li>
        )}
      </ul>
    </div>
  );

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400" />
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #15803d 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Trusted By
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Clients
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Serving government bodies and private enterprises across Telangana
          </p>
        </div>

        {/* Client lists */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <ClientList
            items={governmentClients}
            icon="🏛️"
            color="from-blue-600 to-blue-800"
            label="Government Projects"
          />
          <ClientList
            items={privateClients}
            icon="🏢"
            color="from-violet-600 to-purple-800"
            label="Private Projects"
          />
        </div>

        {/* Major client highlight */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-10 text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Major Client Highlight</h3>
            <p className="text-xl font-semibold mb-1">G Square Developers (Chennai)</p>
            <p className="text-2xl font-bold text-yellow-200 mb-1">₹5 Crores</p>
            <p className="text-white/80 text-sm">Plant Supply & Plantation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
