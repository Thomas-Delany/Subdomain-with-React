import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import curriculumData from "../../../data/curriculumData";

const Curriculum = ({ courseId }) => {
  const courseCurriculum = curriculumData[courseId];

  if (!courseCurriculum) {
    return <div>Error: Curriculum data not found for {courseId}</div>;
  }
  return (
    <section class="bg-[#f4592f] py-8 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-4xl md:text-6xl text-center font-bold font-dosis text-[#0a1f41] py-4">
          Study Plan
        </h2>

        {courseCurriculum.map((unit, index) => (
          <div key={index} className="grid place-items-center py-8 px-2">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#0a1f41] font-dosis">
              {unit.title}
            </h2>
            <div className="flex items-center justify-center w-10/12 rounded-3xl p-8 bg-[#fed531]">
              {/* Left Inner Div for Icon */}
              <div className="hidden md:flex justify-center items-center bg-white rounded-full p-4 mr-6">
                <unit.icon className="text-[#f4592f] text-6xl md:text-5xl lg:text-6xl" />
              </div>

              {/* Right Inner Div for Bullet Points */}
              <div className="p-4 rounded-xl w-full text-[#0a1f41] bg-[#fed531]">
                <ul className="list-disc pl-5 space-y-2 text-xl md:text-2xl font-semibold font-dosis">
                  {unit.lessons.map((lesson, i) => (
                    <li key={i}>
                      <Link
                        to={lesson.path}
                        className="text-[#0a1f41] hover:underline"
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
