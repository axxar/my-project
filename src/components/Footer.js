import React from "react";
import AtLogo from "./images/at-handcraft.svg";

const Footer = () => {
  return (
    <footer className="w-full h-8 items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <small className="align-middle pt-1 pl-2">
              &copy; Copyright 2022{" "}
              <span>
                <img
                  src={AtLogo}
                  className="h-6 inline-block fill-white text-white"
                  alt="At sign logo"
                ></img>
              </span>{" "}
              Akshar Patel
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
