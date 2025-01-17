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
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="work-experience">
        <WorkExperience />
      </section>
      <section id="education">
        <Education />
      </section>

      {/* Dock fijo al final */}
      <DockComponent />
      <Footer />
    </div>
  );
};

export default App;
