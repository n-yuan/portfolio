import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#home">
            Home <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
