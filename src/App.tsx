import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
