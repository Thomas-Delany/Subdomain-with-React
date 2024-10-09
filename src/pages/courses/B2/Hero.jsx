import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#9cb770]">
      <div className="max-w-screen-xl px-8 md:px-28 py-8 mx-auto lg:gap-8 xl:gap-0 grid lg:grid-cols-12 lg:py-10 flex justify-between items-center">
        <div className="mr-auto lg:col-span-7 mx-auto p-6">
          <h1 className="max-w-2xl mb-5 tracking-normal text-4xl md:text-5xl text-[#155b54] font-bryndan font-bold pb-4 text-center md:text-left">
            B2 — Vantage
          </h1>
          <p className="max-w-2xl mb-4 font-black lg:mb-4 text-2xl md:text-3xl text-[#1C4F59] text-left font-dosis">
            What you will learn
          </p>
          <ul className="list-disc text-[#1C4F59] text-left font-dosis font-semibold text-xl md:text-2xl">
            <li>
              Understand beginner grammar concepts such as the Present Simple
              and Present Perfect.
            </li>
            <li>Introduce yourself using everyday expressions</li>
            <li>Interact in a simple way with others</li>
            <li>Ask personal questions</li>
          </ul>
          <div className="text-center md:text-left pt-8">
            <button
              type="button"
              className="w-32 h-12 text-white bg-[#155b54] font-bold font-dosis rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
            >
              Begin!
            </button>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:flex justify-center items-center mx-auto h-[400px]">
          <h2 className="font-bryndan font-black text-[#155b54] text-[350px]">B2</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
