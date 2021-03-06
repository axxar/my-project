import React from "react";
import About from "./About";
import Coding from "./images/coding.svg";

const Hero = () => {
  return (
    <>
      <div className="container flex sm:my-44 mb-24 mt-16">
        <div className="container m-auto">
          <div class="md:flex">
            <div class="md:shrink-0 pl-4">
              <h1 className="text-4xl leading-normal">Hello, I'm</h1>
              <h1 className="text-7xl font-bold pt-2">Akshar Patel</h1>
              <p className="pt-10 text-2xl font-IndieFlower">
                Software Developer By Profession.
              </p>
              <p className="pt-3 text-2xl font-IndieFlower">
                Photographer By Passion.
              </p>
              <p className="pt-3 text-2xl font-IndieFlower">Gamer By Night.</p>
            </div>
            <div class="ml-auto">
              <img
                src={Coding}
                className="sm:w-9/12 ml-auto"
                alt="Coding Logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Hero;
