import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.mins,
    updated: false,
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
    this.setState({ quantity: this.state.quantity + 1 * this.props.mins });
    this.setState({ updated: true });
    console.log("After increasing quantity: " + this.state.quantity);
  };

  decreaseQuantity = () => {
    if (this.state.quantity > this.props.mins) {
      this.setState({ quantity: this.state.quantity - 1 * this.props.mins });
      this.setState({ updated: true });
      console.log("After decreasing quantity: " + this.state.quantity);
    }
  };

  componentDidUpdate() {
    console.log("During componentDidUpdate: " + this.state.quantity);
    if (this.state.updated === true) {
      this.props.onQuantityChanged(this.state.quantity);
      this.setState({ updated: false });
    }
  }
}

export default QuantityPicker;
