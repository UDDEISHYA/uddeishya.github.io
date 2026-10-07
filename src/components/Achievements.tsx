import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import bookImg from '../assets/images/book.jpeg';
import '../assets/styles/Achievements.scss';

function Achievements() {
  return (
    <div id="achievements">
      <div className="items-container">
        <h1>Achievements & Extracurricular</h1>
        <div className="achievements-grid">
          <div className="achievement-card book-card">
            <div className="achievement-image">
              <img src={bookImg} alt="Getting Ahead With Prompts" />
            </div>
            <div className="achievement-content">
              <div className="achievement-icon">
                <FontAwesomeIcon icon={faTrophy} size="2x" />
              </div>
              <h3>Bestselling Global Author</h3>
              <h4>"Getting Ahead With Prompts"</h4>
              <p>
                Achieved international bestseller status — <strong>Top 300 Kindle Store</strong> and <strong>Top 800 Amazon</strong>. A hands-on guide empowering readers in <strong>15+ countries</strong> to master AI tools in the age of automation.
              </p>
            </div>
          </div>

          <div className="achievement-card ieee-card">
            <div className="achievement-content">
              <div className="achievement-icon">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <h3>IEEE Student Chair</h3>
              <h4>IEEE Student Branch — VIT Bhopal University</h4>
              <p className="achievement-date">May 2024 – Present</p>
              <p>
                Grew branch reach <strong>nearly 500%</strong> by leading three strategic initiatives and executing targeted growth plans. Led <strong>9+ national IEEE events</strong> and implemented a SMART stakeholder model unifying faculty, sponsors, and volunteers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
