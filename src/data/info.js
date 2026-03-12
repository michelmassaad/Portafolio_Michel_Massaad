export const personalInfo = {
  name: "MICHEL MASSAAD",
  role: "Software Developer | Backend & Infraestructura",
  about: "Software Developer próximo a graduarse en Programación y Sistemas (UTN), especializado en el diseño de arquitecturas Backend, bases de datos y desarrollo Full-stack. Apasionado por la automatización y el ecosistema deportivo, combino mi conocimiento del negocio audiovisual con tecnologías modernas para crear herramientas eficientes y escalables.",
  contact: {
    email: "michel01ft@gmail.com",
    linkedin: "https://linkedin.com/in/michel-massaad",
    github: "https://github.com/michelmassaad",
  }
};

// Categorías para tu sistema de filtrado
export const categories = ["Todos", "Backend & Infraestructura", "Full-Stack", "Web3", "Frontend", "Juegos & Algoritmia"];

export const projects = [
  // 1. EL PESO PESADO ACTUAL
  {
    id: 1,
    title: "Motor de Procesamiento Audiovisual",
    category: "Backend & Infraestructura",
    description: "Sistema automatizado de procesamiento de video, metadatos y extracción de eventos con marcadores dinámicos enfocados en la industria deportiva.",
    techStack: ["Node.js", "Python", "OpenCV"],
    githubLink: "#", 
    liveLink: null,
    image: "/images/clipping-app.jpg" // Ruta temporal
  },
  // 2. EL ECOSISTEMA
  {
    id: 2,
    title: "Plataforma de Coleccionables (Barajitas)",
    category: "Full-Stack",
    description: "Ecosistema cliente/servidor y modelado de base de datos para manejar inventarios de usuarios y transacciones seguras.",
    techStack: ["React", "Node.js", "MySQL"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/barajitas.jpg"
  },
  // 3. LA INNOVACIÓN WEB3
  {
    id: 3,
    title: "KipuBank - Sistema Financiero",
    category: "Web3",
    description: "Desarrollo de Smart Contracts en Solidity con lógica de validación para operaciones descentralizadas seguras.",
    techStack: ["Solidity", "React", "Ethereum"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/kipubank.jpg"
  },
  // 4. EL FRONTEND DEPORTIVO (¡El que olvidaste!)
  {
    id: 4,
    title: "Interfaz Dinámica - Liga de Básquet (Austria)",
    category: "Frontend",
    description: "Desarrollo de una interfaz dinámica para la visualización y gestión de listas de jugadores de la liga austriaca.",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/basquet.jpg"
  },
  // 5. LÓGICA PURA
  {
    id: 5,
    title: "Motor de Juego: Truco",
    category: "Juegos & Algoritmia",
    description: "Desarrollo completo del clásico juego de cartas aplicando Programación Orientada a Objetos y estructuras de datos eficientes.",
    techStack: ["Python", "C++", "Java"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/truco.jpg"
  },
  // 6. AUTOMATIZACIÓN
  {
    id: 6,
    title: "Bot Autónomo - Estilo Flappy Bird",
    category: "Juegos & Algoritmia",
    description: "Desarrollo de un script automatizado capaz de jugar y tomar decisiones en tiempo real dentro del entorno del juego.",
    techStack: ["Python", "Lógica de Control"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/flappybot.jpg"
  },
  // 7 Y 8. LOS CLÁSICOS
  {
    id: 7,
    title: "Classic Snake Game",
    category: "Juegos & Algoritmia",
    description: "Recreación del clásico juego de la serpiente enfocado en el manejo de bucles de estado y renderizado en DOM.",
    techStack: ["JavaScript", "HTML5"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/snake.jpg"
  },
  {
    id: 8,
    title: "Juego de Memoria Visual",
    category: "Frontend",
    description: "Aplicación interactiva para ejercitar la memoria, implementando manejo de eventos y lógica de emparejamiento.",
    techStack: ["JavaScript", "CSS3"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    image: "/images/memoria.jpg"
  }
];

// Agrega esto al final de info.js
export const skills = [
  {
    category: "Lenguajes",
    items: ["JavaScript (Node.js)", "Python", "Solidity", "Java", "C++"]
  },
  {
    category: "Frameworks & Librerías",
    items: ["React", "HTML5", "CSS3", "OpenCV", "APIs REST"]
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Herramientas & Infraestructura",
    items: ["Linux", "Vagrant", "Git / GitHub", "Arquitectura de Sistemas"]
  }
];