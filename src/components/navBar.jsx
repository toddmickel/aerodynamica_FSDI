// create the below using imrc
import React, { Component } from "react";
import { Link } from "react-router-dom"; // Creates a Single Page Application.  ***
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

// create the below using CC
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-page">
        <Link className="navbar-brand" to="/">
          AeroDynamica
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                Admin
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link className="btn btn-outline-primary" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> ({this.props.cartCount})
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

/**
 * Connect the component to the store to read or dispatch actions
 * connect() receives two params:
 * 1 - A function that maps what you want to read
 * 2 - An object with the actions you want to dispatch
 */

// Return an object mapping the state to props
const mapStateToProps = (state) => {
  return {
    cartCount: state.length, // <- Will put the array in this.props.cartCount
  };
};
export default connect(mapStateToProps, null)(NavBar);
