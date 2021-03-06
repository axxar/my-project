import React from "react";

const Portfolio = () => {
  return (
      <div className="container m-auto">
        <ol className="relative border-l border-gray-200">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-7 text-sm font-normal leading-none text-gray-400">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
  );
};

export default Portfolio;
