import React from "react";
import Icon from './icon';
import styles from "../../css/Technologies/TechList.module.css";

function TechList({icons, heading}) {
  console.log(icons);
  return (
      <div className={styles.techList}>
          <h2 className={styles.listHeading}>{heading}</h2>
          {icons.map((icon)=><Icon name={icon.name} image={icon.image}></Icon>)}
      </div>
  );
}

export default TechList;
