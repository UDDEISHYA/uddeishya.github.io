import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Regression",
    "Classification",
    "Statistical Modeling",
];

const labelsSecond = [
    "Power BI",
    "DAX",
    "Power Query",
    "Advanced Excel",
    "SQL",
    "A/B Testing",
];

const labelsThird = [
    "LangChain",
    "LangGraph",
    "RAG",
    "AWS",
    "Azure",
    "Python",
    "C++",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>Experienced in building statistical models, ML pipelines, and conducting hypothesis testing and A/B experiments to drive data-informed business decisions across large-scale datasets.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Analytics & Business Intelligence</h3>
                    <p>Proficient in designing interactive BI dashboards, tracking KPIs, and delivering actionable insights that empower cross-functional teams to make data-driven decisions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>GenAI & Cloud Platforms</h3>
                    <p>Hands-on experience building enterprise-grade GenAI solutions including RAG pipelines and multi-agent systems, backed by AWS and Azure cloud certifications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
