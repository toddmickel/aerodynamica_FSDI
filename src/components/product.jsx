import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "./../store/actions";
import { connect } from "react-redux";

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
            <img src={"/img/products/" + this.props.prodData.image} alt="product" className="prod-image"></img>
          </div>
          <h5>{this.props.prodData.title}</h5>
          <p className="description">{this.props.prodData.description}</p>
          <div>
            <label>Price Per Unit: {this.ppuDisplay()}</label>
            <br />
            <label id="total-price">Total Price: {this.totalPriceDisplay()}</label>
          </div>

          <div className="qp-cart">
            <QuantityPicker onQuantityChanged={this.onQuantityChanged} mins={this.props.prodData.minimum}></QuantityPicker>

            <button className="btn btn-sm btn-warning add-cart-btn" onClick={this.handleAddToCart}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onQuantityChanged = (newQuantity) => this.setState({ quan: newQuantity });

  ppuDisplay = () => {
    if (this.state.price % 1 === 0) {
      return <NumberFormat value={this.state.price} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={0} fixedDecimalScale={true} />;
    } else {
      return <NumberFormat value={this.state.price} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={2} fixedDecimalScale={true} />;
    }
  };

  totalPriceDisplay = () => {
    let total = this.state.price * this.state.quan;
    if (total % 1 === 0) {
      return <NumberFormat value={total} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={0} fixedDecimalScale={true} />;
    } else {
      return <NumberFormat value={total} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={2} fixedDecimalScale={true} />;
    }
  };

  handleAddToCart = () => {
    console.log("Dispatching Action");
    // dispatch the addToCart action
    this.props.addToCart(this.props.prodData);
  };
}

/**
 * Connect the component to the store to read or dispatch actions
 * connect() receives two params:
 * 1 - A function that maps what you want to read
 * 2 - An object with the actions you want to dispatch
 */
export default connect(null, { addToCart })(Product);

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
