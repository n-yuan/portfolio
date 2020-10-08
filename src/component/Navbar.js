import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [projectsColor, setProjectsColor] = useState("nav-link nav-link-white");

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className={projectsColor}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className={projectsColor}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className={projectsColor}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className={projectsColor}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
