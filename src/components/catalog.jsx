import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div className="catalog-page">
        <h1>Our Catalog</h1>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    );
  }
}

export default Catalog;
