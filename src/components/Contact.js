import React from "react";
import WorkInProgress from "./images/undraw_programming_re_kg9v.svg";

const Contact = () => {
  return (
    <div className="">
      <div className="md:mt-40 mt-20">
        <div className="ml-5 object-center">
          <form
            name="letsconnect"
            data-netlify-recaptcha="true"
            data-netlify="true"
            className="content-center md:w-8/12 md:ml-auto md:mr-auto w-11/12"
          >
            <h1 className="text-4xl leading-normal">Let's connect</h1>
            <div className="pt-6 pb-8 mb-4 flex flex-col">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wider text-white text-xs font-bold mb-2" for="company">Name*</label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Akshar P." required />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="uppercase tracking-wider text-white text-xs font-bold mb-2" for="title">Title*</label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Developer" required />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="uppercase tracking-wider text-white text-xs font-bold mb-2" for="email" >Email*</label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="email" type="email" placeholder="akshar@aksharap.com" required />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wider text-white text-xs font-bold mb-2" for="comments">Comments</label>
                  <div>
                    <textarea className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" rows={4} id="comments"></textarea>
                  </div>
                </div>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <div className="-mx-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
