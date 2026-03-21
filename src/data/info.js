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
// 2. EL ECOSISTEMA FULLSTACK
  {
    id: 2,
    title: "Figuritas Store - E-Commerce Fullstack",
    category: "Full-Stack",
    description: "Plataforma e-commerce construida con arquitectura Monorepo. Cuenta con una tienda pública estática (diseño Glassmorphism) y un panel administrativo EJS renderizado en el servidor. Implementa operaciones CRUD, autenticación segura con Bcrypt y un Modo Demo con rutas protegidas mediante middlewares.",
    techStack: ["Node.js", "Express", "EJS", "MySQL", "Vanilla JS"],
    githubLink: "https://github.com/michelmassaad/Figuritas-store", 
    liveLink: "https://figuritas-store-figuritas-backend.vercel.app/",
    image: "/images/figuritas-store.png" // ¡Recordá sacar una captura linda de la tienda y guardarla acá!
  },
  // 3. LA INNOVACIÓN WEB3
  {
    id: 3,
    title: "KipuBank - Sistema Financiero Web3",
    category: "Web3",
    description: "Desarrollo y despliegue de un Smart Contract financiero en la red Ethereum (Sepolia). Implementa lógica segura de depósitos, retiros y validación de balances, con código 100% verificado en Etherscan.",
    techStack: ["Solidity", "Ethereum", "Smart Contracts"],
    githubLink: "https://github.com/michelmassaad/kipu-bank-v3", 
    liveLink: "https://sepolia.etherscan.io/address/0x0f7a2D9172e94305b3Ad5A6Ebf6e8e85890a7a93#code",
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
    description: "Recreación del clásico juego de la serpiente enfocado en el manejo de bucles de estado, detección de colisiones matriciales y renderizado dinámico en el DOM.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/michelmassaad/juego-snake", 
    liveLink: "https://michelmassaad.github.io/juego-snake/",
    image: "/images/comienzo_snake.png" // Recordá sacar una captura y guardarla acá
  },
  {
    id: 8,
    title: "Juego de Memoria Visual",
    category: "Frontend",
    description: "Aplicación interactiva para ejercitar la memoria. Implementa un sistema robusto de manejo de eventos, lógica de emparejamiento de matrices y temporizadores asíncronos.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/michelmassaad/juego-de-memoria", 
    liveLink: "https://michelmassaad.github.io/juego-de-memoria/",
    image: "/images/comienzo_memoria.png" // Recordá sacar una captura y guardarla acá
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
    items: ["Express.js", "React", "EJS", "HTML5/CSS3", "OpenCV", "APIs REST"]
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