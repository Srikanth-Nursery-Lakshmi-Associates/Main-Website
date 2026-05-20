import { useEffect, useState } from 'react';
import api from '../services/api';

const ProjectModal = ({ project, onClose }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const data = await api.getProject(project.slug);
        setProjectDetails(data);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setProjectDetails(project);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project.slug]);

  const displayProject = projectDetails || project;
  const images = displayProject.images || [];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(1,45,29,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-xl"
        style={{ background: '#ffffff', animation: 'fadeInUp 0.35s ease both', boxShadow: '0 32px 80px -16px rgba(1,45,29,0.25)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex justify-between items-center px-8 py-5 rounded-t-xl"
          style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(193,200,194,0.2)' }}
        >
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 600, color: '#012d1d', lineHeight: 1.3 }}>
              {displayProject.title}
            </h2>
            {displayProject.location && (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#717973', marginTop: '2px' }}>
                {displayProject.location}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-lg transition-all duration-200"
            style={{ width: '40px', height: '40px', background: '#f0ede9', color: '#414844', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#ffdad6'; e.currentTarget.style.color = '#ba1a1a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#f0ede9'; e.currentTarget.style.color = '#414844'; }}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex flex-col justify-center items-center py-20 gap-4">
              <div className="rounded-full border-4 animate-spin" style={{ width: '48px', height: '48px', borderColor: '#f0ede9', borderTopColor: '#755b00' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#717973' }}>Loading project details…</p>
            </div>
          ) : (
            <>
              {/* Image gallery */}
              {images.length > 0 && (
                <div className="mb-8">
                  <div className="relative overflow-hidden rounded-xl img-zoom">
                    <img
                      src={images[currentImageIndex]?.image_url}
                      alt={`${displayProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full object-cover transition-opacity duration-300"
                      style={{ height: '360px' }}
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(1,45,29,0.25), transparent)' }} />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
                          style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer' }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
                          style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer' }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="#012d1d" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full"
                          style={{ background: 'rgba(1,45,29,0.7)', color: '#ffffff', fontFamily: "'Inter', sans-serif", fontSize: '13px', backdropFilter: 'blur(4px)' }}
                        >
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
                      {images.map((img, index) => (
                        <button
                          key={img.id || index}
                          onClick={() => setCurrentImageIndex(index)}
                          className="flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200"
                          style={{
                            width: '80px',
                            height: '56px',
                            border: index === currentImageIndex ? '2px solid #755b00' : '2px solid transparent',
                            opacity: index === currentImageIndex ? 1 : 0.6,
                            transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
                            cursor: 'pointer',
                          }}
                        >
                          <img src={img.image_url} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Badges */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      background: displayProject.type === 'government' ? 'rgba(1,45,29,0.08)' : 'rgba(254,217,119,0.3)',
                      color: displayProject.type === 'government' ? '#012d1d' : '#755b00',
                    }}
                  >
                    {displayProject.type === 'government' ? 'Government' : 'Private Sector'}
                  </span>
                  {displayProject.is_featured && (
                    <span className="px-4 py-1.5 rounded-full" style={{ background: '#fed977', color: '#755b00', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600 }}>
                      Featured
                    </span>
                  )}
                  {displayProject.status && (
                    <span className="px-4 py-1.5 rounded-full" style={{ background: 'rgba(1,45,29,0.08)', color: '#012d1d', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600 }}>
                      {displayProject.status.charAt(0).toUpperCase() + displayProject.status.slice(1)}
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {displayProject.client && (
                    <div className="rounded-lg p-4" style={{ background: '#f6f3ee' }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', color: '#717973', textTransform: 'uppercase', marginBottom: '4px' }}>Client</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#012d1d' }}>{displayProject.client}</p>
                    </div>
                  )}
                  {displayProject.location && (
                    <div className="rounded-lg p-4" style={{ background: '#f6f3ee' }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', color: '#717973', textTransform: 'uppercase', marginBottom: '4px' }}>Location</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#012d1d' }}>{displayProject.location}</p>
                    </div>
                  )}
                  {displayProject.project_value && (
                    <div className="rounded-lg p-4" style={{ background: 'rgba(254,217,119,0.2)', border: '1px solid rgba(117,91,0,0.15)' }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', color: '#755b00', textTransform: 'uppercase', marginBottom: '4px' }}>Project Value</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#755b00' }}>{displayProject.project_value}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full" style={{ width: '20px', height: '2px', background: '#755b00', display: 'inline-block' }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 600, color: '#012d1d' }}>About the Project</h3>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.6, color: '#414844', whiteSpace: 'pre-line' }}>{displayProject.description}</p>
              </div>

              {/* Species */}
              {displayProject.species && Object.keys(displayProject.species).length > 0 && (
                <div className="p-6 rounded-xl" style={{ background: '#f6f3ee', border: '1px solid rgba(193,200,194,0.3)' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 600, color: '#012d1d', marginBottom: '20px' }}>
                    Species Used
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(displayProject.species).map(([category, speciesList]) => (
                      <div key={category}>
                        <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', color: '#755b00', textTransform: 'uppercase', marginBottom: '8px' }}>
                          {category}
                        </h4>
                        <ul className="space-y-1.5">
                          {speciesList.map((species, index) => (
                            <li key={index} className="flex items-start gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#414844' }}>
                              <span style={{ color: '#755b00', flexShrink: 0, marginTop: '3px' }}>•</span>
                              {species}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
