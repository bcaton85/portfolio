import React from "react";
import Content from '../../content';
import TechList from './techlist';
import Section from '../Utilities/Section';

function Technologies() {
  return (
    <Section title="My Skills">
        {Object.keys(Content.technologies).map((topic, index)=>{
            return (
                <TechList 
                icons={Content.technologies[topic]} 
                key={index} 
                heading={topic} 
                ></TechList>
            );
        })}
    </Section>   
  );
}

export default Technologies;
