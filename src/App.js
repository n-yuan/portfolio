import React from "react";
import Navbar from "./component/Navbar";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container"></div>
      <div className="caption-container">
        <div className="caption-wrapper">
          <h4 className="caption-greeting">Hello, I'm</h4>
          <h1 className="caption-name">NAN YUAN</h1>
          <h4 className="caption-title">
            Full-stack developer| Front-end developer
          </h4>
          <div className="icons-wrapper">
            <i class="fab fa-linkedin icon-linkedin"></i>
            <i class="fab fa-github icon-github"></i>
            <i class="fas fa-at icon-at"></i>
            <i class="fas fa-id-card icon-id-card"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
