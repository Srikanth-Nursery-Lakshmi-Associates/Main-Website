import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('government')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'government'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Government
            </button>
            <button
              onClick={() => setFilter('private')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === 'private'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Private
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {project.thumbnail_url ? (
                  <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center ${project.thumbnail_url ? 'hidden' : ''}`}
                >
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'government'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                  {project.is_featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>
                {project.client && (
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                )}
                {project.location && (
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Location:</span> {project.location}
                  </p>
                )}
                <p className="text-gray-700 line-clamp-2 text-sm">{project.description}</p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
