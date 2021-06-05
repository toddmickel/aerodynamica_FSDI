import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-lg">
          <h1>About AeroDynamica</h1>
        </div>
        <div className="container about-text">
          <p>AeroDynamica is a fictitious business created by Todd Mickel for the purposes of learning React and Redux through the San Diego Global Knowledge University's Full Stack Developer Immersive program.</p>
        </div>

        <div className="container-lg">
          <h1>About the Developer</h1>
        </div>
        <div className="container about-text">
          <p>Todd has had a lifelong love affair with technology. This led to his pursuing a Bachelor's degree in Computer and Information Sciences and and MBA with a Business Data Mining certificate. To cap off and refresh his programming knowledge, Todd enrolled in the FSDI program from SDGKU.</p>
        </div>
        <div className="container-lg">
          <h1>About This Project</h1>
        </div>
        <div className="container about-text">
          <p>This project has required extensive use of the following technologies:</p>
          <ul>
            <li>
              HTML5 <FontAwesomeIcon icon={faHtml5} id="html-icon" />
            </li>
            <li>
              CSS3 <FontAwesomeIcon icon={faCss3Alt} id="css-icon" />
            </li>
            <li>
              Bootstrap <FontAwesomeIcon icon={faBootstrap} id="bootstrap-icon" />
            </li>
            <li>
              React <FontAwesomeIcon icon={faReact} id="react-icon" />
            </li>
            <li>Redux</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
