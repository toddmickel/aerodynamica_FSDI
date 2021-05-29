import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-page">
        <label>
          Copyright &copy; <b><a href="mailto:todd@toddmickel.com" target="_blank" rel="noreferrer">Todd Mickel</a></b>, 2021
        </label>
      </div>
    );
  }
}

export default Footer;
