import React, { Component } from "react";
import Navbar from "../../navbar";
import Footer from "../../footer";
import Gallery from "../../gallery";
import Featured from "../../featured";
import Contact from "../../contact";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Featured />
        <hr />
        <Gallery />
        <hr />
        <Contact />
      </div>
    );
  }
}

export default Home;
