import React from 'react';
import './skill.css';

// React Icons
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiVercel
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const Skill = ({darkMode}) => {
  return (
     <div className={`skills-container ${darkMode ? 'dark' : 'light'}`} id="skills">
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I've worked with throughout my projects and experience
      </p>

      {/* Frontend */}
      <div className="skill-section">
        <h3 className="section-title">Front End</h3>
        <div className="skill-icons">
          <div className="skill-item"><SiJavascript /><p>JavaScript</p></div>
          <div className="skill-item"><FaReact /><p>React.js</p></div>
          <div className="skill-item"><SiHtml5 /><p>HTML</p></div>
          <div className="skill-item"><SiCss3 /><p>CSS</p></div>
          <div className="skill-item"><SiBootstrap /><p>Bootstrap</p></div>
        </div>
      </div>

      {/* Backend */}
      <div className="skill-section">
        <h3 className="section-title">Back End</h3>
        <div className="skill-icons">
          <div className="skill-item"><FaNodeJs /><p>Node.js</p></div>
          <div className="skill-item"><SiExpress /><p>Express.js</p></div>
        </div>
      </div>

      {/* Databases */}
      <div className="skill-section">
        <h3 className="section-title">Databases</h3>
        <div className="skill-icons">
          <div className="skill-item"><SiMongodb /><p>MongoDB</p></div>
          <div className="skill-item"><SiMysql /><p>MySQL</p></div>
        </div>
      </div>

      {/* Tools */}
      <div className="skill-section">
        <h3 className="section-title">Tools & Platforms</h3>
        <div className="skill-icons">
          <div className="skill-item"><FaGitAlt /><p>Git</p></div>
          <div className="skill-item"><FaGithub /><p>GitHub</p></div>
          <div className="skill-item"><DiVisualstudio /><p>VS Code</p></div>
          <div className="skill-item"><SiPostman /><p>Postman</p></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skill;
