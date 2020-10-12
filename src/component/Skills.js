import React from "react";
import TeamLogger from "./projects/TeamLogger";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <div id="skills" className="section-container">
      <SectionHeader name={"Skills"} description={"My skills"} />
      <div style={{ height: "500px" }} className="skills-section">
        <div className="skill-header">
          <h3>Tech Skills</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
