import React from "react";
import AboutMe from "./images/undraw_about_me_re_82bv.svg";

const About = () => {
  return (
    <div className="h-screen">
      <div class="md:shrink-0 md:mt-40 mt-20">
        <div className="flex h-4/6 ml-5">
          <div className="m-auto">
            <h1 className="text-4xl leading-normal">
              About Me
            </h1>
            <div className="leading-8">
              <p>A developer with coffee addiction.</p>
              <p>Photography is a built in feature.</p>
              <p>Trying new is kind of a hobby.</p>
              <p>Loves tech, space and travel.</p>
              <p>Spirit animal - Raccoon.</p>
              <p>Marvel nerd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
