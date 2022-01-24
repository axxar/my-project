import React from "react";
import Connect from "./images/connect-logo.svg";

const Contact = () => {
  return (
    <div className="h-screen flex ">
      <div className="container m-auto">
        <div class="md:flex">
          <div class="md:shrink-0 sm:p-0 pl-4 md:w-6/12">
            <h1 className="text-4xl leading-normal">Let's connect</h1>
            <div className="pt-6 pb-8 mb-4 flex flex-col">
              <div className="w-full pr-3">
                <div className="md:mb-0">
                  <label
                    className="uppercase tracking-wider text-white text-xs font-bold mb-2"
                    for="company"
                  >
                    Name*
                  </label>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="company"
                    type="text"
                    placeholder="Akshar P."
                    required
                  />
                </div>
              </div>
              <div className="md:flex pr-3">
                <div className="w-full">
                  <label
                    className="uppercase tracking-wider text-white text-xs font-bold mb-2"
                    for="email"
                  >
                    Email*
                  </label>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="email"
                    type="email"
                    placeholder="akshar@aksharap.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-2 pr-3">
                <div className="mb-6 md:mb-0">
                  <label
                    className="uppercase tracking-wider text-white text-xs font-bold mb-2"
                    for="comments"
                  >
                    Comments
                  </label>
                  <div>
                    <textarea
                      className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                      rows={4}
                      id="comments"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mb-2 pr-3">
                <div className="mb-6 md:mb-0 py-3 px-4 pr-8 rounded">
                  <div data-netlify-recaptcha="true"></div>
                </div>
              </div>
              <div className="pr-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden w-full md:block md:w-auto md:px-12">
            <img src={Connect} className="ml-auto pt-7 sm:p-0"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
