import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Experience.scss';

function Experience() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2024 - March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Gen AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Caterpillar India — Thrivallur, Tamil Nadu</h4>
            <p>
              First intern to co-lead a $2K financial project, coordinating analysis and stakeholder reporting.
            </p>
            <ul style={{ color: 'rgb(39, 40, 34)', paddingLeft: '20px', marginTop: '8px', fontSize: '0.9rem' }}>
              <li>Achieved <strong>73% faster financial insights</strong> by building a custom generative AI model for enterprise-wide long-report analysis</li>
              <li>Increased <strong>user trust by 53%</strong> by deploying a RAG model with citations from thousands of internal docs</li>
              <li>Reduced <strong>research time by 89%</strong> by optimizing the RAG pipeline and delivering multi-format outputs</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
