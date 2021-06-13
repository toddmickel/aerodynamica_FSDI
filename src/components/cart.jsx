import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import CartProduct from "./cartProduct";
import NumberFormat from "react-number-format";
import { clearCart } from "./../store/actions";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cart-page">
          <h1>Ready to order?</h1>

          <div className="products">
            {!this.props.cart.length && <h3>Your Cart is Empty!</h3>}
            {this.props.cart.map((prod) => (
              <CartProduct key={prod._id} prodData={prod} />
            ))}
          </div>

          <div className="total">
            <label>Total items: {this.getTotalItems()}</label>
            <br />
            <label>Your total: {this.getTotalCost()}</label>
            <br />
            <button className="btn btn-primary">Pay Now</button>
            <br />
            <button className="btn btn-danger" onClick={this.handleClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  /**
   *
   * To clear the cart:
   * create an action
   * update the reducer, to delete everything in the array by assigning an empty array
   * connect the action to the cart component (in place of null ;don't forget to import the action)
   * handle the click event on the buttonimport { clearCart } from './../store/actions';

   * dispatch the action (no payload needed)
   */

  getTotalCost = () => {
    let grandTotal = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      grandTotal += this.props.cart[i].price * this.props.cart[i].quantity;
    }
    // return with 2 decimals in USD format
    return <NumberFormat value={grandTotal} displayType={"text"} thousandSeparator={true} prefix={"$"} decimalScale={2} fixedDecimalScale={true} />;
  };

  getTotalItems = () => {
    return this.props.cart.length;
  };

  handleClearCart = () => {
    this.props.clearCart();
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps, { clearCart })(Cart);
