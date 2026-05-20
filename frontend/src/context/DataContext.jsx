import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    companyInfo: null,
    services: {},
    projects: [],
    clients: [],
    contactInfo: [],
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [companyInfo, services, projects, clients, contactInfo] = await Promise.all([
          api.getCompanyInfo().catch(() => null),
          api.getGroupedServices().catch(() => ({})),
          api.getProjects().catch(() => []),
          api.getClients().catch(() => []),
          api.getContactInfo().catch(() => []),
        ]);
        setData({ companyInfo, services, projects, clients, contactInfo });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <DataContext.Provider value={{ loading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
