import React from 'react';
import styles from './ProfessionalExperience.module.css';

const ProfessionalExperience: React.FC = () => {
  return (
    <div className={styles.professionalExperience} id="professional-experience">
      <h2>Professional Experience</h2>
      <div>
        <h3>FFFFFFFFFF - Software Engineer (Remote, Sep. 20XX - Jun. 20XX)</h3>
        <p>Contributed to the software development lifecycle by designing and implementing robust data integration pipelines for renewable energy, leveraging Kubernetes, and ensuring smooth product releases.</p>
        {/* Additional details can be added similarly */}
      </div>
      <div>
        <h3>MMMMM - Software Engineer (Pasadena CA, Aug. 20XX - Sep. 20XX)</h3>
        <p>Developed a full-stack web application for a data analytics platform utilizing Node, React, Express, MySQL, and Redis, enhancing user experience and data processing efficiency.</p>
        {/* Additional details can be added similarly */}
      </div>
      {/* Add more experiences */}
    </div>
  );
};

export default ProfessionalExperience;
