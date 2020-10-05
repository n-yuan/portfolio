import React, { useState, useEffect, useRef } from "react";
import TeamLoggerImg_1 from "../../images/team-logger.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const TeamLogger = () => {
  return (
    <div className="single-project-wrapper">
      <h1 className="single-project-header">Team Logger</h1>
      <div className="row">
        <div className="col-lg-6">
          <AwesomeSlider
            animation="foldOutAnimation"
            className="awesome-slider-projects"
            style={{borderRedius:"100px"}}
            bullets={false}
          >
            <div data-src={TeamLoggerImg_1} />
            <div data-src={TeamLoggerImg_1} />
            <div data-src={TeamLoggerImg_1} />
          </AwesomeSlider>
          <div className="row">
            <div className="col-lg-6">
              <button className="view-project-btn">VIEW PROJECT</button>
            </div>
            <div className="col-lg-6">
              <button className="view-code-btn"> VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="single-project-description-header">
            My portfolio website.
          </h2>
          <p className="single-project-description-content">
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
            Bootstrap, Responsive design for front-end development development.
          </p>
          <p className="single-project-description-content">
            •Used Node.js, MongoDB, Express, Mongoose, RESTful API for back-end
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamLogger;
