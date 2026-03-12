import { 
  SiJavascript, SiPython, SiSolidity, SiCplusplus, SiNodedotjs, 
  SiReact, SiMysql, SiMongodb, SiGnubash, SiGit, SiOpencv 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const skillRows = [
    {
      category: "Backend & Core",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "Java", icon: <FaJava className="text-[#007396]" /> }
      ]
    },
    {
      category: "Frontend & UI",
      items: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }
      ]
    },
    {
      category: "Bases de Datos",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
      ]
    },
    {
      category: "Web3 & Blockchain",
      items: [
        // En tu mapeo de items dentro de Skills.jsx:
        { 
        name: "Solidity", 
        icon: <SiSolidity className="text-gray-900 dark:text-white transition-colors duration-500" /> 
        }
      ]
    },
    {
      category: "Infra & Herramientas",
      items: [
        { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" /> },
        { name: "Git / GitHub", icon: <SiGit className="text-[#F05032]" /> },
        { name: "Linux / Bash", icon: <SiGnubash className="text-[#4EAA25]" /> }
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-8 transition-colors duration-500">

      <h3 className="section-title" style={{ color: 'var(--text-main)' }}>
        Stack <span className="text-techBlue">Tecnológico</span>
      </h3>
      
      {/* Contenedor principal usando variables */}
      <div 
        className="flex flex-col border rounded-2xl overflow-hidden shadow-sm transition-all duration-500"
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          borderColor: 'var(--border-color)' 
        }}
      >
        {skillRows.map((row, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row items-start md:items-center p-5 sm:p-6 md:px-10 border-b last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="md:w-56 lg:w-64 flex-shrink-0 mb-4 md:mb-0 w-full">
              <h4 
                className="font-bold tracking-widest uppercase text-xs sm:text-sm group-hover:text-techBlue transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {row.category}
              </h4>
            </div>
            
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-5 gap-x-2 sm:gap-6 md:gap-10 flex-1 w-full">
              {row.items.map((tech, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 sm:gap-3 cursor-default hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-2xl md:text-3xl drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                    {tech.icon}
                  </div>
                  <span 
                    className="font-medium text-sm md:text-base group-hover:text-techBlue transition-colors truncate"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;