import React from "react";
import '@themesberg/flowbite';
import AvatarLogo from './images/profile-avatar.svg'
import APLogo from './images/APLogo.png'
import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {

  return (
    <>
      <nav id="navbar" className="px-2 py-2.5 rounded fixed inset-x-0 backdrop-blur-sm">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex">
            <img className="mr-3 md:h-14 h-12" viewBox="0 0 52 72" src={APLogo} ></img>
          </NavLink>
          <NavLink to="/contact">
            <img className="mr-3 md:h-14 h-12" viewBox="0 0 52 72" src={AvatarLogo} ></img>
          </NavLink>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
