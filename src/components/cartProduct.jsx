import React, { Component } from "react";
// import { ppuDisplay } from "./product";
import { removeFromCart } from "../store/actions";
import "./cartProduct.css";
import { connect } from "react-redux";

class CartProduct extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cart-product">
          <img src={"/img/products/" + this.props.prodData.image} alt={this.props.prodData.title} />
          <p className="cart-prod-title">{this.props.prodData.title}</p>
          <p className="cart-prod-prices">
            Unit Price:
            <br />
            {this.props.prodData.price}
          </p>
          <p className="cart-prod-quan">
            Quantity Ordered:
            <br />
            {this.props.prodData.quantity}
          </p>
          <p className="cart-prod-prices">
            Total:
            <br />
            {this.getTotal()}
          </p>
          <button className="btn btn-sm btn-danger" onClick={this.handleRemoveEvent}>
            D
          </button>
        </div>
      </React.Fragment>
    );
  }

  handleRemoveEvent = () => {
    this.props.removeFromCart(this.props.prodData._id);
  };

  getTotal = () => {
    let total = this.props.prodData.quantity * this.props.prodData.price;
    return total.toFixed(2);
  };
}

export default connect(null, { removeFromCart })(CartProduct);
