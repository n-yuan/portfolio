import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ProjectsHeading from "./component/ProjectsHeading";

import Projects from "./component/Projects";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectsHeading />
      <Projects />
    </div>
  );
}

export default App;
