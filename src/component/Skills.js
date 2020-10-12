import React from "react";
import TeamLogger from "./projects/TeamLogger";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <div id="skills" className="section-container">
      <SectionHeader name={"Skills"} description={"My skills"} />
      <div className="skills-section">
        <div className="skill-header">
          <h3>Tech Skills</h3>
        </div>
        <div className="skills-content">
          <p>
            ◦ Front-End: React.js, Redux, Redux-Saga, React Native, CSS3, Sass,
            styled-components, Less, HTML5, JavaScript, AJAX, React Context API,
            React Hooks, React Router, Ant.design, Material UI, Bootstrap,
            Materialize, Semantic UI, Responsive design, Webpack, ES6, formik,
            Jest, NextJs, Server Side Rendering
          </p>
          <p>
            ◦ Back-End: Node.js, ExpressJS, Mongoose, RESTful API, KeystoneJS,
            Strapi, PHP, CodeIgniter, MySQL, MongoDB
          </p>
          <p>
            ◦ Coding Languages: JavaScript, CSS3, HTML5, Python, SQL, PHP,
            MATLAB
          </p>
          <p>
            ◦ Machine learning: PyTorch, TensorFlow, Pythonic libraries (NumPy,
            Panda, Scikit-learn etc), OpenCV, Weka
          </p>
          <p>
            ◦ Tool: VSCode, Visual Studio, Eclipse, Jupyter Notebook, Postman,
            Rollbar
          </p>
          <p>
            ◦ Cloud: AWS S3, EC2, SNS, DynamoDB, Cognito, Heroku, MongoDB Atlas
          </p>
        </div>
        <div className="skill-header">
          <h3>UX Skills</h3>
          <div className="skills-content">
            <p>◦ Design Process: Conceptual Design, Interaction Design</p>
            <p>
              ◦ Prototyping software:Photoshop, Illustrator, Figma, Mockplus,
              Balsamiq Mockups
            </p>
            <p>
              ◦ Testing: TAM, SUS, Time on Task, A/B testing, Cognitive
              walkthrough, Heuristic evaluation
            </p>
          </div>
        </div>
        <div className="skill-header">
          <h3>Teamwork Skills</h3>
          <div className="skills-content">
            <p>◦ Tool: Git, Github, Trello, Bitbucket, Jira</p>
            <p>◦ Methodology: Agile, Scrum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
