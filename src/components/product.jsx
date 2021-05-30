import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import NumberFormat from "react-number-format";

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
            <label>
              Price Per Unit: <NumberFormat value={this.state.price} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={2} fixedDecimalScale={true} />
            </label>
            <br />
            <label id="total-price">
              Total Price: <NumberFormat value={this.state.price * this.state.quan} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={2} fixedDecimalScale={true} />
            </label>
          </div>

          <QuantityPicker onQuantityChanged={this.onQuantityChanged} mins={this.props.prodData.minimum}></QuantityPicker>

          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </React.Fragment>
    );
  }

  onQuantityChanged = (newQuantity) => {
    console.log("onQuantityChanged successfully called with new quantity of " + newQuantity);
    this.setState({ quan: newQuantity });
  };
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
