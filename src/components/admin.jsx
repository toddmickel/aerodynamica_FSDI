import React, { Component } from "react";
import "./admin.css";
import ProductService from "../services/productService";

class Admin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="px-2 py-4">
          <h1>Admin</h1>
        </div>
        <div>
          <button className="btn btn-info admin-btn" onClick={this.testRead}>
            Test Read
          </button>
          <button className="btn btn-warning admin-btn" onClick={this.seedData}>
            Seed Data
          </button>
          <button className="btn btn-danger admin-btn" onClick={this.clearData}>
            Clear Data
          </button>
        </div>
      </React.Fragment>
    );
  }

  testRead = async () => {
    let service = new ProductService();
    let data = await service.getCatalog();
    console.log("Test read: " + data);
  };

  seedData = async () => {
    let service = new ProductService();
    await service.seedData();
  };

  clearData = async () => {
    let service = new ProductService();
    await service.clearData();
  };
}

export default Admin;
