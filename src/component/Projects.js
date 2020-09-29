import React from "react";
import TeamLogger from "../images/team-logger.png";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-heading-wrapper">
        <p className="projects-caption">View my projects</p>
        <h1 className="projects-header"> Projects</h1>
        <div className="projects-dash mx-auto"></div>
      </div>
      <div className="projects-wrapper">
        <div className="single-project-wrapper">
          <h1>Team Logger</h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={TeamLogger}
                alt="team-logger"
                style={{ width: "600px" }}
              />
              <div className="col-lg-6">
                <button className="view-project-btn">VIEW PROJECT</button>
              </div>
              <div className="col-lg-6">
                <button className="view-code-btn"> VIEW CODE</button>
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                similique dolor nam, voluptate ipsa blanditiis deserunt placeat
                nulla sequi at dolores mollitia? Deserunt asperiores at totam
                saepe esse ex debitis?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet similique dolor nam, voluptate ipsa
                blanditiis deserunt placeat nulla sequi at dolores mollitia?
                Deserunt asperiores at totam saepe esse ex debitis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
