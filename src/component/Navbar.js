import React from "react";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link-home nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-projects" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-skills" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-contacts" href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
