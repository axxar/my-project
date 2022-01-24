import React from "react";
import Moments from "./images/moments.svg";
import Example from "./AboutMeTab";

const About = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="container sm:mt-40 mt-20 mx-auto pl-4">
              <h1 className="text-4xl leading-normal">About Me</h1>
              <Example />
        </div>
      </div>
    </>
  );
};

export default About;
