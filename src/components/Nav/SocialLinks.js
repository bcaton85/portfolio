import React from "react";
import styles from "../../css/Nav/SocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
    <div className={styles.socialLink}>
      <a href='https://www.linkedin.com/in/brandon-caton-226b4a127/'>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin}></FontAwesomeIcon>
      </a>
    </div>
    <div className={styles.socialLink}>
      <a href='https://github.com/bcaton85'>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
      </a>
    </div>
  </div>
  );
}

export default SocialLinks;
