import React from 'react';
import "./skills.css";
import Languages from "./Languages";
import DevToolsAndEnv from "./DevToolsAndEnv";
import FrameWorksAndLib from './FrameworksAndLib';
import Databases from './Databases';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Skills</span>
    
      <div className="skills__container container grid">
        <Languages />
        <DevToolsAndEnv />
        <FrameWorksAndLib/>
        <Databases/>
      </div>
    </section>
  );
};

export default Skills;
