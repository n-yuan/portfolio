import React from "react";

const SectionHeader = (props) => {
  const { name } = props;

  return (
    <div className="projects-heading-wrapper">
      <p className="projects-caption">View my projects</p>
      <h1 className="projects-header">{name}</h1>
      <div className="projects-dash mx-auto"></div>
    </div>
  );
};

export default SectionHeader;
