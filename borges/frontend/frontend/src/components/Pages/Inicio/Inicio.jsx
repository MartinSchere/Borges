import React, { Component } from "react";
import { ProductList } from "../../product_list";
import Intro from "../../intro";
import Slider from "../../carousel/carousel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Slider />
        <Intro />
        <ProductList />
      </div>
    );
  }
}

export default Home;
