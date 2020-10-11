import React from "react";
import TeamLogger from "./projects/TeamLogger";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <div id="skills" className="projects-container">
      <SectionHeader name={"Skills"} description={"My skills"} />
      <TeamLogger />
    </div>
  );
};

export default Skills;
