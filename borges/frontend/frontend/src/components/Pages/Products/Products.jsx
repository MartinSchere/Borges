import React, { Component } from "react";
import { ProductList } from "../../product_list";
import "./Products.css";

class Products extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    );
  }
}

export default Products;
