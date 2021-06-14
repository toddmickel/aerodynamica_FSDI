import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./about.css";

class About extends Component {
  state = {
    isHidden: true,
  };
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
          <div>
            <button className="btn btn-primary btn-sm" onClick={this.toggleEmail}>
              Show/Hide Email
            </button>
            <br />
            {!this.state.isHidden && <a href="mailto:todd@toddmickel.com">todd@toddmickel.com</a>}
          </div>
        </div>
        <div className="container-lg">
          <h1>About This Project</h1>
        </div>
        <div className="container about-text">
          <p>This project has required extensive use of the following technologies:</p>
          <ul>
            <li>
              HTML5{" "}
              <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faHtml5} id="html-icon" />
              </a>
            </li>
            <li>
              CSS3{" "}
              <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCss3Alt} id="css-icon" />
              </a>
            </li>
            <li>
              Bootstrap{" "}
              <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faBootstrap} id="bootstrap-icon" />
              </a>
            </li>
            <li>
              React{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faReact} id="react-icon" />
              </a>
            </li>
            <li>
              Redux{" "}
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <img src="/img/others/reduxicon.png" alt="redux" id="redux-icon" />
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

  toggleEmail = () => {
    if (this.state.isHidden === true) {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  };
}

export default About;
