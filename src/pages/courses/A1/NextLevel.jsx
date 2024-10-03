import React from "react";

const NextLevel = () => {
  return (
  <section className="px-4 py-8 antialiased bg-greenAone md:py-16">
    
  <div className="mx-auto grid max-w-screen-xl rounded-lg p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16 flex justify-between items-center">

    <div className="lg:col-span-5 lg:mt-0">
      <a href="#">
        <img
          className="mb-4 rounded-md"
          src="../../src/assets/A2.png"
          alt="A2"
        />
      </a>
    </div>

    <div className="lg:col-span-7 flex flex-col justify-center text-center">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl font-dosis">
          Now it is time to level up!
        </h1>
        <p className="mb-6 text-white font-semibold font-roboto hidden lg:block">
          Get started with A2 — WayStage to continue improving.
        </p>
          <button
            type="button"
            className="w-32 h-12 text-black bg-white font-medium rounded-lg text-sm px-5 py-3"
          >
            Begin!
          </button>
      </div>
    </div>
  </div>
</section>
  );
};

export default NextLevel;