import { personalInfo } from '../data/info';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-32 pb-12 md:pt-44 md:pb-20 flex items-center justify-center px-4 md:px-8 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
        
        {/* Columna Izquierda: Texto y Tarjeta */}
        <div className="flex-1 text-center md:text-left w-full flex flex-col items-center md:items-start">
          
          <h1 
            className="text-3xl sm:text-4xl lg:text-6xl font-black mb-2 md:mb-4 tracking-tighter leading-tight w-full text-[var(--text-main)] transition-colors duration-500"
          >
            {personalInfo.name}
          </h1>
          
          <h2 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 font-medium leading-relaxed text-[var(--text-muted)] transition-colors duration-500"
          >
            Software Developer | <span className="text-techBlue whitespace-nowrap">Backend & Infraestructura</span>
          </h2>
          
          {/* Tarjeta de Presentación con Variables CSS en Clases */}
          <div 
            className="bg-[var(--hero-card-bg)] backdrop-blur-xl border border-[var(--hero-card-border)] rounded-2xl p-5 md:p-8 mb-8 text-left shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden group w-full max-w-lg md:max-w-none transition-all duration-300 hover:border-[var(--hero-card-hover-border)] hover:bg-[var(--hero-card-hover-bg)]"
          >
            {/* Brillo de fondo sutil */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-techBlue/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-700 group-hover:bg-techBlue/20"></div>
            
            <p 
              className="text-[var(--text-tech)] text-sm sm:text-base md:text-lg leading-relaxed relative z-10 font-normal transition-colors duration-500"
            >
              Próximo a graduarme en <strong className="text-[var(--text-main)] font-bold">Sistemas (UTN)</strong>. 
              Me especializo en diseñar 
              <span className="inline-block font-mono text-xs sm:text-sm text-techBlue bg-techBlue/10 px-2 py-0.5 rounded-md border border-techBlue/20 mx-1 align-middle font-semibold transition-colors duration-500">
                arquitecturas_sólidas
              </span> 
              y optimizar bases de datos. Transformo problemas complejos en 
              <span className="inline-block font-mono text-xs sm:text-sm text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20 mx-1 align-middle font-semibold transition-colors duration-500">
                código_escalable
              </span> 
              para construir los cimientos de cualquier aplicación.
            </p>

            <div 
              className="mt-6 pt-5 border-t border-[var(--hero-card-border)] flex items-center gap-3 relative z-10 transition-colors duration-500"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-[var(--text-muted)] text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-500">
                Disponible para nuevos desafíos
              </span>
            </div>
          </div>
          
          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#proyectos" 
              className="bg-techBlue text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] w-full sm:w-auto text-center"
            >
              Ver Proyectos
            </a>
            <a 
              href="https://drive.google.com/file/d/1oCPZVweegsNWvPIvkfkqvS9LTw1C8EGC/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--btn-hover-text)] hover:text-[var(--btn-hover-text)] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FiExternalLink size={20}/> Ver CV
            </a>

            <div className="flex gap-3 mt-2 sm:mt-0 sm:ml-2">
              <a 
                href={personalInfo.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 bg-[var(--hero-btn-bg)] border border-[var(--hero-btn-border)] rounded-xl text-[var(--text-muted)] hover:text-[var(--btn-hover-text)] hover:border-[var(--btn-hover-text)] transition-all duration-300"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href={personalInfo.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3.5 bg-[var(--hero-btn-bg)] border border-[var(--hero-btn-border)] rounded-xl text-[var(--text-muted)] hover:text-techBlue hover:border-techBlue transition-all duration-300"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Foto */}
        <div className="flex-none flex justify-center w-full md:w-auto mb-4 md:mb-0">
          <div 
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-[var(--hero-btn-border)] hover:border-techBlue overflow-hidden shadow-2xl transition-all duration-500 group"
          >
            <img 
              src="/images/profile.jpg" 
              alt="Michel Massaad" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
              onError={(e) => {
                e.target.src = 'https://avatars.githubusercontent.com/u/143674636?v=4';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;