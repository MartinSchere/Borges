import React, { Component } from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to="/" className="logo-link">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Logo />
              <span className="ml-3 text-xl text-gray-700 b">BORGES</span>
            </a>
          </NavLink>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink to="/la-empresa" className="mr-5 hover:text-gray-900">
              La empresa
            </NavLink>
            <div className="dropdown inline-block relative mr-5 ">
              <div className="flex items-center cursor-pointer">
                <span className="text-base hover:text-gray-900">
                  Bioseguridad
                </span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
            <NavLink to="/productos" className="mr-5 hover:text-gray-900">
              Productos
            </NavLink>
            <NavLink to="/servicios" className="mr-5 hover:text-gray-900">
              Servicios
            </NavLink>
            <NavLink to="/prensa" className="mr-5 hover:text-gray-900">
              Prensa
            </NavLink>
          </nav>
          <NavLink to="/contacto" className="contact">
            <button className="inline-flex items-center border-0 py-1 px-3 rounded text-white mt-4 md:mt-0">
              Contacto
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
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Navbar;
