import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons

const Curriculum = () => {
  return (
    <section class="py-8 md:py-16 dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-3xl md:text-4xl text-center font-semibold font-dosis text-white py-4">
          Study Plan
        </h2>

        <div className="grid place-items-center py-8 px-8 bg-mellowGreen">
          <div className="grid grid-cols-[20%_80%] w-9/12 bg-black rounded-3xl p-8 flex justify-items-start">
            <div className="flex justify-center items-center bg-white">
              <FaCheckCircle className="text-blue-500 text-5xl" />
            </div>

            <div className="flex justify-items-start text-left bg-white">
              <div className="bg-mellowGreen">
                <h1>UNIT 1</h1>
                <ul className="list-disc list-inside text-white">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
