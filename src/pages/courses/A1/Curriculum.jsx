import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons

const Curriculum = () => {
  return (
    <section class="py-8 md:py-16 bg-greenAone">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-4xl md:text-6xl text-center font-semibold font-dosis text-white py-4">
          Study Plan
        </h2>

        <div className="grid place-items-center py-8 px-8">
          <div className="flex items-center justify-center w-10/12 bg-white rounded-3xl p-8">
            <div className="hidden md:flex justify-center items-center bg-white rounded-full p-4 mr-6">
              <FaCheckCircle className="text-blue-500 text-6xl md:text-7xl lg:text-8xl" />
            </div>

            <div className="bg-[#5271ff] p-4 rounded-xl w-full text-white">
                <h1 className="text-2xl font-bold mb-4 text-center">UNIT 1</h1>
                <ul className="list-disc pl-5 space-y-2 text-lg font-semibold">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
