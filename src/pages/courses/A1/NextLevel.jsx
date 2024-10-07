import React from "react";
import { Link } from "react-router-dom";

const NextLevel = () => {
  return (
    <section className="bg-greenAone">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-16 flex justify-between items-center">
        <div className="lg:col-span-6 lg:flex justify-center items-center mx-auto">
          <Link to="/courses/A2/WayStage">
            <img
              src="../../src/assets/A2.png"
              className="mx-auto rounded-3xl"
              alt="A2"
            ></img>
          </Link>
        </div>

        <div className="mr-auto lg:col-span-6 mx-auto p-6 sm:flex sm:flex-col">
          <h1 className="max-w-2xl mb-5 text-5xl tracking-normal md:text-5xl xl:text-5xl text-white font-black font-dosis text-center lg:text-left">
            Time to level up!
          </h1>
          <p className="hidden md:block max-w-2xl mb-4 font-bold font-roboto text-white lg:mb-8 md:text-lg lg:text-xl text-left">
            Get started with A2 — WayStage to continue improving.
          </p>
          <div className="space-x-2 text-center lg:text-left pt-5 md:pt-1">
            <Link to="#">
              <button
                type="button"
                className="w-32 h-12 focus:outline-none text-black bg-white font-medium font-dosis rounded-lg text-lg px-5 py-2.5 me-2 mb-2 font-semibold"
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
