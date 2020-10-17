import React from "react";
import GFinder_1 from "../../images/gfinder1.png";
import GFinder_2 from "../../images/gfinder2.png";
import GFinder_3 from "../../images/gfinder3.png";
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
            <div data-src={GFinder_1} />
            <div data-src={GFinder_2} />
            <div data-src={GFinder_3} />
          </AwesomeSlider>
          <div className="row">
            <div className="col-lg-6">
              <a href="https://g-finder-trending.netlify.app/" target="_blank">
                <button className="btn-project">VIEW PROJECT</button>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="https://github.com/n-yuan/g-finder" target="_blank">
                <button className="btn-project"> VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="single-project-description-header">
            A web application help you find top things for Github.
          </h2>
          <p className="single-project-description-content">
            • A web application that could find GitHub Trending Repositories,
            search Github users, get their information and repositories, explore
            the trending projects on GitHub
          </p>
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
