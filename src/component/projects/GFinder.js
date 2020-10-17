import React, { useState, useEffect, useRef } from "react";
import TeamLoggerImg_1 from "../../images/team-logger.png";
import TeamLoggerImg_2 from "../../images/members.png";
import TeamLoggerImg_3 from "../../images/add-members.png";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const TeamLogger = () => {
  return (
    <div className="single-project-wrapper">
      <h1 className="single-project-header">G-finder</h1>
      <div className="row">
        <div className="col-lg-6">
          <AwesomeSlider
            animation="foldOutAnimation"
            className="awesome-slider-projects"
            bullets={false}
          >
            <div data-src={TeamLoggerImg_1} />
            <div data-src={TeamLoggerImg_2} />
            <div data-src={TeamLoggerImg_3} />
          </AwesomeSlider>
          <div className="row">
            <div className="col-lg-6">
              <button className="btn-project">VIEW PROJECT</button>
            </div>
            <div className="col-lg-6">
              <button className="btn-project"> VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="single-project-description-header">
            A web application that could search Github users, get their
            information and repositories, explore the trending projects on
            GitHub, and sort trending projects by languages and time
          </h2>
          <p className="single-project-description-content">
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
            Bootstrap, Responsive design for front-end development
          </p>
          <p className="single-project-description-content">
            • Used Context API for state management, Animate.css for animations
          </p>
          <p className="single-project-description-content">
            • Getting raw data from GitHub Developer API
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamLogger;
