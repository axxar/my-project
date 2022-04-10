import React from "react";
import AtLogo from "./images/at-handcraft.svg";

const Footer = () => {
  return (
    
    <footer className="w-full h-6 items-center bottom-0 fixed bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <small className="align-middle text-xs py-1">
              &copy; Copyright 2022{" "}
              <span>
                <img
                  src={AtLogo}
                  className="h-4 inline-block fill-white text-white"
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
