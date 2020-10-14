import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  useEffect(() => {});
  return (
    <div style={{ position: "fixed", right: "10px", bottom: "10px" }}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <button>Top</button>
      </Link>
    </div>
  );
};

export default ScrollToTop;
