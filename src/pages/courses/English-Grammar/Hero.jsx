import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const Hero = () => {
  return (
    <section className="bg-[#f4592f]">
      <div className="max-w-screen-xl px-8 md:px-28 py-8 mx-auto lg:gap-8 xl:gap-0 grid lg:grid-cols-12 lg:py-10 flex justify-between items-center">
        <div className="mr-auto lg:col-span-7 mx-auto p-6">
          <h1 className="max-w-2xl mb-5 tracking-normal text-4xl md:text-5xl text-[#0a1f41] font-bryndan font-bold pb-4 text-center md:text-left">
            XX — XXX
          </h1>
          <p className="max-w-2xl mb-4 font-black lg:mb-4 text-2xl md:text-3xl text-[#fed531] text-left font-dosis">
            What you will learn
          </p>
          <ul className="list-disc text-[#0a1f41] text-left font-dosis font-semibold text-xl md:text-2xl">
            <li>
              Understand beginner grammar concepts such as the Present Simple
              and Present Perfect.
            </li>
            <li>Introduce yourself using everyday expressions</li>
            <li>Interact in a simple way with others</li>
            <li>Ask personal questions</li>
          </ul>
          <div className="text-center md:text-left pt-8">
            <Link to={`${baseUrl}`}>
              <button
                type="button"
                className="w-32 h-12 text-[#0a1f41] bg-[#fed531] font-bold font-dosis rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
              >
                Begin!
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:flex justify-center items-center mx-auto h-[400px]">
          <h2 className="font-bryndan font-black text-[#0a1f41] text-[350px]">
            XX
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
