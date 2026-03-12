import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiCode } from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiPython, SiSolidity, SiMysql, SiOpencv, 
  SiJavascript, SiEthereum, SiCplusplus 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

import { projects, categories } from '../data/info';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'Todos' ? true : project.category === activeFilter
  );

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
        {filteredProjects.map((project) => (
          
          <div key={project.id} 
               className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden group hover:border-[var(--border-hover)] transition-colors duration-300 shadow-lg flex flex-col">
            
            {/* Imagen del Proyecto */}
            <div className="relative h-48 w-full overflow-hidden bg-[var(--bg-img-container)] border-b border-[var(--border-color)] transition-colors duration-500">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                <FiFolder size={40} />
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                onError={(e) => { e.target.style.display = 'none'; }}
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
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-[var(--border-color)] transition-colors duration-300">
                
                {project.githubLink && project.githubLink !== "#" && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--hover-btn-bg)] transition-colors py-2 px-3 rounded-lg"
                  >
                    <FiGithub size={18} /> Código
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

        ))}
      </div>
      
    </section>
  );
};

export default Projects;