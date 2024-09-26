// src/pages/courses/A1.jsx
import React from "react";

const A1 = () => {
  return (
    <section className="bg-greenAone">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:py-16 flex justify-between items-center">
        <div className="mr-auto lg:col-span-6 mx-auto p-6">
            <h1 className="max-w-2xl mb-5 text-4xl font-light tracking-normal md:text-5xl xl:text-5xl text-white font-bryndan pb-4 text-center md:text-left">A1 —  Acceso</h1> 
            <p className="max-w-2xl mb-4 font-semibold lg:mb-4 text-2xl md:text-3xl text-white text-left font-dosis">What you will learn:</p> 
            <ul className="list-disc text-white text-left font-dosis text-xl md:text-2xl">
              <li>Understand beginner grammar concepts such as the Present Simple and Present Perfect. </li>
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

export default A1;
