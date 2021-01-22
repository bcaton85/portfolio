import React from "react";
import styles from "../../css/Technologies/Icon.module.css";

function Icon({name, image}) {
  return (
    <div className={styles.icon}>
        <img className={styles.iconImage} src={`/images/technologies/${image}`}></img>
        <span className={styles.iconSpan}>{name}</span>
    </div>
  );
}

export default Icon;
