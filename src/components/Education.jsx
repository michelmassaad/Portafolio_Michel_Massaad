import { FiServer, FiLayout, FiHexagon, FiCheckSquare, FiCpu, FiBookOpen, FiAward } from 'react-icons/fi';

const Education = () => {
  const academicData = [
    {
      title: "Tecnicatura en Programación y Sistemas",
      institution: "UTN (Universidad Tecnológica Nacional)",
      date: "2024 - Actualidad",
      icon: <FiServer size={18} />, 
      description: "Último cuatrimestre. Formación integral orientada al desarrollo e implementación de sistemas informáticos, diseño de arquitecturas y programación web.",
      tags: ["Node.js", "Python", "Java", "MySQL", "MongoDB", "JavaScript", "HTML/CSS", "Git"]
    },
    {
      title: "Ingeniería Electrónica (Fundamentos)",
      institution: "Universidad de Buenos Aires (UBA)",
      date: "2021 - 2023",
      icon: <FiCpu size={18} />, 
      description: "Desarrollo de una base analítica y matemática sólida. Fundamentos de lógica algorítmica y programación estructurada utilizando C++.",
      tags: ["Lógica Algorítmica", "C++", "Matemática"]
    }
  ];

  const certificationsData = [
    {
      title: "Especialización en React JS",
      institution: "Talento Tech (GCBA)",
      date: "Marzo 2026 - Actualidad",
      icon: <FiLayout size={18} />, 
      description: "Desarrollo de un e-commerce integrando estado global, autenticación y conexión a bases de datos.",
      tags: ["React", "Vite", "Context API", "React Router", "Firebase", "Bootstrap"]
    },
    {
      title: "Ethereum Developer Pack",
      institution: "Talento Tech & ETH KIPU",
      date: "Noviembre 2025",
      icon: <FiHexagon size={18} />, 
      description: "Testeo y despliegue de contratos inteligentes seguros en la red Ethereum para dApps.",
      tags: ["Solidity", "Smart Contracts", "Web3"]
    },
    {
      title: "QA Testing Profesional",
      institution: "Talento Tech (GCBA)",
      date: "Agosto 2025",
      icon: <FiCheckSquare size={18} />, 
      description: "Planificación de escenarios de prueba, diseño de Test Cases y reporte detallado de bugs.",
      tags: ["Testing Manual", "Bug Reporting", "Scrum"]
    }
  ];

  const TimelineItem = ({ item }) => (
    <div className="mb-10 ml-8 relative group">
      {/* El círculo de la línea de tiempo */}
      <span 
        className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-[41px] ring-4 border transition-all duration-300 group-hover:border-techBlue group-hover:text-techBlue"
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          borderColor: 'var(--border-color)',
          color: 'var(--text-muted)',
          '--tw-ring-color': 'var(--bg-primary)' // El aro exterior del círculo
        }}
      >
        {item.icon}
      </span>
      
      <div className="mb-2">
        <span className="inline-block text-techBlue text-[11px] md:text-xs font-bold tracking-wide uppercase bg-techBlue/10 px-3 py-1.5 rounded-md border border-techBlue/20">
          {item.date}
        </span>
      </div>
      
      <h4 className="text-lg md:text-xl font-bold transition-colors leading-tight mb-1" style={{ color: 'var(--text-main)' }}>
        {item.title}
      </h4>
      
      <h5 className="text-sm md:text-base font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
        {item.institution}
      </h5>
      
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
        {item.description}
      </p>

      {/* TAGS: Usando var(--bg-tertiary) que ahora es tu bg-gray-900/50 exacto */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className="px-2 py-1 text-xs font-medium border rounded-md shadow-sm transition-all group-hover:border-gray-500"
            style={{ 
              backgroundColor: 'var(--bg-tertiary)', 
              borderColor: 'var(--border-color)', 
              color: 'var(--text-muted)' 
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="educacion" className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-8 transition-colors duration-500">
      <h3 className="section-title" style={{ color: 'var(--text-main)' }}>
        Educación y <span className="text-techBlue">Formación</span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        <div>
          <h4 className="text-xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
            <FiBookOpen className="text-techBlue" /> Académica Universitaria
          </h4>
          {/* Línea vertical */}
          <div className="relative border-l-2 ml-3" style={{ borderColor: 'var(--border-color)' }}>
            {academicData.map((item, index) => <TimelineItem key={index} item={item} />)}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
            <FiAward className="text-techBlue" /> Certificaciones Tech
          </h4>
          {/* Línea vertical */}
          <div className="relative border-l-2 ml-3" style={{ borderColor: 'var(--border-color)' }}>
            {certificationsData.map((item, index) => <TimelineItem key={index} item={item} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;