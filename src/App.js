import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="content-wrapper">
        <div className="container">
          <Projects />
          <Skills />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
