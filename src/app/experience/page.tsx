import ProfileImage from '@/components/layout/ProfileImage';
import SectionHeader from '@/components/layout/SectionHeader';
import React from 'react';
import './styles.css';

export default function Page() {
  return (
    <div className="page-container">
      <div className="profile-image-container">
        <ProfileImage />
      </div>

      {/* Right experience Section */}
      <div className="experience-section">
        <SectionHeader title="Experience" />

        {/* Experience details */}
        <div className="experience-details">
          {/* Experience card */}
          <div className="experience-card">
            <h3>Digitech Infra Associates - MERN Developer</h3>
            <p>19 March 2024 – Present</p>
            <ul>
              <li>Worked on an e-commerce website, developing vendor and admin dashboards with HTML, CSS, and JavaScript.</li>
              <li>Developed interactive features that enhanced user engagement and streamlined vendor/admin tasks.</li>
              <li>Architected a full-stack customer review website from scratch using the MERN stack.</li>
              <li>Developed a CRM system, streamlining processes for over 10k employees and 100k customers.</li>
              <li>Improved customer interaction tracking, resulting in a 30% increase in customer satisfaction scores.</li>
            </ul>
          </div>

          {/* Professional projects section */}
          <div className="project-card">
            <h3>Professional Projects</h3>

            <div className="project">
              <h4 className="project-title">Bachat Mart – E-commerce Website</h4>
              <p className="project-description">
                Collaborated with a Laravel developer to integrate the frontend and backend, ensuring smooth communication and data flow.
              </p>
            </div>

            <div className="project">
              <h4 className="project-title">Apna Connection – Social Networking Platform</h4>
              <p className="project-description">
                Developed with the MERN stack, connecting individuals within specific communities.
              </p>
            </div>

            <div className="project">
              <h4 className="project-title">Pakistan Cables CRM – Customer Relationship Management</h4>
              <p className="project-description">
                Created a CRM system using NestJS and PostgreSQL to manage sales and purchases for employees and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
