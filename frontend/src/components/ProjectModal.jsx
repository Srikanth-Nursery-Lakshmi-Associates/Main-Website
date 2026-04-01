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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{displayProject.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
            </div>
          ) : (
            <>
              {images.length > 0 && (
                <div className="mb-8">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={images[currentImageIndex]?.image_url}
                      alt={`${displayProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {images.map((img, index) => (
                        <button
                          key={img.id || index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex ? 'border-green-600' : 'border-transparent'
                          }`}
                        >
                          <img
                            src={img.image_url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    displayProject.type === 'government'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {displayProject.type.charAt(0).toUpperCase() + displayProject.type.slice(1)}
                  </span>
                  {displayProject.is_featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                  {displayProject.status && (
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {displayProject.status.charAt(0).toUpperCase() + displayProject.status.slice(1)}
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {displayProject.client && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Client:</span> {displayProject.client}
                    </p>
                  )}
                  {displayProject.location && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Location:</span> {displayProject.location}
                    </p>
                  )}
                  {displayProject.project_value && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Project Value:</span> {displayProject.project_value}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About the Project</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {displayProject.description}
                </p>
              </div>

              {displayProject.species && Object.keys(displayProject.species).length > 0 && (
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Species Used</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(displayProject.species).map(([category, speciesList]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-green-700 mb-2 capitalize">
                          {category}
                        </h4>
                        <ul className="space-y-1">
                          {speciesList.map((species, index) => (
                            <li key={index} className="text-gray-700 text-sm flex items-start">
                              <span className="text-green-600 mr-2">•</span>
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
