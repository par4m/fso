import React from "react";
import Laptop from "../assets/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#f1b6e4] font-bold text-2xl ">
            {" "}
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Manage Data Analytics Centrally
          </h1>
          <p className="pd-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos nihil assumenda quam excepturi quaerat ea aperiam
            incidunt, perferendis explicabo optio cumque quia id exercitationem
            earum eveniet odio. Minus, dolore sint!
          </p>
          <p className="text-center pt-5">
            <button
              type="button"
              className="text-white w-[200px]  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
            >
              Get Started
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
