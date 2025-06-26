import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './subhyatra.css';

function Subhyatra({ darkMode }) {
  return (
    <>
     <div className="section-heading-wrapper">
  <h2 className="section-heading">My Projects</h2>
  <p className="section-subtext">
    A collection of real-world full-stack projects built using modern web technologies.
  </p>
</div>


      <div className={`project-card-flex ${darkMode ? 'dark' : 'light'}`}>
        <div className="project-image-left">
          <img
            src="/subhyatra.png.png"
            alt="Subhyatra Preview"
            className="project-img"
          />
        </div>

        <div className="project-details-right">
          <h3 className="project-title">Subhyatra</h3>
          <p className="project-description">
            Subhyatra is a full-stack MERN project for seamless bus, hotel, and car bookings.
            Users can search, filter, and book services while suppliers manage listings.
            Features include JWT authentication, date-based availability, and Stripe-powered payments.
          </p>

          <div className="tech-tags">
            <span>MERN</span>
            <span>JWT</span>
            <span>Stripe</span>
            <span>React Router</span>
          </div>

          <div className="key-features">
            <strong>Key Features:</strong>
            <ul>
              <li>Secure login with JWT</li>
              <li>Stripe integration for payments</li>
              <li>Date-based service availability</li>
            </ul>
          </div>

          <a
            href="https://github.com/jubindas/subhyatra"
            target="_blank"
            rel="noopener noreferrer"
            className="live-button"
          >
            <FaGithub style={{ marginRight: "6px" }} />
            Source Code
          </a>
        </div>
      </div>
    </>
  );
}

export default Subhyatra;
