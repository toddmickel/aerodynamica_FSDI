import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {
    price: 500,
    quan: 1,
  };

  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img src="/img/products/altimeter.jpg" alt="altimeter" className="prod-image"></img>
          <h5>Product Name</h5>
          <p className="description">Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.</p>
          <div>
            <label>Price Each: ${this.state.price}</label>
            <br />
            <label>Total Price: ${this.state.price * this.state.quan}</label>
          </div>

          <QuantityPicker onQuantityChanged={this.onQuantityChanged}></QuantityPicker>

          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </React.Fragment>
    );
  }

  /*  onQuantityChanged = (newQuantity) => {
    console.log("onQuantityChanged successfully called");
    this.setState({ quan: newQuantity });
  };*/
}

export default Product;

/*
Min info for product component:
- Image
- Title
- Price
- SKU / Product Number
- Minimum quantity to order
- Total Price
- Add to cart button
*/
