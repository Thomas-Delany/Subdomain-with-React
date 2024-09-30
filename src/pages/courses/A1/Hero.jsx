import React from "react";

const Hero = () => {
  return (
    <section className="bg-greenAone">
      <div className="max-w-screen-xl px-8 md:px-28 py-8 mx-auto lg:gap-8 xl:gap-0 grid lg:grid-cols-12 lg:py-10 flex justify-between items-center">
        <div className="mr-auto lg:col-span-6 mx-auto p-6">
          <h1 className="max-w-2xl mb-5 tracking-normal text-4xl md:text-5xl text-white font-bryndan font-medium pb-4 text-center md:text-left">
            A1 — Breakthrough
          </h1>
          <p className="max-w-2xl mb-4 font-semibold lg:mb-4 text-2xl md:text-3xl text-white text-left font-dosis">
            What you will learn:
          </p>
          <ul className="list-disc text-white text-left font-dosis font-medium text-xl md:text-2xl">
            <li>
              Understand beginner grammar concepts such as the Present Simple
              and Present Perfect.
            </li>
            <li>Introduce yourself using everyday expressions</li>
            <li>Interact in a simple way with others</li>
            <li>Ask personal questions</li>
          </ul>
        </div>
        <div className="hidden lg:col-span-6 lg:flex justify-center items-center mx-auto h-[400px]">
          <h2 className="font-bryndan text-white text-[350px]">A1</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
