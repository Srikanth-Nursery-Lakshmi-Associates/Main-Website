import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import ProjectModal from '../components/ProjectModal';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Government', value: 'government' },
  { label: 'Private', value: 'private' },
];

const ProjectsPage = () => {
  const { data } = useData();
  const { projects } = data;
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.type === filter);
  const mainGrid = filteredProjects.slice(0, 4);
  const secondaryGrid = filteredProjects.slice(4);

  return (
    <main className="pt-20">
      {/* Header */}
      <header className="max-w-[1280px] mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#012d1d', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Our Landscape Masterpieces
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#414844' }}>
            A curated portfolio showcasing our commitment to environmental stewardship and architectural excellence across government and private sectors.
          </p>
        </div>
      </header>

      {/* Filter Controls */}
      <div
        className="sticky top-20 z-40 py-6"
        style={{ background: 'rgba(252,249,244,0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(193,200,194,0.2)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
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
          <div className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#414844' }}>
            <svg className="w-4 h-4" style={{ color: '#755b00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Displaying{' '}
            <span style={{ fontWeight: 700, color: '#012d1d' }}>{filteredProjects.length}</span> Signature Works
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-24">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#717973' }}>No projects found for this filter</p>
        </div>
      ) : (
        <section className="max-w-[1280px] mx-auto px-6 py-16">
          {/* Main 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainGrid.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="relative overflow-hidden rounded-xl img-zoom mb-5"
                  style={{ aspectRatio: idx % 2 === 0 ? '4/5' : '3/2' }}
                >
                  {project.thumbnail_url ? (
                    <img src={project.thumbnail_url} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#ffffff', textAlign: 'center', padding: '0 24px' }}>{project.title}</span>
                    </div>
                  )}
                  <div className="absolute top-5 left-5">
                    <span className="backdrop-blur-md px-4 py-1.5 rounded-full" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, background: 'rgba(252,249,244,0.9)', color: '#012d1d' }}>
                      {project.type === 'government' ? 'Government' : 'Private Sector'}
                    </span>
                  </div>
                  {project.is_featured && (
                    <div className="absolute top-5 right-5">
                      <span className="px-3 py-1.5 rounded-full" style={{ background: '#fed977', color: '#755b00', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700 }}>Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" style={{ background: 'rgba(1,45,29,0.15)' }}>
                    <div className="rounded-full flex items-center justify-center" style={{ width: '56px', height: '56px', background: 'rgba(252,249,244,0.9)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 500, color: '#012d1d', lineHeight: 1.3 }}>{project.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#414844' }}>
                    {project.client}{project.client && project.location && ' • '}{project.location}
                    {project.year_completed && ` • ${project.year_completed}`}
                  </p>
                  {project.description && (
                    <p className="line-clamp-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#717973', lineHeight: 1.5 }}>{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Botanical Divider */}
          {secondaryGrid.length > 0 && (
            <>
              <div className="botanical-divider my-16" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {secondaryGrid.map((project) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden rounded-xl img-zoom mb-4" style={{ aspectRatio: '3/4' }}>
                      {project.thumbnail_url ? (
                        <img src={project.thumbnail_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #012d1d, #1b4332)' }} />
                      )}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(1,45,29,0.15)' }} />
                    </div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 500, color: '#012d1d' }}>{project.title}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#414844', marginTop: '4px' }}>
                      {project.client}{project.client && project.location && ' • '}{project.location}
                      {project.year_completed && ` • ${project.year_completed}`}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden py-24" style={{ background: '#012d1d' }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#ffffff', marginBottom: '20px' }}>
            Ready to transform your space?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: 1.6, color: '#86af99', maxWidth: '560px', margin: '0 auto 40px' }}>
            Whether it's a massive government infrastructure or a private luxury estate, we bring vision and nature together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link
              to="/contact"
              style={{ background: '#755b00', color: '#ffffff', padding: '14px 40px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fed977')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#755b00')}
            >
              Inquire About a Project
            </Link>
            <Link
              to="/services"
              style={{ border: '1px solid #755b00', color: '#755b00', padding: '14px 40px', borderRadius: '9999px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#755b00'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#755b00'; }}
            >
              View Service Catalogue
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
};

export default ProjectsPage;
