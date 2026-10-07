import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImg from '../assets/images/profile.jpeg';
import { trackOutboundClick } from '../analytics';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Uddeishya Kumar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/UDDEISHYA" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('GitHub', 'hero')}><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/uddeishya-kumar/" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('LinkedIn', 'hero')}><LinkedInIcon/></a>
            <a href="mailto:pkumar31081969@gmail.com" onClick={() => trackOutboundClick('Email', 'hero')}><EmailIcon/></a>
          </div>
          <h1>Uddeishya Kumar</h1>
          <p>Empowering Business Intuition With Data Intelligence and AI</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/UDDEISHYA" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('GitHub', 'hero')}><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/uddeishya-kumar/" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('LinkedIn', 'hero')}><LinkedInIcon/></a>
            <a href="mailto:pkumar31081969@gmail.com" onClick={() => trackOutboundClick('Email', 'hero')}><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
