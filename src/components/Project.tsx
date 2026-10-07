import React from "react";
import siftoryImg from '../assets/images/siftory.png';
import { trackEvent } from '../analytics';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/UDDEISHYA/Siftory" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'Siftory')}><img src={siftoryImg} className="zoom" alt="Siftory" width="100%"/></a>
                <a href="https://github.com/UDDEISHYA/Siftory" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'Siftory')}><h2>Siftory</h2></a>
                <p>Automated business analytics workflows using multi-agent AI on 8M+ row enterprise datasets. Architected a 43-template system with 5-level complexity routing, orchestrating 15 agents for hypothesis generation, RCA, and opportunity sizing with 4-layer validation including Simpson's paradox detection.</p>
            </div>
            <div className="project">
                <a href="https://github.com/UDDEISHYA/A_B-Testing-Marketing-Analytics" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'Marketing A/B Test Analysis')}>
                    <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px 8px 0 0'}}>
                        <span style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', padding: '20px'}}>Marketing A/B Test Analysis</span>
                    </div>
                </a>
                <a href="https://github.com/UDDEISHYA/A_B-Testing-Marketing-Analytics" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'Marketing A/B Test Analysis')}><h2>Marketing A/B Test Analysis</h2></a>
                <p>Analyzed a real-world marketing experiment across 588K users to measure ad-driven conversion lift. Validated 43% conversion lift via Chi-Square A/B testing, revealed 17.14% conversion in high-exposure users through dose-response cohort segmentation, and recommended peak campaign windows.</p>
            </div>
            <div className="project">
                <a href="https://github.com/UDDEISHYA/UBER_Trip_Analysis" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'UBER Revenue Optimization')}>
                    <div className="project-placeholder" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px 8px 0 0'}}>
                        <span style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold', textAlign: 'center', padding: '20px'}}>Revenue Optimization for UBER Trips</span>
                    </div>
                </a>
                <a href="https://github.com/UDDEISHYA/UBER_Trip_Analysis" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('project_click', 'projects', 'UBER Revenue Optimization')}><h2>Revenue Optimization for UBER Trips</h2></a>
                <p>Enabled 11% revenue growth by designing Power BI dashboards tracking 5+ KPIs for cross-functional, data-driven pricing and operations. Improved peak cab allocation by 16% and optimized drivers' trip efficiency by 29% through distance and duration-based analytics.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
