import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";
import ProductService from "./../services/productService";

class Catalog extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <React.Fragment>
        <div className="catalog-page">
          <h1>Our Catalog</h1>
          <div className="catalog-row">
            {this.state.products.map((prod) => (
              <Product key={prod.id} prodData={prod}></Product>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    //good place to load data from server
    let service = new ProductService();
    let data = service.getCatalog();

    // put data on state
    this.setState({ products: data });
  }
}

export default Catalog;
