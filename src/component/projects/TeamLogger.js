import React from "react";
import TeamLoggerImg_1 from "../../images/team-logger.png";
import TeamLoggerImg_2 from "../../images/logs.png";
import TeamLoggerImg_3 from "../../images/members.png";
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
            bullets={false}
          >
            <div data-src={TeamLoggerImg_1} />
            <div data-src={TeamLoggerImg_2} />
            <div data-src={TeamLoggerImg_3} />
          </AwesomeSlider>
          <div className="row">
            <div className="col-lg-6">
              <a href="https://team-logger-tool.netlify.app" target="_blank">
                <button className="btn-project">VIEW PROJECT</button>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="https://github.com/n-yuan/team-logger" target="_blank">
                <button className="btn-project"> VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="single-project-description-header">
            An Efficient and simple tool that can improve team work experience
            and boost productivity.
          </h2>
          <p className="single-project-description-content">
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks, Redux,
            Redux-thunk, Bootstrap, Responsive design for front-end development
            development.
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
