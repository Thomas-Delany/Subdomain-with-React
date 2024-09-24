import React from "react";

function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-4 sm:px-16 md:pt-20 lg:flex lg:gap-x-16 lg:px-24 lg:pt-0 justify-center items-center flex flex-col lg:flex-row">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left flex flex-col justify-center lg:justify-start h-full">
            <h1 className="text-5xl font-black tracking-tight leading-tight font-sans">
              Learn English with Fun, Simplicity and Structure!
            </h1>
          </div>
          <div className="mx-auto relative lg:mt-0 lg:flex items-center hidden lg:block">
            <img
              alt="english courses"
              src="/src/assets/category-2.svg"
              className="mx-auto scale-[1.2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
