import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-8 md:px-28 py-8 mx-auto lg:gap-8 xl:gap-0 grid xl:grid-cols-12 lg:py-10 flex justify-between items-center">
        <div className="mr-auto lg:col-span-7 mx-auto p-4 py-2 md:py-16">
          <h1 className="max-w-2xl mb-2 tracking-normal !leading-tight text-4xl md:text-5xl text-[#1C4F59] font-dosis font-bold pb-2 md:pb-6 text-center">
          Learn English with Fun, Structure and Interactivity!
          </h1>
          <div className="flex items-center justify-center py-2">
            <Link to={`${baseUrl}`}>
              <button
                type="button"
                className="w-32 h-12 text-white bg-[#00C699] hover:bg-green-600 font-bold font-dosis rounded-lg text-lg px-5 py-2.5 me-2 mb-2 md:w-60 md:h-14 md:text-xl"
                 
              >
                Level Test
              </button>
            </Link>
            <Link to={`${baseUrl}`}>
              <button
                type="button"
                className="w-32 h-12 text-gray-800 bg-gray-100 hover:bg-gray-200 border border-[#00C699] font-bold font-dosis rounded-lg text-lg px-5 py-2.5 me-2 mb-2 md:w-60 md:h-14 md:text-xl"
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden xl:col-span-5 xl:flex justify-center items-center mx-auto">
          <img src="src/assets/category-2.svg" alt="English Courses" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


