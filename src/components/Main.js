import React from "react";
import styles from "../css/Main.module.css";
import Landing from './Landing';
import Technologies from './Technologies/technologies';
import WorkHistory from './WorkHistory/WorkHistory';
import Contact from './Contact';

function Main() {
  return (
      <div className={styles.main}>
          <Landing></Landing>
          <Technologies></Technologies>
          {/* <WorkHistory></WorkHistory> */}
          <Contact></Contact>
      </div>
  );
}

export default Main;
