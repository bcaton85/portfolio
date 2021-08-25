import React from "react";
import Content from '../content';
import Section from './Utilities/Section';
import SocialLinks from './Nav/SocialLinks';
import styles from '../css/Contact.module.css';

function Contact() {
  return (
    <Section title="Contact" className={styles.contactContainer}>
      <div className={styles.contact}>
        <h3 className={styles.contactDescription}>Have any questions or interested in working together? Reach out!</h3>
        <div className={styles.contactLinks}><span>{Content.email}</span><SocialLinks/></div>
      </div>
    </Section>   
  );
}

export default Contact;
