import React from "react";

function Hero() {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-16 flex justify-between items-center">
        <div className="mr-auto lg:col-span-6 mx-auto p-6 sm:flex sm:flex-col">
          <h1 className="max-w-2xl mb-5 text-5xl tracking-normal md:text-5xl xl:text-5xl text-black font-black font-dosis text-center md:text-left">
            Learn English with Fun, Structure and Ease!
          </h1>
          <p className="hidden md:block max-w-2xl mb-4 font-light font-dosis text-gray-950 lg:mb-8 md:text-lg lg:text-xl text-left">
            Video Based Lessons with Interactive Exercises and Structure, all of
            which follows the Common European Framework of Reference for
            Languages.
          </p>
          <div className="space-x-2 text-center md:text-left">
            <button
              type="button"
              className="w-32 h-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Level Test
            </button>
            <button
              type="button"
              class="w-32 h-12 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Log in
            </button>
          </div>
        </div>

        <div className="hidden lg:col-span-6 lg:flex justify-center items-center mx-auto">
          <img
            src="/src/assets/category-2.svg"
            className="mx-auto"
            alt="english courses"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
