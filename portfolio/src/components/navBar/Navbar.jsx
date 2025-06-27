import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
 



  return (
    <nav className="custom-navbar">
      <div className="logo">Jubin</div>

     

      {/* Navigation links */}
      <div className={`nav-links show-menu`}>
        <a href="#about" >About</a>
        <a href="#skills" >Skills</a>
        <a href="#projects" >Projects</a>
        <a href="#contact" >Contact</a>
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
