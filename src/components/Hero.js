import React from "react";
import ProgrammingLogo from "./images/programming.svg";
import About from "./About";

const Hero = () => {
  return (
    <>
      <div className="container flex my-14">
        <div className="container m-auto">
          <div class="md:flex">
            <div class="md:shrink-0 pl-4">
              <h1 className="text-4xl leading-normal">Hello, I'm</h1>
              <h1 className="text-7xl font-bold pt-2">Akshar Patel</h1>
              <p className="pt-10">Software Developer By Profession.</p>
              <p className="pt-3">Photographer By Passion.</p>
              <p className="pt-3">Gamer By Night.</p>
            </div>
            <div class="ml-auto">
              <img src={ProgrammingLogo} className="sm:w-9/12 ml-auto" alt="Programming Logo"></img>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Hero;
