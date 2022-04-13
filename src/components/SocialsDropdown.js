import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { LinkIcon } from '@heroicons/react/solid';
import InstaLogo from './images/instagram.svg';

export default function Socials() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full pt-2.5 text-sm font-medium text-white bg-black bg-transparent">
            <LinkIcon
              className="w-5 h-5 text-violet-400 hover:text-violet-900 dark:text-violet-600 dark:hover:text-violet-200"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.linkedin.com/in/akshar-ap/"
                    rel="noreferrer"
                    target="_blank"
                    className={`${
                      active ? "bg-gray-400/80 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <svg
                      class="w-5 h-5 mr-2 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                    akshar-ap
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.instagram.com/akshar_ap/"
                    rel="noreferrer"
                    target="_blank"
                    className={`${
                      active ? "bg-gray-400/80 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <img
                      src={InstaLogo}
                      className="w-5 h-5 pt-0.5 mr-2"
                      alt="Instagram logo"
                    ></img>
                    @akshar_ap
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.instagram.com/aksharshoots/"
                    rel="noreferrer"
                    target="_blank"
                    className={`${
                      active ? "bg-gray-400/80 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <img
                      src={InstaLogo}
                      className="w-5 h-5 pt-0.5 mr-2"
                      alt="Instagram logo"
                    ></img>
                    @aksharshoots
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}