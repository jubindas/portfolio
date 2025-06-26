import React, { useState, useEffect } from 'react';
import Navbar from './components/navBar/Navbar.jsx';
import About from './components/about/About.jsx';
import Skill from './components/skills/Skill.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === null ? true : saved === 'true';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div id="about">
        <About darkMode={darkMode} />
      </div>

      <div id="skills">
        <Skill darkMode={darkMode} />
      </div>

      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>

      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
