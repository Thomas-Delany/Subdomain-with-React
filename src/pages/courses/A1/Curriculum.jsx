import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon from react-icons

const Curriculum = () => {
  return (
    <section class="py-8 md:py-16 dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-3xl md:text-4xl text-center font-semibold font-dosis text-white py-4">Study Plan
        </h2>




        <div className="grid place-items-center py-8 px-8 bg-mellowGreen">

          <div className="grid grid-cols-[20%_80%] w-full h-64 bg-white rounded-3xl p-12">

            <div className="flex items-center justify-center bg-black">
              <FaCheckCircle className="text-blue-500 text-4xl mr-6" />
            </div>

            <div className="flex items-center justify-center">
              {/* Bullet list in the middle */}
              <ul className="list-disc text-center">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
