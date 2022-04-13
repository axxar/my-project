import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import APLogo from "./images/APLogo.png";
import APLogoW from "./images/APLogo-white.png";
import { NavLink } from "react-router-dom";
import Socials from "./SocialsDropdown";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 sticky top-0 z-10  border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img className="h-12 w-12 hidden" id="light-img" src={APLogoW} alt="Logo white" />
                  <img className="h-12 w-12 hidden" id="dark-img" src={APLogo} alt="Logo dark" />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white px-3 py-2"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/photography"
                    className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white px-3 py-2"
                  >
                    Photography
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white px-3 py-2"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex">
              <Socials/>
              <button
                id="theme-toggle"
                type="button"
                class="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ml-3 rounded-lg text-sm p-2.5"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  class="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  class="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/photography"
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Photography
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

export default Navbar;
