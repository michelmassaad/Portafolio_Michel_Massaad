import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCode, FiChevronLeft, FiChevronRight, FiZoomIn, FiX } from 'react-icons/fi';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiReact, SiNodedotjs, SiPython, SiSolidity, SiMysql, SiOpencv, 
  SiJavascript, SiEthereum, SiCplusplus, SiFirebase, SiVite,
  SiAngular, SiSupabase, SiTypescript, SiBootstrap,
  SiNestjs, SiMongodb
} from 'react-icons/si';

import { projects, categories } from '../data/info';

// Carrusel de imágenes para las cards de proyecto. 
// Si el proyecto solo tiene una imagen, se muestra igual que antes (sin flechas ni puntos).
const ProjectImageCarousel = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <img
        src={images[currentIndex]}
        alt={`${title} - imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100 cursor-zoom-in"
        onClick={() => onImageClick(currentIndex)}
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Ícono de lupa: avisa que la imagen es clickeable, sin robarle el click a nada */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/40 rounded-full p-3">
          <FiZoomIn className="text-white" size={22} />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagen anterior"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagen siguiente"
          >
            <FiChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [lightbox, setLightbox] = useState(null); // { images, index, title } | null

  const filteredProjects = projects.filter(project => 
    activeFilter === 'Todos' ? true : project.category === activeFilter
  );

  const openLightbox = (images, index, title) => setLightbox({ images, index, title });
  const closeLightbox = () => setLightbox(null);
  const lightboxNext = () => setLightbox((prev) => prev && { ...prev, index: (prev.index + 1) % prev.images.length });
  const lightboxPrev = () => setLightbox((prev) => prev && { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length });

  // Escape / flechas de teclado + bloquear scroll de fondo mientras el lightbox está abierto
  useEffect(() => {
    if (!lightbox) return;

    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox]);

  const getTechIcon = (techName) => {
    switch(techName) {
      case 'Node.js': return <SiNodedotjs className="text-[#339933]" />;
      case 'Python': return <SiPython className="text-[#3776AB]" />;
      case 'OpenCV': return <SiOpencv className="text-[#5C3EE8]" />;
      case 'React': return <SiReact className="text-[#61DAFB]" />;
      case 'MySQL': return <SiMysql className="text-[#4479A1]" />;
      case 'Solidity': return <SiSolidity className="text-gray-900 dark:text-gray-300 transition-colors" />;
      case 'Ethereum': return <SiEthereum className="text-[#3C3C3D]" />;
      case 'JavaScript': return <SiJavascript className="text-[#F7DF1E]" />;
      case 'HTML': case 'HTML5': return <FaHtml5 className="text-[#E34F26]" />;
      case 'CSS': case 'CSS3': return <FaCss3Alt className="text-[#1572B6]" />;
      case 'C++': return <SiCplusplus className="text-[#00599C]" />;
      case 'Java': return <FaJava className="text-[#007396]" />;
      case 'Firebase': return <SiFirebase className="text-[#FFCA28]" />;
      case 'Vite': return <SiVite className="text-[#646CFF]" />;
      case 'Angular': return <SiAngular className="text-[#DD0031]" />;
      case 'Supabase': return <SiSupabase className="text-[#3ECF8E]" />;
      case 'TypeScript': return <SiTypescript className="text-[#3178C6]" />;
      case 'Bootstrap': return <SiBootstrap className="text-[#7952B3]" />;
      case 'NestJS': return <SiNestjs className="text-[#E0234E]" />;
      case 'MongoDB': return <SiMongodb className="text-[#47A248]" />;
      default: return <FiCode className="text-techBlue" />; 
    }
  };

  return (
    <section id="proyectos" className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-8">
      
      <h3 className="section-title text-[var(--text-main)] transition-colors duration-500">
        Proyectos <span className="text-techBlue">Destacados</span>
      </h3>

      {/* Botones de Filtro dinámicos desde info.js */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeFilter === category
                ? 'bg-techBlue text-white border-techBlue shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)] border-[var(--border-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-main)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grilla de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const projectImages = project.images?.length > 0 ? project.images : [project.image];

          return (
            <div key={project.id} 
                 className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden group hover:border-[var(--border-hover)] transition-colors duration-300 shadow-lg flex flex-col">
              
              {/* Imagen del Proyecto (con carrusel + lightbox si hay más de una) */}
              <div className="relative h-48 w-full overflow-hidden bg-[var(--bg-img-container)] border-b border-[var(--border-color)] transition-colors duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <FiFolder size={40} />
                </div>

                <ProjectImageCarousel 
                  images={projectImages} 
                  title={project.title} 
                  onImageClick={(index) => openLightbox(projectImages, index, project.title)}
                />
                
                <span className="absolute top-4 left-4 z-20 bg-[var(--bg-badge-overlay)] backdrop-blur-sm text-[var(--text-badge)] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-[var(--border-muted)] transition-colors duration-500">
                  {project.category}
                </span>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-techBlue transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-1 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Etiquetas Tech dinámicas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[var(--text-tech)] bg-[var(--bg-tertiary)] border border-[var(--border-muted)] rounded-md transition-colors duration-300"
                    >
                      {getTechIcon(tech)} {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-[var(--border-color)] transition-colors duration-300 flex-wrap">
                  
                  {project.githubLink && project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--hover-btn-bg)] transition-colors py-2 px-3 rounded-lg"
                    >
                      <FiGithub size={18} /> {project.githubLinkBack ? 'Frontend' : 'Código'}
                    </a>
                  )}

                  {project.githubLinkBack && (
                    <a 
                      href={project.githubLinkBack} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--hover-btn-bg)] transition-colors py-2 px-3 rounded-lg"
                    >
                      <FiGithub size={18} /> Backend
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-techBlue hover:text-blue-400 hover:bg-techBlue/10 transition-colors py-2 px-3 rounded-lg ml-auto"
                    >
                      <FiExternalLink size={18} /> Visitar Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox: overlay a pantalla completa con la imagen ampliada */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <FiX size={24} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={28} />
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt={`${lightbox.title} - imagen ${lightbox.index + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Imagen siguiente"
            >
              <FiChevronRight size={28} />
            </button>
          )}

          {lightbox.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {lightbox.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === lightbox.index ? 'bg-white w-6' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      
    </section>
  );
};

export default Projects;