import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vitLogo from '../assets/images/vit-logo.jpg';
import hbsLogo from '../assets/images/hbs-logo.png';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <div className="education-header">
              <img src={vitLogo} alt="VIT" className="institution-logo" />
              <div>
                <h3 className="vertical-timeline-element-title">BTech in Computer Science & Engineering (Core)</h3>
                <h4 className="vertical-timeline-element-subtitle">Vellore Institute of Technology</h4>
              </div>
            </div>
            <p>
              CGPA: 8.77 — Focused on data science, machine learning, and AI coursework
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <div className="education-header">
              <img src={hbsLogo} alt="Harvard Business School" className="institution-logo" />
              <div>
                <h3 className="vertical-timeline-element-title">Business Analytics & Economics</h3>
                <h4 className="vertical-timeline-element-subtitle">Harvard Business School</h4>
              </div>
            </div>
            <p>
              Passed With Honors — Strengthened foundation in business analytics and economic decision-making
            </p>
            <a
              href="https://drive.google.com/file/d/1X9ZByz7RGmKo2TZLXIdJll9Q686ObKo6/view"
              target="_blank"
              rel="noopener noreferrer"
              className="credential-link"
            >
              View Credential
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
