import React from 'react';
import './about.css';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function About({ darkMode }) {
  return (
   <div className={`profile-card ${darkMode ? 'dark' : 'light'}`} id="about">
      <h1 className="name">Jubin Rohidas</h1>
      <h2 className="role">Web Developer</h2>

      <div className="contact">
        <span><MdEmail /> jubinrohidas9@gmail.com</span>
        <span><GoLocation /> Sivasagar, Assam</span>
      </div>

      <p className="description">
        A goal-oriented software developer with experience in building web
        applications using modern technologies like React, Next.js, and more.
        Seeking to leverage my technical skills to deliver exceptional user experiences.
      </p>

      <div className="links">
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
        <div className="social-icons">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
