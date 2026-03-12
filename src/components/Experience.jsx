import { FiBriefcase, FiMonitor, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experienceData = [
    {
      role: "Operations Assistant",
      company: "Pendular",
      date: "Marzo 2025 - Actualidad",
      type: "Trabajo Remoto",
      icon: <FiBriefcase size={22} className="text-techBlue" />, 
      description: "Segmentación y edición de highlights deportivos. Etiquetado estructurado de metadatos para optimizar la indexación en bases de datos y distribución multiplataforma.",
      tags: ["Gestión de Metadatos", "Indexación", "Media Management"]
    },
    {
      role: "Desarrollador Web Freelance",
      company: "Independiente",
      date: "2020 - Actualidad",
      type: "Trabajo Remoto",
      icon: <FiMonitor size={22} className="text-purple-400" />, 
      description: "Desarrollo y personalización de plataformas e-commerce (ej. Tienda Nube). Optimización de UI/UX, maquetación web y mejora drástica de tiempos de carga para clientes reales.",
      tags: ["HTML / CSS", "E-commerce", "UI / UX", "Optimización Web"]
    }
  ];

  return (
    <section id="experiencia" className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-8 transition-colors duration-500">
      
      <h3 className="section-title" style={{ color: 'var(--text-main)' }}>
        Experiencia <span className="text-techBlue">Laboral</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className="card-style group relative overflow-hidden hover:-translate-y-1"
          >
            {/* Línea superior degradada */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-techBlue via-purple-500 to-techBlue opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5 relative z-10">
              <div className="flex items-center gap-3">
                {/* ICONO: Ahora usa el color Terciario para resaltar sobre la tarjeta */}
                <div 
                  className="p-2.5 border rounded-xl group-hover:scale-110 transition-all duration-300 shadow-sm"
                  style={{ 
                    backgroundColor: 'var(--bg-tertiary)', 
                    borderColor: 'var(--border-color)' 
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-base md:text-lg font-bold tracking-wide" style={{ color: 'var(--text-main)' }}>
                    {item.company}
                  </h5>
                  <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    <FiMapPin size={10} /> {item.type}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-techBlue text-[10px] md:text-xs font-bold tracking-wide uppercase bg-techBlue/10 px-2.5 py-1 rounded-md border border-techBlue/20 whitespace-nowrap w-fit">
                <FiCalendar size={10} /> {item.date}
              </span>
            </div>

            <div className="flex flex-col flex-1 relative z-10">
              <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-techBlue transition-colors" style={{ color: 'var(--text-main)' }}>
                {item.role}
              </h4>
              
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                {item.description}
              </p>

              {/* TAGS: Ahora usan var(--bg-tertiary) para diferenciarse del fondo de la tarjeta */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 text-xs font-medium border rounded-md transition-all group-hover:border-gray-500 shadow-sm"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;