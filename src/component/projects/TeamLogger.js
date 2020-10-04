import React from "react";
import TeamLoggerImg_1 from "../../images/team-logger.png";

const TeamLogger = () => {
  return (
    <div className="single-project-wrapper">
      <h1 className="single-project-header">Team Logger</h1>
      <div className="row">
        <div className="col-lg-6">
          <img
            src={TeamLoggerImg_1}
            alt="team-logger"
            className="single-project-image"
          />
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
