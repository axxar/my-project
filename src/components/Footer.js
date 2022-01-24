import React from "react";
import AtLogo from './images/at-handcraft.svg'

const Footer = () => {
  return (
    <>
      <footer className="w-full h-8 rounded inset-x-0 backdrop-blur-sm bottom-0 items-center fixed">
        <div className="container flex flex-wrap align-middle justify-between items-center m-auto">
          <small className="align-middle pt-1 " >&copy; Copyright 2022 <span><img src={AtLogo} className="h-6 inline-block fill-white text-white"></img></span> Akshar Patel</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
