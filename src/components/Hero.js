import React from "react";
import Logo from "./images/undraw_programming_re_kg9v.svg";

const Hero = () => {
  return (
    <div className="h-screen flex ">
      <div className="container m-auto">
        <div class="md:flex">
          <div class="md:shrink-0 sm:p-0 pl-4">
            <h1 className="text-4xl leading-normal">Hello, I'm</h1>
            <h1 className="text-7xl font-bold pt-2">Akshar Patel</h1>
            <p className="pt-10">Software Developer By Profession.</p>
            <p className="pt-3">Photographer By Passion.</p>
            <p className="pt-3">Gamer By Night.</p>
          </div>
          <div class="ml-auto">
            <img src={Logo} className="sm:w-9/12 ml-auto pt-7 sm:p-0"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
