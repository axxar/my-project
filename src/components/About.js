import React from "react";
import AboutMeTab from "./AboutMeTab";

const About = () => {
  return (
    <>
      <div className="h-screen flex" id="AboutMe">
        <div className="container sm:mt-40 mt-20 mx-auto pl-4">
          <h1 className="text-4xl leading-normal">About Me</h1>
          <AboutMeTab />
        </div>
      </div>
    </>
  );
};

export default About;
