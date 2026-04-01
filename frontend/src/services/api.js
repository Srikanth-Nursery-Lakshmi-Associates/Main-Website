const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiService {
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch data');
      }

      return data.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  // Company endpoints
  getCompanyInfo() {
    return this.fetchData('/company/info');
  }

  getContactInfo() {
    return this.fetchData('/company/contact');
  }

  // Services endpoints
  getServices() {
    return this.fetchData('/services');
  }

  getGroupedServices() {
    return this.fetchData('/services/grouped');
  }

  // Projects endpoints
  getProjects(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.fetchData(`/projects${queryString ? `?${queryString}` : ''}`);
  }

  getProject(slug) {
    return this.fetchData(`/projects/${slug}`);
  }

  getFeaturedProjects() {
    return this.getProjects({ featured: 'true' });
  }

  // Clients endpoints
  getClients(type) {
    return this.fetchData(`/clients${type ? `?type=${type}` : ''}`);
  }
}

export default new ApiService();
