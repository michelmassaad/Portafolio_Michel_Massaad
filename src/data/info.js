export const personalInfo = {
  name: "MICHEL MASSAAD",
  role: "Full-Stack Developer | Backend & Infraestructura",
  about: "Full-Stack Developer próximo a graduarse en Programación y Sistemas (UTN), especializado en el diseño de arquitecturas Backend, bases de datos y desarrollo Full-stack. Apasionado por la automatización y el ecosistema deportivo, combino mi conocimiento del negocio audiovisual con tecnologías modernas para crear herramientas eficientes y escalables.",
  contact: {
    email: "michel01ft@gmail.com",
    linkedin: "https://linkedin.com/in/michel-massaad",
    github: "https://github.com/michelmassaad",
  }
};

// Categorías para tu sistema de filtrado
export const categories = ["Todos", "Backend & Infraestructura", "Full-Stack", "Web3", "Frontend", "Juegos & Algoritmia"];

// Proyectos ordenados de mayor a menor complejidad técnica
export const projects = [
  // 1. TRIBU — El más complejo, arquitectura desacoplada y producción real
  {
    id: 1,
    title: "Tribu - Red Social",
    category: "Full-Stack",
    description: "Red social completa con feed de publicaciones, likes, comentarios y perfiles de usuario. Incluye panel de administración con dashboard de estadísticas (gráficos en tiempo real de actividad), autenticación por cookies httpOnly, subida de imágenes a Cloudinary y despliegue con arquitectura desacoplada (frontend con SSR + PWA, backend como API REST independiente).",
    techStack: ["Angular", "NestJS", "MongoDB", "TypeScript"],
    githubLink: "https://github.com/michelmassaad/tribu-red-social",      
    liveLink: "https://tribu-red-social-michelmassaads-projects.vercel.app",
    images: [
      "images/tribu-red-social.png",
      "images/tribu-red-social-perfil.png",
      "images/tribu-red-social-estadisticas.png",
    ]
  },
  // 2. KIPU BANK — Smart contract verificado, tecnología de nicho
  {
    id: 3,
    title: "KipuBank - Sistema Financiero Web3",
    category: "Web3",
    description: "Desarrollo y despliegue de un Smart Contract financiero en la red Ethereum (Sepolia). Implementa lógica segura de depósitos, retiros y validación de balances, con código 100% verificado en Etherscan.",
    techStack: ["Solidity", "Ethereum", "Smart Contracts"],
    githubLink: "https://github.com/michelmassaad/kipu-bank-v3", 
    liveLink: "https://sepolia.etherscan.io/address/0x0f7a2D9172e94305b3Ad5A6Ebf6e8e85890a7a93#code",
    images: ["images/kipubank.png"] 
  },
  // 3. FIGURITAS STORE — Core Backend puro, BD relacional y arquitectura Monorepo (NUEVA CATEGORÍA)
  {
    id: 7,
    title: "Figuritas Store - E-Commerce Fullstack",
    category: "Backend & Infraestructura", // <-- ¡Cambio clave aquí!
    description: "Plataforma e-commerce construida con arquitectura Monorepo. Cuenta con una tienda pública estática (diseño Glassmorphism) y un panel administrativo EJS renderizado en el servidor. Implementa operaciones CRUD, autenticación segura con Bcrypt y un Modo Demo con rutas protegidas mediante middlewares.",
    techStack: ["Node.js", "Express.js", "EJS", "MySQL","JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/michelmassaad/Figuritas-store", 
    liveLink: "https://figuritas-store-figuritas-backend.vercel.app/",
    images: ["images/figuritas-store.png"] 
  },
  // 4. SALA DE JUEGOS — Integración de APIs, Realtime y Auth
  {
    id: 4,
    title: "Sala de Juegos - Plataforma Multi-Juego",
    category: "Full-Stack",
    description: "Plataforma de minijuegos con autenticación de usuarios, chat global en tiempo real (Supabase Realtime) y sistema de rankings persistido por juego. Incluye Ahorcado, Mayor o Menor, Preguntados (consumiendo la API de OpenTDB) y Bici Rush, un juego de desplazamiento lateral desarrollado íntegramente desde cero.",
    techStack: ["Angular", "TypeScript", "Supabase", "Bootstrap"],
    githubLink: "https://github.com/michelmassaad/Tp_Sala_de_juegos",
    liveLink: "https://tp-sala-de-juegos-eight.vercel.app/",
    images: [
      "images/tp-sala-de-juegos.png",
      "images/tp-sala-de-juegos-ahorcado.png",
      "images/tp-sala-de-juegos-bici-rush.png",
      "images/tp-sala-de-juegos-mayor-menor.png",
    ]
  },
  // 5. VINILOS STORE — Excelente manejo de estado global e integraciones externas
  {
    id: 5, 
    title: "Vinilos Store - E-Commerce de Discos",
    category: "Full-Stack",
    description: "E-commerce de discos de vinilo con catálogo en tiempo real desde Firestore, checkout simulado que descuenta stock real y sistema de roles (admin/demo). El panel de administración autocompleta portada, audio de preview y descripción de cada disco consultando la API de iTunes, con validación real de imagen y audio antes de guardar.",
    techStack: ["React", "Firebase", "Vite", "Context API", "CSS Modules"],
    githubLink: "https://github.com/michelmassaad/vinilos-store", 
    liveLink: "https://vinilos-store.vercel.app/",
    images: [
      "images/vinilos-store.png",
      "images/vinilos-store-vinilo.png",
      "images/vinilos-store-admin.png",
    ]
  },
  // 6. TRUCO ARGENTINO — Fuerte demostración de algoritmia y POO
  {
    id: 6,
    title: "Truco Argentino - Motor de Juego", 
    category: "Juegos & Algoritmia",
    description: "Desarrollo completo de la lógica del clásico juego de cartas. Implementa un oponente con Inteligencia Artificial configurable (estrategia aleatoria o estratégica avanzada), gestión compleja de estados de partida, y persistencia de historial de puntajes en archivos CSV. Enfoque en estructuras de datos eficientes.",
    techStack: ["Python", "Pygame", "POO", "Algoritmia"], 
    githubLink: "https://github.com/michelmassaad/truco-game", 
    liveLink: null, 
    images: ["images/Truco_MM_Gif.gif"] 
  },
  // 7. JUEGO DE MEMORIA — Fundamentos de Frontend
  {
    id: 9,
    title: "Juego de Memoria Visual",
    category: "Frontend",
    description: "Aplicación interactiva para ejercitar la memoria. Implementa un sistema robusto de manejo de eventos, lógica de emparejamiento de matrices y temporizadores asíncronos.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/michelmassaad/juego-de-memoria", 
    liveLink: "https://michelmassaad.github.io/juego-de-memoria/",
    images: ["images/comienzo_memoria.png"]
  },
  // 8. SNAKE GAME — Fundamentos de lógica matricial
  {
    id: 10,
    title: "Classic Snake Game",
    category: "Juegos & Algoritmia",
    description: "Recreación del clásico juego de la serpiente enfocado en el manejo de bucles de estado, detección de colisiones matriciales y renderizado dinámico en el DOM.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/michelmassaad/juego-snake", 
    liveLink: "https://michelmassaad.github.io/juego-snake/",
    images: ["images/comienzo_snake.png"]
  }

  /* 
  ===================================================================
  🚀 PROYECTOS EN ESPERA (Comentados hasta que tengan links y demos reales)
  ===================================================================
  
  {
    id: 2,
    title: "Motor de Procesamiento Audiovisual",
    category: "Backend & Infraestructura",
    description: "Sistema automatizado de procesamiento de video, metadatos y extracción de eventos con marcadores dinámicos enfocados en la industria deportiva.",
    techStack: ["Node.js", "React" ,"Python", "OpenCV", "JavaScript", "HTML5", "CSS3"],
    githubLink: "#", 
    liveLink: null,
    images: ["images/clipping-app.jpg"] 
  },
  {
    id: 8,
    title: "Bot Autónomo - Estilo Flappy Bird",
    category: "Juegos & Algoritmia",
    description: "Desarrollo de un script automatizado capaz de jugar y tomar decisiones en tiempo real dentro del entorno del juego.",
    techStack: ["Python", "Lógica de Control"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    images: ["images/flappybot.jpg"]
  },
  {
    id: 11,
    title: "Interfaz Dinámica - Liga de Básquet (Austria)",
    category: "Frontend",
    description: "Desarrollo de una interfaz dinámica para la visualización y gestión de listas de jugadores de la liga austriaca.",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/michelmassaad/TU-REPO-AQUI", 
    liveLink: "https://mi-proyecto.com",
    images: ["images/basquet.jpg"]
  }
  */
];

// Agrega esto al final de info.js
export const skills = [
  {
    category: "Lenguajes",
    items: ["JavaScript (Node.js)", "TypeScript", "Python", "Solidity", "Java", "C++"]
  },
  {
    category: "Frameworks & Librerías",
    items: ["Express.js", "NestJS", "React", "Angular", "EJS", "Bootstrap", "HTML5/CSS3", "OpenCV", "APIs REST"]
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "MongoDB", "Firebase (Firestore)", "Supabase"]
  },
  {
    category: "Despliegue & DevOps",
    items: ["Vercel", "Render", "GitHub Actions", "Cloudinary"]
  },
  {
    category: "Herramientas & Infraestructura",
    items: ["Linux", "Vagrant", "Git / GitHub", "Arquitectura de Sistemas"]
  }
];