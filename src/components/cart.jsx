import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import CartProduct from "./cartProduct";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cart-page">
          <h3>Ready to order?</h3>

          <div className="products">
            {this.props.cart.map((prod) => (
              <CartProduct key={prod._id} prodData={prod} />
            ))}
          </div>

          <div className="total">
            Your total: ${this.getTotal()}
            <button className="btn btn-primary">Pay Now</button>
          </div>
          <button className="btn btn-danger">Clear Cart</button>
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
   * handle the click event on the button
   * dispatch the action (no payload needed)
   */

  getTotal = () => {
    // this.props.cart
    // return with 2 decimals
    return 0;
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps, null)(Cart);
