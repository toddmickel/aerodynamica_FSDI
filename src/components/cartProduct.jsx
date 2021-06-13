import React, { Component } from "react";
// import { ppuDisplay } from "./product";
import { removeFromCart } from "../store/actions";
import "./cartProduct.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class CartProduct extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cart-product">
          <img src={"/img/products/" + this.props.prodData.image} alt={this.props.prodData.title} className="cart-prod-child" />
          <p className="cart-prod-title cart-prod-child">{this.props.prodData.title}</p>
          <p className="cart-prod-prices cart-prod-child">
            Unit Price:
            <br />
            {this.props.prodData.price}
          </p>
          <p className="cart-prod-quan cart-prod-child">
            Quantity Ordered:
            <br />
            {this.props.prodData.quantity}
          </p>
          <p className="cart-prod-prices cart-prod-child">
            Total:
            <br />
            {this.getTotal()}
          </p>
          <button className="btn btn-sm btn-danger btn-del-cart" onClick={this.handleRemoveEvent}>
            <FontAwesomeIcon icon={faTrash} />
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
