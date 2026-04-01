import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import api from './services/api';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    companyInfo: null,
    services: {},
    projects: [],
    clients: [],
    contactInfo: []
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [companyInfo, services, projects, clients, contactInfo] = await Promise.all([
          api.getCompanyInfo().catch(() => null),
          api.getGroupedServices().catch(() => ({})),
          api.getProjects().catch(() => []),
          api.getClients().catch(() => []),
          api.getContactInfo().catch(() => [])
        ]);

        setData({
          companyInfo,
          services,
          projects,
          clients,
          contactInfo
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load website data. Please check if the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
          <p className="mt-4 text-xl text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 text-5xl mb-4 text-center">⚠</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Connection Error</h2>
          <p className="text-gray-600 mb-6 text-center">{error}</p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> Make sure the backend server is running on port 3000 and Supabase is configured.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero companyInfo={data.companyInfo} />
      <About companyInfo={data.companyInfo} />
      <Services services={data.services} />
      <Projects projects={data.projects} />
      <Clients clients={data.clients} />
      <Contact contactInfo={data.contactInfo} />
      <Footer />
    </div>
  );
}

export default App;
