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

  const typeColors = {
    government: 'bg-blue-100 text-blue-700',
    private: 'bg-violet-100 text-violet-700',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animationName: 'fadeInUp', animationDuration: '0.35s', animationFillMode: 'both' }}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100 px-8 py-5 flex justify-between items-center rounded-t-3xl">
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {displayProject.title}
            </h2>
            {displayProject.location && (
              <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1">
                📍 {displayProject.location}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-gray-500 transition-all duration-200"
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
              <div className="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />
              <p className="text-gray-400 text-sm">Loading project details…</p>
            </div>
          ) : (
            <>
              {/* Image gallery */}
              {images.length > 0 && (
                <div className="mb-8">
                  <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                      src={images[currentImageIndex]?.image_url}
                      alt={`${displayProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                      {images.map((img, index) => (
                        <button
                          key={img.id || index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                            index === currentImageIndex
                              ? 'border-green-500 scale-105 shadow-md'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img.image_url} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Badges + Meta */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${typeColors[displayProject.type] || 'bg-gray-100 text-gray-700'}`}>
                    {displayProject.type === 'government' ? '🏛️' : '🏢'} {displayProject.type?.charAt(0).toUpperCase() + displayProject.type?.slice(1)}
                  </span>
                  {displayProject.is_featured && (
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                      ⭐ Featured
                    </span>
                  )}
                  {displayProject.status && (
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      ✅ {displayProject.status.charAt(0).toUpperCase() + displayProject.status.slice(1)}
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {displayProject.client && (
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Client</p>
                      <p className="text-sm font-medium text-gray-900">{displayProject.client}</p>
                    </div>
                  )}
                  {displayProject.location && (
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Location</p>
                      <p className="text-sm font-medium text-gray-900">{displayProject.location}</p>
                    </div>
                  )}
                  {displayProject.project_value && (
                    <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Project Value</p>
                      <p className="text-sm font-bold text-green-800">{displayProject.project_value}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-green-500 rounded-full" /> About the Project
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{displayProject.description}</p>
              </div>

              {/* Species */}
              {displayProject.species && Object.keys(displayProject.species).length > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                    🌿 Species Used
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(displayProject.species).map(([category, speciesList]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-green-700 mb-2 capitalize text-sm uppercase tracking-wide">
                          {category}
                        </h4>
                        <ul className="space-y-1.5">
                          {speciesList.map((species, index) => (
                            <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
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
