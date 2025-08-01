import React, { useState } from "react";
import "./navBar.css";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="custom-navbar">
      <div className="logo">Jubin</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
