import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = ({ unit }) => {
  return (
    <section className="bg-[#57b252] py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-4xl md:text-6xl text-center font-bold font-dosis text-[#FFFFFF] py-4">
          Study Plan
        </h2>

        {unit.map((unitItem, index) => (
          <div key={index} className="grid place-items-center py-8 px-2">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#FFFFFF] font-dosis">
              {unitItem.title}
            </h2>
            <div className="flex items-center justify-center w-10/12 rounded-3xl p-8 bg-[#fcd404]">
              {/* Left Inner Div for Icon */}
              <div className="hidden md:flex justify-center items-center bg-white rounded-full p-4 mr-6">
                <unitItem.icon className="text-[#57b252] text-6xl md:text-5xl lg:text-6xl" />
              </div>

              {/* Right Inner Div for Bullet Points */}
              <div className="p-4 rounded-xl w-full text-[#1C4F59] bg-[#fcd404]">
                <ul className="list-disc pl-5 space-y-2 text-xl md:text-2xl font-semibold font-dosis">
                  {unitItem.lessons.map((lesson, i) => (
                    <li key={i}>
                      <Link
                        to={lesson.path}
                        className="text-[#1C4F59] hover:underline"
                      >
                        {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;
