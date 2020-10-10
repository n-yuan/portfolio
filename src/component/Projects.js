import React from "react";
import TeamLogger from "./projects/TeamLogger";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <SectionHeader name={"Projects"} description={"View my projects"} />
      <TeamLogger />
      <TeamLogger />
      <TeamLogger />
    </div>
  );
};

export default Projects;
