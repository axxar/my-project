import React from "react";
import Connect from "./images/connect-logo.svg";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  return (
    <div className="flex mx-auto">
      <div className="container">
        <div class="md:flex">
          <div class="md:shrink-0 sm:p-0 pl-4 md:w-6/12">
            <h1 className="text-4xl leading-normal">Let's connect</h1>
            <form
              className="pt-6 pb-8 mb-4 flex flex-col"
              name="contact"
              method="post"
              data-netlify="true"
              action="/"
              data-netlify-recaptcha="true"
              onSubmit="submit"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="w-full pr-3">
                <div className="md:mb-0">
                  <label className="uppercase tracking-wider text-xs font-bold mb-2">
                    Name*
                    <input
                      className="w-full bg-gray-200 dark:bg-gray-300 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      name="name"
                      type="text"
                      placeholder="Akshar P."
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex pr-3">
                <div className="w-full">
                  <label className="uppercase tracking-wider text-xs font-bold mb-2">
                    Email*
                    <input
                    className="w-full bg-gray-200 dark:bg-gray-300 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="akshar@aksharap.com"
                    required
                  />
                  </label>
                </div>
              </div>
              <div className="mb-2 pr-3">
                <div className="mb-6 md:mb-0">
                  <label className="uppercase tracking-wider text-xs font-bold mb-2">
                    Message
                    <textarea
                      className="w-full bg-gray-200 dark:bg-gray-300 border border-gray-200 text-black text-sm py-3 px-4 pr-8 mb-3 rounded"
                      rows={4}
                      id="message"
                      name="message"
                    ></textarea>
                  </label>
                </div>
              </div>
              <ReCAPTCHA sitekey="6Lddj0AeAAAAANZNtS61MxjLfA9sgKkMFbzOWMpu" theme="dark" />
              <div className="pr-3 md:flex mt-2">
                <div className="md:w-6/12 mx-auto px-3">
                  <button
                    type="submit"
                    className="md:w-full bg-gray-500 dark:bg-gray-400 dark:text-black text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-600 hover:border-gray-500 dark:border-gray-300 dark:hover:border-gray-400 rounded-full"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="hidden w-full md:block md:w-auto md:px-12">
            <img
              src={Connect}
              className="ml-auto pt-7 sm:p-0"
              alt="Connect logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
