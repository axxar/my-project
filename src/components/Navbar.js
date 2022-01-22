import React from "react";
import '@themesberg/flowbite';
import Logo from './images/logo.png'
import APLogo from './images/APLogo.png'
import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {

  return (
    <>
      <nav id="navbar" className="px-2 py-2.5 rounded backdrop-blur-sm fixed inset-x-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex">
            <img className="mr-3 md:h-14 h-12" viewBox="0 0 52 72" src={APLogo} ></img>
          </NavLink>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="mobile-menu-button inline-flex items-center p-2 ml-3 text-white md:text-xl sm:text-base rounded-lg md:hidden focus:outline-none"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink to="/" className="block py-2 pr-4 pl-3 text-white md:text-xl sm:text-base hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0" aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="block py-2 pr-4 pl-3 text-white md:text-xl sm:text-base hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">About</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="block py-2 pr-4 pl-3 text-white md:text-xl sm:text-base  hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Services</NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="block py-2 pr-4 pl-3 text-white md:text-xl sm:text-base  hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="block py-2 pr-4 pl-3 text-white md:text-xl sm:text-base hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
