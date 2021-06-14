import React, { Component } from "react";

class QuantityDisplay extends Component {
  state = {
    quantity: this.props.quantity,
    updated: false,
  };

  render() {
    return (
      <div className="container-sm qp-page">
        <button onClick={this.decreaseQuantity} className="btn btn-success btn-sm">
          -
        </button>
        <label className="qp-label">{this.state.quantity}</label>
        <button onClick={this.increaseQuantity} className="btn btn-success btn-sm">
          +
        </button>
      </div>
    );
  }

  decreaseQuantity = () => {
      this.setState({ quantity: this.state.quantity})
  }
}

export default QuantityDisplay;
