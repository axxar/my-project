import React from "react";
import AtLogo from "./images/at-handcraft.svg";
import ReactLogo from "./images/React-icon.svg";

const Footer = () => {
  return (
    <footer className="w-full h-7 items-center bottom-0 fixed bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <small className="align-middle text-sm">
              &copy; 2022{" "}
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
          <div className="flex">
            <small className="text-sm">Made with coffee and </small>
            <img src={ReactLogo} className="w-4 h-4 pt-1 mx-1" alt="React sign logo"></img>
          <svg
            class="w-4 h-4 pt-1 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
          >
            <g clip-path="url(#prefix__clip0)">
              <path
                fill="#38bdf8"
                fill-rule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clip-rule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h54v32.4H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
