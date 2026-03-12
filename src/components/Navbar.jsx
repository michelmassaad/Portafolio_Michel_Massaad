import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Aplicamos la clase al documento y guardamos preferencia
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Stack', href: '#sobre-mi' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <nav 
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b py-5 transition-all duration-500 shadow-sm"
      style={{ 
        backgroundColor: 'var(--nav-bg)', 
        borderColor: 'var(--border-color)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* Logo */}
        <a 
          href="#inicio" 
          className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity"
          style={{ color: 'var(--text-main)' }}
        >
          MM<span className="text-techBlue">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10 text-base lg:text-lg font-bold tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="transition-colors relative group"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span className="group-hover:text-techBlue transition-colors">{link.name}</span>
                  {/* El subrayado siempre usa el azul de marca */}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-techBlue transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-gray-700/30"></div>

          {/* Botón Switcher */}
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-xl border transition-all shadow-sm group"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderColor: 'var(--border-color)',
              color: 'var(--text-muted)'
            }}
          >
            {theme === 'dark' ? (
              <FiSun size={22} className="group-hover:rotate-90 group-hover:text-yellow-400 transition-all duration-500" />
            ) : (
              <FiMoon size={22} className="group-hover:text-indigo-500 transition-all duration-500" />
            )}
          </button>
        </div>

        {/* Mobile UI */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 border rounded-xl transition-all"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderColor: 'var(--border-color)',
              color: 'var(--text-muted)'
            }}
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 transition-colors"
            style={{ color: 'var(--text-main)' }}
          >
            {isMobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full border-b overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] py-8' : 'max-h-0'
        }`}
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          borderColor: 'var(--border-color)' 
        }}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-techBlue transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;