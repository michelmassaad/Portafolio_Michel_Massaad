export default {
  darkMode: 'class', // <--- IMPORTANTE: Esto permite activar el modo claro/oscuro manualmente
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        techBlue: "#3b82f6",
      },
    },
  },
  plugins: [],
}