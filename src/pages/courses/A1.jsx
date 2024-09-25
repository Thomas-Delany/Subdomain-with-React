// src/pages/courses/A1.jsx
import React from "react";

const A1 = () => {
  return (
    <section class="bg-greenAone">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-6 mx-auto text-center sm:text-left">
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-normal md:text-5xl xl:text-5xl text-white">A1 —  Acceso</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">Learn to introduce yourself using everyday expressions. Ask personal questions and understand beginner grammar concepts so you can express yourself.</p> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative items-center">
            <img src="/src/assets/A1.png" className="mx-auto" alt="english courses"></img>
        </div>                
    </div>
</section>
  );
};

export default A1;
