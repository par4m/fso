import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-2xl text-xl text-[#f1b6e4] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            strings={["BTB", "BTC", "SaaS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
          />
        </div>
        <p className="md:text-2xl text-xl text-[#dddcdc] pt-2 md:pl-4 pb-5">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>
        <p className="text-center">
          <button
            type="button"
            className="font-medium text-white w-[200px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
          >
            Get Started
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
