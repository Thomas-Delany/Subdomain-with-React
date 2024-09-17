import React from "react";

function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-32 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Learn English in a Fun, Simple and Dynamic Way!
            </h2>
          </div>
          <div className="mx-auto relative mt-16 h-80 lg:mt-8">
            <img
              alt="english courses"
              src="/src/assets/category-2.svg" className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;