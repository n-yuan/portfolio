import React from "react";
import TeamLogger from "./projects/TeamLogger";
import SectionHeader from "./SectionHeader";

const ContactMe = () => {
  return (
    <div id="contacts" className="section-container">
      <SectionHeader name={"Contact Me"} description={"Get in touch with me"} />
      <div style={{ height: "500px" }}>
        <h1>This is contact section</h1>
      </div>
    </div>
  );
};

export default ContactMe;
