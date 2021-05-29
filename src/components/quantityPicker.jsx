import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="container-sm qp-page">
        <button onClick={this.decreaseQuantity} className="btn btn-primary btn-sm">
          -
        </button>
        <label className="qp-label">{this.state.quantity}</label>
        <button onClick={this.increaseQuantity} className="btn btn-primary btn-sm">
          +
        </button>
      </div>
    );
  }

  increaseQuantity = () => {
    console.log("Setting new quantity");
    this.setState({ quantity: this.state.quantity + 1 });
    //    this.props.onQuantityChanged(this.state.quantity);
    console.log(this.state.quantity);
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
      //      this.props.onQuantityChanged(this.state.quantity);
      console.log(this.state.quantity);
    }
  };
}

export default QuantityPicker;
