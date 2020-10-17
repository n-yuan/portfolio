import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const ContactMe = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (e) =>
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    // addContactInfo(contactInfo);

    setContactInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div id="contacts" className="contact-container">
      <SectionHeader name={"Contact Me"} description={"Get in touch with me"} />
      <div style={{ height: "500px" }}>
        <form onSubmit={onSubmit}>
          <div className="row w-100">
            <div className="col-md-6 px-3">
              <span>
                <input
                  className="gate"
                  id="knock"
                  type="text"
                  placeholder="Enter your name"
                  onChange={onChange}
                />
                <label htmlFor="knock">Name</label>
              </span>
              <span>
                <input
                  className="gate"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={onChange}
                />
                <label htmlFor="email">Email</label>
              </span>
              <span>
                <input
                  className="gate"
                  id="subject"
                  type="text"
                  placeholder="Enter your subject"
                  onChange={onChange}
                />
                <label htmlFor="subject">Subject</label>
              </span>
            </div>
            <div className="col-md-6 px-3">
              <span>
                <textarea
                  className="balloon"
                  id="message"
                  type="text"
                  placeholder="Enter you message here."
                  style={{ height: "148px" }}
                  onChange={onChange}
                />
                <label htmlFor="message">Message</label>
              </span>
              <button
                className="btn-submit ml-2 d-block w-100"
                type="submit"
                style={{ borderRadius: "3px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
