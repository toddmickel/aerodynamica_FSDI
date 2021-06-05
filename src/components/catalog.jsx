import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./catalog.css";
import Product from "./product";
import ProductService from "./../services/productService";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCat: "",
  };
  render() {
    let prodsToDisplay = this.state.products;

    // filter the elements inside the prodsToDisplay
    if (this.state.selectedCat) {
      prodsToDisplay = prodsToDisplay.filter((prod) => prod.category === this.state.selectedCat);
    }

    return (
      <React.Fragment>
        <div className="catalog-page">
          <div className="categories">
            <h1>Our Catalog</h1>
            {this.state.categories.map((category) => (
              <button onClick={() => this.selectCategory(category)} key={category} className="btn btn-info btn-sm btn-category">
                {category}&nbsp;
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            ))}
            <button onClick={() => this.selectCategory("")} key="All" className="btn btn-info btn-sm btn-category">
              All&nbsp;
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </button>
          </div>
          <div className="catalog-row">
            {prodsToDisplay.map((prod) => (
              <Product key={prod.id} prodData={prod}></Product>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  selectCategory = (cat) => {
    console.log("User selected category " + cat);
    this.setState({ selectedCat: cat });
  };

  componentDidMount() {
    //good place to load data from server
    let service = new ProductService();
    let data = service.getCatalog();
    let categories = [];

    // find the unique categories
    for (let i = 0; i < data.length; i++) {
      !categories.includes(data[i].category) && categories.push(data[i].category);
    }

    // put data on state
    this.setState({ products: data, categories: categories });
  }
}

export default Catalog;
