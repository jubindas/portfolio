import React from "react";
import "./about.css";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About({ darkMode }) {
  return (
    <div className={`profile-card ${darkMode ? "dark" : "light"}`} id="about">
      <h1 className="name">Jubin Rohidas</h1>
      <h2 className="role">Web Developer</h2>

      <div className="contact">
       <span>
    <MdEmail />
    <a href="mailto:jubinrohidas9@gmail.com">jubinrohidas9@gmail.com</a>
  </span>
        <span>
          <GoLocation /> Sivasagar, Assam
        </span>
      </div>

      <p className="description">
        Full stack developer with expertise in both frontend and backend
        technologies, including HTML, CSS, JavaScript, React, Node.js, Express,
        and MongoDB. Dedicated to building scalable, responsive, and
        user-centric web applications. Combines clean code with thoughtful
        design to deliver seamless digital experiences across the stack
      </p>

      <div className="links">
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
        <div className="social-icons">
          <a
            href="https://github.com/jubindas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
