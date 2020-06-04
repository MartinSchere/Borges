import React, { Component } from "react";
import NuestraEmpresa from "../../nuestra_empresa";
import DetailNuestraEmpresa from "../../detail_nuestra_empresa";
class LaEmpresa extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NuestraEmpresa />
        <DetailNuestraEmpresa />
      </React.Fragment>
    );
  }
}

export default LaEmpresa;
