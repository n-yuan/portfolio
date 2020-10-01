import React from "react";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        <div className="background-img"></div>
        <h4 className="home-greeting">Hello, I'm</h4>
        <h1 className="home-name">NAN YUAN</h1>
        <h4 className="home-title">
          Full-stack developer| Front-end developer
        </h4>
        <div className="icons-wrapper">
          <i class="fab fa-linkedin fa-lg icon-linkedin"></i>
          <i class="fab fa-github fa-lg icon-github"></i>
          <i class="fas fa-at icon-at fa-lg "></i>
          <i class="fas fa-id-card icon-id-card fa-lg "></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
