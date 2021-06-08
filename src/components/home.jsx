import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import "react-slideshow-image/dist/styles.css";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to AeroDynamica!</h1>
            <p className="lead home-text">Here at Aerodynamica, we have been serving the aviation needs of the flying public for over 50 years. Our customers have included the U.S. Government, the largest airlines in the industry, small charter operations, and individual hobbyists. Regardless of the size of your operation, you can always count on getting personal, friendly service and the best prices in the industry.</p>
            <p className="lead home-text">In addition to our extensive catalog of avionics components available on our website, our deep ties throughout the aviation industry allow us to quickly find low-cost, high-quality parts of any type.</p>
            <hr className="my-4" />
            <p>Click below to see our catalog of high-quality, competitively-priced, American made products</p>
            <p className="lead">
              <Link className="btn btn-info btn-sm" to="/catalog" role="button">
                Catalog <FontAwesomeIcon icon={faChevronCircleRight} />
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="slideshow">
            <Slide easing="ease" pauseOnHover={false} arrows={false} duration={3000}>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/others/gv.jpg" }}></div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/products/altimeter.jpg" }}></div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/others/b787.jpg" }}></div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/products/g1000_DesktopTrainer.jpg" }}></div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/others/c172.jpg" }}></div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: "url(/img/products/GI_275_ADI.jpg" }}></div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="logo">
          <img src="/img/logo/propeller.jpg" alt="logo" className="App-logo"></img>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
