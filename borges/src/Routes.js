import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Inicio/Inicio";
import Products from "./components/Pages/Productos/Productos";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LaEmpresa from "./components/Pages/La empresa/La_Empresa";
import Contact from "./components/Pages/Contacto/contact";
import Servicios from "./components/Pages/Servicios/Servicios";
import Prensa from "./components/Pages/Prensa/Prensa";
import WhatsappBtn from "./components/whatsappbtn";

const Routes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Products} />
        <Route path="/la-empresa" component={LaEmpresa} />
        <Route path="/contacto" component={Contact} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/prensa" component={Prensa} />
      </Switch>
      <WhatsappBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Routes;
