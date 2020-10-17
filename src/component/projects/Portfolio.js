import React from "react";
import Portfolio_1 from "../../images/portfolio1.png";
import Portfolio_2 from "../../images/portfolio2.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const TeamLogger = () => {
  return (
    <div className="single-project-wrapper">
      <h1 className="single-project-header">Portfolio</h1>
      <div className="row">
        <div className="col-lg-6">
          <AwesomeSlider
            animation="foldOutAnimation"
            className="awesome-slider-projects"
            bullets={false}
          >
            <div data-src={Portfolio_1} />
            <div data-src={Portfolio_2} />
          </AwesomeSlider>
          <div className="row">
            <div className="col-lg-6">
              <button className="btn-project" disabled>
                THIS PROJECT
              </button>
            </div>
            <div className="col-lg-6">
              <a href="https://github.com/n-yuan/portfolio" target="_blank">
                <button className="btn-project"> VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="single-project-description-header">
            My portfolio website.
          </h2>
          <p className="single-project-description-content">
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
            Bootstrap, Responsive design for front-end development
          </p>
          <p className="single-project-description-content">
            • Used Node.js, MongoDB, Express, Mongoose, RESTful API for back-end
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamLogger;
