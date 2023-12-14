import React from 'react';
import styles from './Projects.module.css'; 

const Projects: React.FC = () => {
  return (
    <div className={styles.projects} id="projects">
      <h2>Projects Experience</h2>
      <div>
        <h3>Not A Fun Project to Know (Feb. 20XX - Jun. 20XX)</h3>
        <p>Developed a web application using React for creating shareable MEMO snippets, enhanced by a REST API with Node/Express.js and MongoDB.</p>
      </div>
      {/* Add more projects */}
    </div>
  );
};

export default Projects;