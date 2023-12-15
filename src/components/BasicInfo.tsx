import React from 'react';
import styles from './BasicInfo.module.css'; // Make sure to create this CSS module file

const BasicInfo: React.FC = () => {

  const imagePath = '/images/IMG_2674_.jpg';
    // Function to handle smooth scroll
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className={`${styles.basicInfo} section`}>
      <div className={styles.textSection}>
        <h1>My Name</h1>
        <p className={styles.title}>Title</p>
        <p>A brief one - two sentence summary about myself and my profession.</p>
        <nav className={styles.links}>
        <button onClick={() => handleScroll('education')}>Education</button>
        <button onClick={() => handleScroll('professional-experience')}>Professional Experience</button>
        <button onClick={() => handleScroll('projects')}>Projects</button>
        </nav>
      </div>
      <div className={styles.photoSection}>
      <img src={imagePath} alt="Your Name" className={styles.portrait} />
        <div className={styles.portrait}>A big self portrait photo</div>
      </div>
    </div>
  );
};

export default BasicInfo;
