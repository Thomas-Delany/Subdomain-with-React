import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const NextLevel = () => {
  return (
    <section className="bg-[#F6E4CC]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-16 flex justify-between items-center">
        <div className="lg:col-span-6 lg:flex justify-center items-center mx-auto">
          <Link to={`${baseUrl}courses/Cambridge-Proficiency/C2`}>
            <img
              src="../../src/assets/c2_pro.png"
              className="mx-auto rounded-3xl"
              alt="A2"
            ></img>
          </Link>
        </div>

        <div className="mr-auto lg:col-span-6 mx-auto p-6 sm:flex sm:flex-col">
          <h1 className="max-w-2xl mb-5 text-5xl tracking-normal md:text-5xl xl:text-5xl text-[#1C4F59] font-black font-dosis text-center lg:text-left">
            Time to level up!
          </h1>
          <p className="hidden md:block max-w-2xl mb-4 font-bold font-dosis text-[#1C4F59] lg:mb-8 md:text-lg lg:text-xl text-left">
            XXXXXX — xxxxxxx.
          </p>
          <div className="space-x-2 text-center lg:text-left pt-5 md:pt-1">
            <Link to={`${baseUrl}courses/Cambridge-Proficiency/C2`}>
              <button
                type="button"
                className="w-32 h-12 focus:outline-none font-dosis rounded-lg text-xl px-5 py-2.5 me-2 mb-2 text-[#1C4F59] bg-[#fab51a] font-bold"
              >
                Begin!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;
