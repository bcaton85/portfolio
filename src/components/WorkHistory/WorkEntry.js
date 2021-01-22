import React from "react";
import styles from "../../css/WorkHistory/WorkEntry.module.css";

function WorkEntry({company,position,dates,image,description}) {
  let imageSource = `images/workhistory/${image}`;
  return (
    <div className={styles.workEntry}>
      <div className={styles.imageContainer}>
        <img alt={image} src={imageSource}></img>
      </div>
      <div className={styles.description}>
        <h2 className={styles.header}>{company}</h2>
        <h4 className={styles.subHeader}><span>{position}</span><span>{dates}</span></h4>
        <ul className={styles.descriptionList}>
          {description.map((line,index)=>{
            return (<li className={styles.line} key={index}>{line}</li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default WorkEntry;
