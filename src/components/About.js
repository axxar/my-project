import React from "react";
import AboutMeTab from "./AboutMeTab";
import HackerMind from "./images/hacker-mind.svg";
import Photo from "./images/photo-clqr.svg";

const About = () => {
  return (
    <>
      <div className="my-34 pb-20 flex" id="AboutMe">
        <div className="container sm:mt-40 mt-26 mx-auto pl-4">
          <h1 className="text-5xl leading-normal">About Me</h1>
          <div className="md:flex">
            <div className="hidden w-full flex-1 lg:block md:w-auto md:pr-4 md:pt-4">
              <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                  <img src={Photo} alt="Photographer taking a click"></img>
                </div>
                <div></div>
                <div></div>
                <div>
                  <img src={HackerMind} alt="Man in front of scren"></img>
                </div>
              </div>
            </div>
            <div className="md:shrink-0 flex-1 sm:p-0 md:w-6/12">
              <AboutMeTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
