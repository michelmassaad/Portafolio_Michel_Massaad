# 🚀 Portafolio Profesional | Michel Massaad

Un portafolio web personal moderno, interactivo y optimizado, diseñado para destacar mi experiencia en desarrollo de software, proyectos técnicos y formación académica.

🌐 **[Ver Portafolio en Vivo](https://michelmassaad.github.io/Portafolio_Michel_Massaad/)**

## ✨ Características Principales

* **Arquitectura Basada en Componentes:** Construido desde cero modularizando cada sección (Hero, Experiencia, Proyectos, etc.) para mantener un código limpio y escalable.
* **Modo Claro / Oscuro Dinámico:** Implementado nativamente utilizando variables CSS avanzadas para una transición fluida y un control total sobre la paleta de colores.
* **Totalmente Responsivo:** Diseño adaptado (Mobile-First) para funcionar perfectamente en cualquier dispositivo.
* **Optimizado para Reclutadores:** Accesos directos a CV en PDF, enlaces claros a repositorios y estructura pensada para lectura rápida.

## 🛠️ Stack Tecnológico

* **Frontend:** React.js
* **Herramienta de Construcción:** Vite
* **Estilos:** Tailwind CSS + CSS Puro (para variables de tema)
* **Iconos:** React Icons (`react-icons/fi`)
* **Despliegue:** GitHub Pages + `gh-pages`

---

## 💻 Instalación y Uso Local

Si deseas clonar este proyecto para verlo o editarlo en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:

```bash
git clone https://github.com/michelmassaad/Portafolio_Michel_Massaad.git
```

2. Entrar al directorio del proyecto:

```bash
cd Portafolio_Michel_Massaad
```

3. Instalar las dependencias:

```bash
npm install
```

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

---

## 🚀 Guía de Despliegue (Deploy en GitHub Pages)

*Nota personal para futuras actualizaciones.*

Para compilar el código de React y subir los cambios a producción (GitHub Pages), se configuró un script automatizado. Solo es necesario ejecutar el siguiente comando en la terminal:

```bash
npm run deploy
```

### ¿Qué hace este comando?

1. Ejecuta `npm run build` (Vite compila el código optimizado en la carpeta `dist`).
2. Ejecuta `gh-pages -d dist` (Toma esa carpeta y la empuja forzadamente a la rama `gh-pages`).

### ⚠️ Checklist en caso de fallos (Pantalla en blanco)

Si la página se ve en blanco después de un deploy, verificar:

1. **Configuración en GitHub:** Ir a `Settings` > `Pages`. En `Build and deployment`, asegurar que el `Source` esté en **Deploy from a branch** y la rama seleccionada sea **`gh-pages`**.
2. **Propiedad `homepage`:** Confirmar que en el `package.json` exista la propiedad `"homepage": "https://michelmassaad.github.io/Portafolio_Michel_Massaad/"`.
3. **Configuración de Vite:** Confirmar que en `vite.config.js` esté declarada la propiedad `base: '/Portafolio_Michel_Massaad/'`.
4. **Caché:** Abrir la web en una pestaña de incógnito o presionar `Ctrl + F5`.

---

## 👨‍💻 Autor y Contacto

**Michel Massaad**

* **Rol:** Estudiante de Sistemas (UTN) | Software Developer
* **GitHub:** [github.com/michelmassaad](https://github.com/michelmassaad)
* **LinkedIn:** [linkedin.com/in/michelmassaad](https://www.linkedin.com/in/michelmassaad)
* **Currículum Vitae:** [Ver / Descargar CV](https://drive.google.com/file/d/1oCPZVweegsNWvPIvkfkqvS9LTw1C8EGC/view?usp=sharing)