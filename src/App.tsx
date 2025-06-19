import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Acheivement';

function App() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main>
        <Education />
        <Experience />
        <Projects />
        <Achievements/>
        <Skills />
      </main>
    </div> 
  );
}

export default App;