import React from "react";
import styles from "../css/Landing.module.css";
import content from '../content';
import Button from './Utilities/Button';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Landing() {
  return (
    <div className={styles.landing}>
      <Fade>
        <div className={styles.intro}>
            <h1>
                <span>{content.landing.greeting}</span>
                <br/>
                <span>{content.landing.name}</span>
            </h1>
            <h2>{content.landing.introParagraph}</h2>
            <Button url="/resume" input={content.landing.buttonText} />
        </div>
        <div>
          <img alt="" className={styles.profile} src="/images/profile-photo.png"></img>
        </div>
      </Fade>
    </div>
  );
}

export default Landing;
