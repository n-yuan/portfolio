import React from "react";
import TeamLogger from "./projects/TeamLogger";
import GFinder from "./projects/GFinder";
import Portfolio from "./projects/Portfolio";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <SectionHeader name={"Projects"} description={"View my projects"} />
      <TeamLogger />
      <GFinder />
      <Portfolio />
    </div>
  );
};

export default Projects;
