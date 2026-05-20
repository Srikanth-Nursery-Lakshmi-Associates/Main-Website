import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
  const { loading, error } = useData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fcf9f4' }}>
        <div className="text-center">
          <div
            className="inline-block animate-spin rounded-full border-4"
            style={{ width: '56px', height: '56px', borderColor: '#e8e2d9', borderTopColor: '#755b00' }}
          />
          <p className="mt-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973' }}>
            Loading…
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fcf9f4' }}>
        <div className="p-10 rounded-xl max-w-md w-full mx-4 luxury-shadow" style={{ background: '#ffffff' }}>
          <div className="text-center mb-6" style={{ fontSize: '2.5rem', color: '#ba1a1a' }}>&#9888;</div>
          <h2 className="text-center mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#012d1d' }}>
            Connection Error
          </h2>
          <p className="text-center mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#717973' }}>{error}</p>
          <div className="rounded-lg p-4 mb-6" style={{ background: 'rgba(254,217,119,0.2)', border: '1px solid rgba(117,91,0,0.2)' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#755b00' }}>
              Ensure the backend server is running on port 3000 and Supabase is configured.
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full rounded-full transition-all duration-300"
            style={{ background: '#012d1d', color: '#ffffff', padding: '12px 24px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#012d1d')}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
