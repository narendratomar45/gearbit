import React from "react";
import heroImage from "../assets/images/heroImage.jpg";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute w-full h-full bg-black opacity-60"></div>

      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

      <div className="absolute text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Master the MERN Stack & Crack Tech Interviews 🚀
        </h1>
        <h3 className="text-lg md:text-xl font-medium text-gray-200 max-w-3xl mx-auto">
          Learn React, Node.js, Express, and MongoDB from scratch with hands-on
          projects & interview prep.
        </h3>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition ">
            Start Learning Now
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Get Free Interview Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
