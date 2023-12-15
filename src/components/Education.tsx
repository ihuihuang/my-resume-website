import React from 'react';
import styles from './Education.module.css'; 

const Education: React.FC = () => {
  return (
    <div className={`${styles.education} section`} id="education">
      <h2>Education</h2>
      <ul>
        <li>
          <strong>University of Some School</strong> - M.S. in Something (Los Angeles CA, 20XX-20XX)
        </li>
        <li>
          <strong>National What is It University</strong> - B.B.A. in Not Right Now & B.B.A. in Somewhere (Somewhere, 20XX-20XX)
        </li>
      </ul>
    </div>
  );
};

export default Education;
