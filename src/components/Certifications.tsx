import React from "react";
import awsLogo from '../assets/images/aws-logo.webp';
import microsoftLogo from '../assets/images/microsoft-logo.webp';
import '../assets/styles/Certifications.scss';

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2026",
    logo: awsLogo,
    verifyLink: "https://www.credly.com/badges/97b2ab27-f86a-4152-addb-62871879f9c4/public_url",
  },
  {
    title: "DP900: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "January 2026",
    logo: microsoftLogo,
    verifyLink: "https://learn.microsoft.com/en-gb/users/uddeishyakumar-7788/credentials/154ea960af8dcee7",
  },
  {
    title: "AZ900: Azure Cloud Fundamentals",
    issuer: "Microsoft",
    date: "September 2025",
    logo: microsoftLogo,
    verifyLink: "https://learn.microsoft.com/en-us/users/uddeishyakumar-7788/credentials/aad7b3a89e38dee8",
  },
];

function Certifications() {
  return (
    <div id="certifications">
      <div className="items-container">
        <h1>Certifications</h1>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-logo">
                <img src={cert.logo} alt={cert.issuer} />
              </div>
              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-link"
              >
                Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
