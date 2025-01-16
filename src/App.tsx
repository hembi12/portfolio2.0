import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Importamos el Dock desde su componente
import DockComponent from './components/DockComponent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      {/* Dock fijo al final */}
      <DockComponent />
      <Footer />
    </div>
  );
};

export default App;
