import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";
import ScrollToTop from "./component/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
}

export default App;
