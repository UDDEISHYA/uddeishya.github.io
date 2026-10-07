import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { trackOutboundClick } from '../analytics';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/UDDEISHYA" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('GitHub', 'footer')}><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/uddeishya-kumar/" target="_blank" rel="noopener noreferrer" onClick={() => trackOutboundClick('LinkedIn', 'footer')}><LinkedInIcon/></a>
        <a href="mailto:pkumar31081969@gmail.com" onClick={() => trackOutboundClick('Email', 'footer')}><EmailIcon/></a>
      </div>
      <p>Uddeishya Kumar &copy; {new Date().getFullYear()} &middot; Built with React</p>
    </footer>
  );
}

export default Footer;
