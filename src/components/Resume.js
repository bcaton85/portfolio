import React from "react";
import styles from '../css/Resume.module.css';
import Button from './Utilities/Button';

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.resumeDescription}>Feel free to reach out for more information</h2>
      <div className={styles.resume}>
        <img alt="Brandon Caton Resume" className={styles.resumeImage} src="images/resume.png"/>
      </div>
      <Button url="/" input="Home"></Button>
    </div>
  );
}

export default Resume;
