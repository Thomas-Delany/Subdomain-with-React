import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import curriculumData from "../../../data/curriculumData";

const Curriculum = ({ courseId }) => {
  const courseCurriculum = curriculumData[courseId];

  if (!courseCurriculum) {
    return <div>Error: Curriculum data not found for {courseId}</div>;
  }

  // State to track which lesson is open
  const [openLessonIndex, setOpenLessonIndex] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (index) => {
    setOpenLessonIndex(openLessonIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F6E4CC] py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-4xl md:text-6xl text-center font-bold font-dosis text-[#1C4F59] py-4">
          Study Plan
        </h2>

        {courseCurriculum.map((unit, index) => (
          <div key={index} className="grid place-items-center py-8 px-2">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#1C4F59] font-dosis">
              {unit.title}
            </h2>
            <div className="flex items-center justify-center w-10/12 rounded-3xl p-8 bg-[#fab51a]">
              {/* Left Inner Div for Icon */}
              <div className="hidden md:flex justify-center items-center bg-white rounded-full p-4 mr-6">
                <unit.icon className="text-[#1C4F59] text-6xl md:text-5xl lg:text-6xl" />
              </div>

              {/* Right Inner Div for Lessons */}
              <div className="p-4 rounded-xl w-full text-[#1C4F59] bg-[#fab51a]">
                <ul className="list-disc pl-5 space-y-2 text-xl md:text-2xl font-semibold font-dosis">
                  {unit.lessons.map((lesson, i) => (
                    <li key={i} className="relative">
                      {/* Main Lesson Title (Dropdown Toggle) */}
                      <button
                        onClick={() => toggleDropdown(i)}
                        className="flex items-center w-full text-left text-[#1C4F59] hover:underline focus:outline-none"
                      >
                        {/* Title container with fixed width */}
                        <div className="w-38 flex-shrink-0">{lesson.title}</div>
                        {/* Dropdown Arrow */}
                        <svg
                          className={`w-5 h-5 ml-2 transform transition-transform ${
                            openLessonIndex === i ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Sublessons Dropdown */}
                      {openLessonIndex === i && lesson.sublessons && (
                        <ul className="mt-2 ml-6 list-disc text-lg font-medium text-[#1C4F59]">
                          {lesson.sublessons.map((sublesson, j) => (
                            <li key={j}>
                              <Link
                                to={sublesson.path}
                                className="text-[#1C4F59] hover:underline"
                              >
                                {sublesson.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
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
