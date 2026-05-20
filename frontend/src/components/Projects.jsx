import { useState } from 'react';
import ProjectModal from './ProjectModal';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Government', value: 'government' },
  { label: 'Private', value: 'private' },
];

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" style={{ background: '#fcf9f4' }} className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#012d1d', lineHeight: 1.2, marginBottom: '24px' }}>
            Our Landscape Masterpieces
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
            A curated portfolio showcasing our commitment to environmental stewardship and architectural excellence across government and private sectors.
          </p>
        </div>

        {/* Filters */}
        <div
          className="sticky top-20 z-40 flex flex-wrap items-center justify-between gap-6 py-6 mb-12"
          style={{ background: 'rgba(252,249,244,0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(193,200,194,0.2)' }}
        >
          <div className="flex items-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className="px-6 py-2 rounded-full transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  background: filter === f.value ? '#755b00' : 'transparent',
                  color: filter === f.value ? '#ffffff' : '#414844',
                  border: filter === f.value ? '1px solid #755b00' : '1px solid rgba(193,200,194,0.5)',
                  boxShadow: filter === f.value ? '0 4px 16px rgba(117,91,0,0.2)' : 'none',
                  cursor: 'pointer',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#414844' }}>
            Displaying{' '}
            <span style={{ color: '#012d1d', fontWeight: 700 }}>{filteredProjects.length}</span> Signature Works
          </span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-xl img-zoom mb-6"
                style={{ aspectRatio: '16/9' }}
              >
                {project.thumbnail_url ? (
                  <img
                    src={project.thumbnail_url}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`absolute inset-0 flex items-center justify-center ${project.thumbnail_url ? 'hidden' : 'flex'}`}
                  style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', textAlign: 'center', padding: '0 24px' }}>
                    {project.title}
                  </h3>
                </div>

                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className="backdrop-blur-md px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      background: 'rgba(252,249,244,0.9)',
                      color: '#012d1d',
                    }}
                  >
                    {project.type === 'government' ? 'Government' : 'Private Sector'}
                  </span>
                </div>

                {project.is_featured && (
                  <div className="absolute top-6 right-6">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{ background: '#fed977', color: '#755b00', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700 }}
                    >
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  style={{ background: 'rgba(1,45,29,0.15)' }}
                >
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{ width: '56px', height: '56px', background: 'rgba(252,249,244,0.9)' }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, color: '#012d1d', lineHeight: 1.3 }}
                >
                  {project.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', color: '#414844' }}>
                  {project.client && `${project.client}`}
                  {project.client && project.location && ' • '}
                  {project.location}
                </p>
                {project.description && (
                  <p
                    className="line-clamp-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#717973', lineHeight: 1.5 }}
                  >
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#717973' }}>
              No projects found for this filter
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden py-24" style={{ background: '#012d1d' }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#ffffff', marginBottom: '24px' }}
          >
            Ready to transform your space?
          </h2>
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#a5d0b9', maxWidth: '600px', margin: '0 auto 48px' }}
          >
            Whether it's a massive government infrastructure or a private luxury estate, we bring vision and nature together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#contact"
              className="rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: '#755b00',
                color: '#ffffff',
                padding: '16px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(117,91,0,0.2)',
              }}
            >
              Inquire About a Project
            </a>
            <button
              onClick={() => setFilter('all')}
              className="rounded-full transition-all duration-300"
              style={{
                border: '1px solid #755b00',
                color: '#755b00',
                padding: '16px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
