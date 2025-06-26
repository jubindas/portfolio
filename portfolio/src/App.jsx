import React, { useState, useEffect } from 'react';
import Navbar from './components/navBar/Navbar.jsx';
import About from './components/about/About.jsx';
import Skill from './components/skills/Skill.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
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
