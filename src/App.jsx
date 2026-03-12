import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience'; // <-- Lo importas
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-techBlue selection:text-white">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto space-y-4"> {/* Controlamos los espacios aquí */}
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;