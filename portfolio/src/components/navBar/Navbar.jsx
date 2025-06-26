import React, { useState } from 'react';
import './Navbar.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="logo">Jubin</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
  <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
</div>

    </nav>
  );
}

export default Navbar;
