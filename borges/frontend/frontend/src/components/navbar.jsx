import React, { Component } from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Logo />
              <span className="ml-3 text-xl">BORGES</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <a className="mr-5 hover:text-gray-900">Inicio</a>
            </Link>
            <a className="mr-5 hover:text-gray-900">La empresa</a>
            <a className="mr-5 hover:text-gray-900">Bioseguridad</a>
            <Link to="/products">
              <a className="mr-5 hover:text-gray-900">Productos</a>
            </Link>
            <a className="mr-5 hover:text-gray-900">Contacto</a>
          </nav>
          <button className="inline-flex items-center border-0 py-1 px-3 rounded text-white mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
