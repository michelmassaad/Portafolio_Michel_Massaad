import { personalInfo } from '../data/info';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer 
      className="border-t mt-20 transition-colors duration-500"
      style={{ 
        backgroundColor: 'var(--footer-bg)', 
        borderColor: 'var(--border-color)' 
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 
            className="text-2xl font-bold tracking-widest mb-2 transition-colors"
            style={{ color: 'var(--text-main)' }}
          >
            MM<span className="text-techBlue">.</span>
          </h2>
          <p 
            className="text-sm transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            Construyendo soluciones escalables y eficientes.
          </p>
        </div>

        <div className="flex gap-6">
          {/* PRO TIP: Usamos text-[var(--...)] para no romper el hover:text-techBlue */}
          <a 
            href={`mailto:${personalInfo.contact.email}`}
            className="text-[var(--text-muted)] hover:text-techBlue transition-all duration-300 hover:-translate-y-1"
            title="Enviar correo"
          >
            <FiMail size={24} />
          </a>
          <a 
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-[var(--text-muted)] hover:text-techBlue transition-all duration-300 hover:-translate-y-1"
            title="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a 
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-[var(--text-muted)] hover:text-techBlue transition-all duration-300 hover:-translate-y-1"
            title="GitHub"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;