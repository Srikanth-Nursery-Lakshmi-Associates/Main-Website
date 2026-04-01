import { useState } from 'react';
import ProjectModal from './ProjectModal';

const FILTERS = [
  { label: 'All Projects', value: 'all', icon: '🌐' },
  { label: 'Government', value: 'government', icon: '🏛️' },
  { label: 'Private', value: 'private', icon: '🏢' },
];

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #15803d 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-10" />

          {/* Filter pills */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-2xl p-1.5 flex-wrap justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === f.value
                    ? 'bg-white text-green-700 shadow-md shadow-green-900/10'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-400 overflow-hidden border border-gray-100 cursor-pointer card-hover"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image */}
              <div className="h-52 relative overflow-hidden img-zoom">
                {project.thumbnail_url ? (
                  <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center ${project.thumbnail_url ? 'hidden' : 'flex'}`}
                >
                  <h3 className="text-lg font-bold text-white text-center px-4">{project.title}</h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold flex items-center gap-1">
                    View Details
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>

                {/* Featured badge */}
                {project.is_featured && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'government'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-violet-100 text-violet-700'
                  }`}>
                    {project.type === 'government' ? '🏛️' : '🏢'} {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>

                {project.client && (
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-1.5">
                    <span className="text-green-500">👤</span>
                    {project.client}
                  </p>
                )}
                {project.location && (
                  <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                    <span className="text-green-500">📍</span>
                    {project.location}
                  </p>
                )}

                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌱</div>
            <p className="text-gray-400 text-lg font-medium">No projects found for this filter</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
