import React, { useState, useEffect } from 'react';
import Navbar from './components/navBar/Navbar.jsx';
import About from './components/about/About.jsx';
import Skill from './components/skills/Skill.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === null ? true : saved === 'true'; // default: dark
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Skill darkMode={darkMode} />
    </div>
  );
}

export default App;
