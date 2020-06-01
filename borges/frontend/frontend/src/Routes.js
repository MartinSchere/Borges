import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Routes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Routes;
