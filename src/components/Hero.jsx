import React from "react";

function Hero() {
  return (
    <section className="bg-white">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 mx-auto text-center sm:text-left">
            <h1 className="max-w-2xl mb-5 text-4xl font-bold tracking-normal md:text-5xl xl:text-5xl text-black">Learn English with Fun, Structure and Ease!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-600">Video Based Lessons with Interactive Exercises and Structure, all of which follows the Common European Framework of Reference for Languages.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-white rounded-lg bg-mellowGreen hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Level Test
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative items-center">
            <img src="/src/assets/category-2.svg" className="mx-auto scale-[1.4]" alt="english courses"></img>
        </div>                
    </div>
</section>
  );
}

export default Hero;
