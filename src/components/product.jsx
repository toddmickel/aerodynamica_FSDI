import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {
    price: this.props.prodData.price,
    quan: this.props.prodData.minimum,
  };

  render() {
    return (
      <React.Fragment>
        <div className="product">
          <div className="prod-img-cont">
            <img src={"/img/products/" + this.props.prodData.image} alt="altimeter" className="prod-image"></img>
          </div>
          <h5>{this.props.prodData.title}</h5>
          <p className="description">{this.props.prodData.description}</p>
          <div>
            <label>Price Per Unit: ${this.state.price.toFixed(2)}</label>
            <br />
            <label>Total Price: ${(this.state.price * this.state.quan).toFixed(2)}</label>
          </div>

          <QuantityPicker onQuantityChanged={this.onQuantityChanged} mins={this.props.prodData.minimum}></QuantityPicker>

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
