import React from "react";
import styles from '../../css/Utilities/Section.module.css';
import Fade from 'react-reveal/Fade';

function Section({children, title, className}) {
  return (
    <div className={className || "container"}>
        <Fade>
            <div className={styles.sectionContent}>
                <h1 className={styles.sectionHeader}>
                    {title}
                    <span className={styles.sectionHeaderSpan}></span>
                </h1>
                <div>
                    {children}
                </div>
            </div>
        </Fade>
    </div>
  );
}

export default Section;
