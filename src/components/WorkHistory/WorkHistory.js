import React from "react";
import Content from '../../content';
import Section from '../Utilities/Section';
import Button from '../Utilities/Button';
import WorkEntry from './WorkEntry';
import styles from '../../css/WorkHistory/WorkHistory.module.css';

function WorkHistory() {
  return (
    <Section title="Work History">
        {Content.workHistory.map((workEntry, index)=>{
            return (<WorkEntry key={index} {...workEntry}></WorkEntry>)
        })}
        <div className={styles.resumeButton}>
          <Button url="/resume" input={"Detailed Resume"} />
        </div>
    </Section>   
  );
}

export default WorkHistory;
