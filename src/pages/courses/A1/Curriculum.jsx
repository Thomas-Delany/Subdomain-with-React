import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaBook, FaGraduationCap } from "react-icons/fa";
import { TfiBlackboard } from "react-icons/tfi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { GiJourney, GiChampions } from "react-icons/gi";
import { IoStar } from "react-icons/io5";

const curriculumData = [
  {
    icon: GiJourney,
    title: "UNIT 1",
    lessons: [
      {
        title: "Lesson 1",
        path: "/lessons/A1/Unit1/Lesson1",
        sublessons: [
          { title: "Lesson 1.1", path: "/lessons/A1/Unit1/Lesson1.1" },
          { title: "Lesson 1.2", path: "/lessons/A1/Unit1/Lesson1.2" },
        ],
      },
      {
        title: "Lesson 2",
        path: "/lessons/A1/Unit1/Lesson2",
        sublessons: [
          { title: "Lesson 2.1", path: "/lessons/A1/Unit1/Lesson2.1" },
          { title: "Lesson 2.2", path: "/lessons/A1/Unit1/Lesson2.2" },
        ],
      },
      {
        title: "Lesson 3",
        path: "/lessons/A1/Unit1/Lesson3",
        sublessons: [
          { title: "Lesson 3.1", path: "/lessons/A1/Unit1/Lesson3.1" },
          { title: "Lesson 3.2", path: "/lessons/A1/Unit1/Lesson3.2" },
        ],
      },
      { title: "Lesson 4", path: "/lessons/A1/Unit1/Lesson4" },
      { title: "Lesson 5", path: "/lessons/A1/Unit1/Lesson5" },
    ],
  },
  {
    icon: TfiBlackboard,
    title: "UNIT 2",
    lessons: [
      { title: "Lesson 6", path: "/lessons/A1/Unit2/Lesson6" },
      { title: "Lesson 7", path: "/lessons/A1/Unit2/Lesson7" },
      { title: "Lesson 8", path: "/lessons/A1/Unit2/Lesson8" },
      { title: "Lesson 9", path: "/lessons/A1/Unit2/Lesson9" },
      { title: "Lesson 10", path: "/lessons/A1/Unit2/Lesson10" },
    ],
  },
  {
    icon: LiaDumbbellSolid,
    title: "UNIT 3",
    lessons: [
      { title: "Lesson 11", path: "/lessons/A1/Unit3/Lesson11" },
      { title: "Lesson 12", path: "/lessons/A1/Unit3/Lesson12" },
      { title: "Lesson 13", path: "/lessons/A1/Unit3/Lesson13" },
      { title: "Lesson 14", path: "/lessons/A1/Unit3/Lesson14" },
      { title: "Lesson 15", path: "/lessons/A1/Unit3/Lesson15" },
    ],
  },
  {
    icon: IoStar,
    title: "UNIT 4",
    lessons: [
      { title: "Lesson 16", path: "/lessons/A1/Unit4/Lesson16" },
      { title: "Lesson 17", path: "/lessons/A1/Unit4/Lesson17" },
      { title: "Lesson 18", path: "/lessons/A1/Unit4/Lesson18" },
      { title: "Lesson 19", path: "/lessons/A1/Unit4/Lesson19" },
      { title: "Lesson 20", path: "/lessons/A1/Unit4/Lesson20" },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 5",
    lessons: [
      { title: "Lesson 21", path: "/lessons/A1/Unit5/Lesson21" },
      { title: "Lesson 22", path: "/lessons/A1/Unit5/Lesson22" },
      { title: "Lesson 23", path: "/lessons/A1/Unit5/Lesson23" },
      { title: "Lesson 24", path: "/lessons/A1/Unit5/Lesson24" },
      { title: "Lesson 25", path: "/lessons/A1/Unit5/Lesson25" },
    ],
  },
  {
    icon: GiChampions,
    title: "UNIT 6",
    lessons: [
      { title: "Lesson 26", path: "/lessons/A1/Unit6/Lesson26" },
      { title: "Lesson 27", path: "/lessons/A1/Unit6/Lesson27" },
      { title: "Lesson 28", path: "/lessons/A1/Unit6/Lesson28" },
      { title: "Lesson 29", path: "/lessons/A1/Unit6/Lesson29" },
      { title: "Lesson 30", path: "/lessons/A1/Unit6/Lesson30" },
    ],
  },
  // Add more units as necessary
];

const Curriculum = () => {
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

        {curriculumData.map((unit, index) => (
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
