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
          { title: "Lesson 1.2", path: "/lessons/A1/Unit1/Lesson1.3" },
        ],
      },
      {
        title: "Lesson 2",
        path: "/lessons/A1/Unit1/Lesson2",
        sublessons: [
          { title: "Lesson 2.1", path: "/lessons/A1/Unit1/Lesson2.1" },
          { title: "Lesson 2.2", path: "/lessons/A1/Unit1/Lesson2.2" },
          { title: "Lesson 2.3", path: "/lessons/A1/Unit1/Lesson2.3" },
        ],
      },
      {
        title: "Lesson 3",
        path: "/lessons/A1/Unit1/Lesson3",
        sublessons: [
          { title: "Lesson 3.1", path: "/lessons/A1/Unit1/Lesson3.1" },
          { title: "Lesson 3.2", path: "/lessons/A1/Unit1/Lesson3.2" },
          { title: "Lesson 3.3", path: "/lessons/A1/Unit1/Lesson3.3" },
        ],
      },
      { title: "Lesson 4",
        path: "/lessons/A1/Unit1/Lesson4",
        sublessons: [
          { title: "Lesson 4.1", path: "/lessons/A1/Unit1/Lesson4.1" },
          { title: "Lesson 4.2", path: "/lessons/A1/Unit1/Lesson4.2" },
          { title: "Lesson 4.3", path: "/lessons/A1/Unit1/Lesson4.3" },
        ],
      },
      { title: "Lesson 5",
        path: "/lessons/A1/Unit1/Lesson5",
        sublessons: [
          { title: "Lesson 5.1", path: "/lessons/A1/Unit1/Lesson5.1" },
          { title: "Lesson 5.2", path: "/lessons/A1/Unit1/Lesson5.2" },
          { title: "Lesson 5.3", path: "/lessons/A1/Unit1/Lesson5.3" },
        ],
      },
    ],
  },
  {
    icon: TfiBlackboard,
    title: "UNIT 2",
    lessons: [
      {
        title: "Lesson 6",
        path: "/lessons/A1/Unit2/Lesson6",
        sublessons: [
          { title: "Lesson 6.1", path: "/lessons/A1/Unit2/Lesson6.1" },
          { title: "Lesson 6.2", path: "/lessons/A1/Unit2/Lesson6.2" },
          { title: "Lesson 6.3", path: "/lessons/A1/Unit2/Lesson6.3" },
        ],
      },
      {
        title: "Lesson 7",
        path: "/lessons/A1/Unit2/Lesson7",
        sublessons: [
          { title: "Lesson 7.1", path: "/lessons/A1/Unit2/Lesson7.1" },
          { title: "Lesson 7.2", path: "/lessons/A1/Unit2/Lesson7.2" },
          { title: "Lesson 7.3", path: "/lessons/A1/Unit2/Lesson7.3" },
        ],
      },
      {
        title: "Lesson 8",
        path: "/lessons/A1/Unit2/Lesson8",
        sublessons: [
          { title: "Lesson 8.1", path: "/lessons/A1/Unit2/Lesson8.1" },
          { title: "Lesson 8.2", path: "/lessons/A1/Unit2/Lesson8.2" },
          { title: "Lesson 8.3", path: "/lessons/A1/Unit2/Lesson8.3" },
        ],
      },
      { title: "Lesson 9",
        path: "/lessons/A1/Unit2/Lesson9",
        sublessons: [
          { title: "Lesson 9.1", path: "/lessons/A1/Unit2/Lesson9.1" },
          { title: "Lesson 9.2", path: "/lessons/A1/Unit2/Lesson9.2" },
          { title: "Lesson 9.3", path: "/lessons/A1/Unit2/Lesson9.3" },
        ],
      },
      { title: "Lesson 10",
        path: "/lessons/A1/Unit2/Lesson10",
        sublessons: [
          { title: "Lesson 10.1", path: "/lessons/A1/Unit2/Lesson10.1" },
          { title: "Lesson 10.2", path: "/lessons/A1/Unit2/Lesson10.2" },
          { title: "Lesson 10.3", path: "/lessons/A1/Unit2/Lesson10.3" },
        ],
      },
    ],
  },
  {
    icon: LiaDumbbellSolid,
    title: "UNIT 3",
    lessons: [
      {
        title: "Lesson 11",
        path: "/lessons/A1/Unit3/Lesson11",
        sublessons: [
          { title: "Lesson 11.1", path: "/lessons/A1/Unit3/Lesson11.1" },
          { title: "Lesson 11.2", path: "/lessons/A1/Unit3/Lesson11.2" },
          { title: "Lesson 11.3", path: "/lessons/A1/Unit3/Lesson11.3" },
        ],
      },
      {
        title: "Lesson 12",
        path: "/lessons/A1/Unit3/Lesson12",
        sublessons: [
          { title: "Lesson 12.1", path: "/lessons/A1/Unit3/Lesson12.1" },
          { title: "Lesson 12.2", path: "/lessons/A1/Unit3/Lesson12.2" },
          { title: "Lesson 12.3", path: "/lessons/A1/Unit3/Lesson12.3" },
        ],
      },
      {
        title: "Lesson 13",
        path: "/lessons/A1/Unit3/Lesson13",
        sublessons: [
          { title: "Lesson 13.1", path: "/lessons/A1/Unit3/Lesson13.1" },
          { title: "Lesson 13.2", path: "/lessons/A1/Unit3/Lesson13.2" },
          { title: "Lesson 13.3", path: "/lessons/A1/Unit3/Lesson13.3" },
        ],
      },
      { title: "Lesson 14",
        path: "/lessons/A1/Unit3/Lesson14",
        sublessons: [
          { title: "Lesson 14.1", path: "/lessons/A1/Unit3/Lesson14.1" },
          { title: "Lesson 14.2", path: "/lessons/A1/Unit3/Lesson14.2" },
          { title: "Lesson 14.3", path: "/lessons/A1/Unit3/Lesson14.3" },
        ],
      },
      { title: "Lesson 15",
        path: "/lessons/A1/Unit3/Lesson15",
        sublessons: [
          { title: "Lesson 15.1", path: "/lessons/A1/Unit3/Lesson15.1" },
          { title: "Lesson 15.2", path: "/lessons/A1/Unit3/Lesson15.2" },
          { title: "Lesson 15.3", path: "/lessons/A1/Unit3/Lesson15.3" },
        ],
      },
    ],
  },
  {
    icon: IoStar,
    title: "UNIT 4",
    lessons: [
      {
        title: "Lesson 16",
        path: "/lessons/A1/Unit4/Lesson16",
        sublessons: [
          { title: "Lesson 16.1", path: "/lessons/A1/Unit4/Lesson16.1" },
          { title: "Lesson 16.2", path: "/lessons/A1/Unit4/Lesson16.2" },
          { title: "Lesson 16.3", path: "/lessons/A1/Unit4/Lesson16.3" },
        ],
      },
      {
        title: "Lesson 17",
        path: "/lessons/A1/Unit4/Lesson17",
        sublessons: [
          { title: "Lesson 17.1", path: "/lessons/A1/Unit4/Lesson17.1" },
          { title: "Lesson 17.2", path: "/lessons/A1/Unit4/Lesson17.2" },
          { title: "Lesson 17.3", path: "/lessons/A1/Unit4/Lesson17.3" },
        ],
      },
      {
        title: "Lesson 18",
        path: "/lessons/A1/Unit4/Lesson18",
        sublessons: [
          { title: "Lesson 18.1", path: "/lessons/A1/Unit4/Lesson18.1" },
          { title: "Lesson 18.2", path: "/lessons/A1/Unit4/Lesson18.2" },
          { title: "Lesson 18.3", path: "/lessons/A1/Unit4/Lesson18.3" },
        ],
      },
      { title: "Lesson 19",
        path: "/lessons/A1/Unit4/Lesson19",
        sublessons: [
          { title: "Lesson 19.1", path: "/lessons/A1/Unit4/Lesson19.1" },
          { title: "Lesson 19.2", path: "/lessons/A1/Unit4/Lesson19.2" },
          { title: "Lesson 19.3", path: "/lessons/A1/Unit4/Lesson19.3" },
        ],
      },
      { title: "Lesson 20",
        path: "/lessons/A1/Unit4/Lesson20",
        sublessons: [
          { title: "Lesson 20.1", path: "/lessons/A1/Unit4/Lesson20.1" },
          { title: "Lesson 20.2", path: "/lessons/A1/Unit4/Lesson20.2" },
          { title: "Lesson 20.3", path: "/lessons/A1/Unit4/Lesson20.3" },
        ],
      },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 5",
    lessons: [
      {
        title: "Lesson 21",
        path: "/lessons/A1/Unit5/Lesson21",
        sublessons: [
          { title: "Lesson 21.1", path: "/lessons/A1/Unit5/Lesson21.1" },
          { title: "Lesson 21.2", path: "/lessons/A1/Unit5/Lesson21.2" },
          { title: "Lesson 21.3", path: "/lessons/A1/Unit5/Lesson21.3" },
        ],
      },
      {
        title: "Lesson 22",
        path: "/lessons/A1/Unit5/Lesson22",
        sublessons: [
          { title: "Lesson 22.1", path: "/lessons/A1/Unit5/Lesson22.1" },
          { title: "Lesson 22.2", path: "/lessons/A1/Unit5/Lesson22.2" },
          { title: "Lesson 22.3", path: "/lessons/A1/Unit5/Lesson22.3" },
        ],
      },
      {
        title: "Lesson 23",
        path: "/lessons/A1/Unit5/Lesson23",
        sublessons: [
          { title: "Lesson 23.1", path: "/lessons/A1/Unit5/Lesson23.1" },
          { title: "Lesson 23.2", path: "/lessons/A1/Unit5/Lesson23.2" },
          { title: "Lesson 23.3", path: "/lessons/A1/Unit5/Lesson23.3" },
        ],
      },
      { title: "Lesson 24",
        path: "/lessons/A1/Unit5/Lesson24",
        sublessons: [
          { title: "Lesson 24.1", path: "/lessons/A1/Unit5/Lesson24.1" },
          { title: "Lesson 24.2", path: "/lessons/A1/Unit5/Lesson24.2" },
          { title: "Lesson 24.3", path: "/lessons/A1/Unit5/Lesson24.3" },
        ],
      },
      { title: "Lesson 25",
        path: "/lessons/A1/Unit5/Lesson25",
        sublessons: [
          { title: "Lesson 25.1", path: "/lessons/A1/Unit5/Lesson25.1" },
          { title: "Lesson 25.2", path: "/lessons/A1/Unit5/Lesson25.2" },
          { title: "Lesson 25.3", path: "/lessons/A1/Unit5/Lesson25.3" },
        ],
      },
    ],
  },
  {
    icon: GiChampions,
    title: "UNIT 6",
    lessons: [
      {
        title: "Lesson 26",
        path: "/lessons/A1/Unit6/Lesson26",
        sublessons: [
          { title: "Lesson 26.1", path: "/lessons/A1/Unit6/Lesson26.1" },
          { title: "Lesson 26.2", path: "/lessons/A1/Unit6/Lesson26.2" },
          { title: "Lesson 26.3", path: "/lessons/A1/Unit6/Lesson26.3" },
        ],
      },
      {
        title: "Lesson 27",
        path: "/lessons/A1/Unit6/Lesson27",
        sublessons: [
          { title: "Lesson 27.1", path: "/lessons/A1/Unit6/Lesson27.1" },
          { title: "Lesson 27.2", path: "/lessons/A1/Unit6/Lesson27.2" },
          { title: "Lesson 27.3", path: "/lessons/A1/Unit6/Lesson27.3" },
        ],
      },
      {
        title: "Lesson 28",
        path: "/lessons/A1/Unit6/Lesson28",
        sublessons: [
          { title: "Lesson 28.1", path: "/lessons/A1/Unit6/Lesson28.1" },
          { title: "Lesson 28.2", path: "/lessons/A1/Unit6/Lesson28.2" },
          { title: "Lesson 28.3", path: "/lessons/A1/Unit6/Lesson28.3" },
        ],
      },
      { title: "Lesson 29",
        path: "/lessons/A1/Unit6/Lesson29",
        sublessons: [
          { title: "Lesson 29.1", path: "/lessons/A1/Unit6/Lesson29.1" },
          { title: "Lesson 29.2", path: "/lessons/A1/Unit6/Lesson29.2" },
          { title: "Lesson 29.3", path: "/lessons/A1/Unit6/Lesson29.3" },
        ],
      },
      { title: "Lesson 30",
        path: "/lessons/A1/Unit6/Lesson30",
        sublessons: [
          { title: "Lesson 30.1", path: "/lessons/A1/Unit6/Lesson30.1" },
          { title: "Lesson 30.2", path: "/lessons/A1/Unit6/Lesson30.2" },
          { title: "Lesson 30.3", path: "/lessons/A1/Unit6/Lesson30.3" },
        ],
      },
    ],
  },
  // Add more units as necessary
];

const Curriculum = () => {
  // State to track open dropdowns per unit and lesson
  const [openDropdown, setOpenDropdown] = useState({});

  // Function to toggle dropdown based on unitIndex and lessonIndex
  const toggleDropdown = (unitIndex, lessonIndex) => {
    const key = `${unitIndex}-${lessonIndex}`;
    setOpenDropdown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className="bg-[#F6E4CC] py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-4xl md:text-6xl text-center font-bold font-dosis text-[#1C4F59] py-4">
          Study Plan
        </h2>

        {/* Mapping through units */}
        {curriculumData.map((unit, unitIndex) => (
          <div key={unitIndex} className="grid place-items-center py-8 px-2">
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
                  {unit.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="relative">
                      {/* Main Lesson Title (Dropdown Toggle) */}
                      <button
                        onClick={() => toggleDropdown(unitIndex, lessonIndex)}
                        className="flex items-center w-full text-left text-[#1C4F59] hover:underline focus:outline-none"
                      >
                        {/* Title container with fixed width */}
                        <div className="w-38 flex-shrink-0">{lesson.title}</div>
                        {/* Dropdown Arrow */}
                        <svg
                          className={`w-5 h-5 ml-2 transform transition-transform ${
                            openDropdown[`${unitIndex}-${lessonIndex}`] ? "rotate-180" : ""
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
                      {openDropdown[`${unitIndex}-${lessonIndex}`] && lesson.sublessons && (
                        <ul className="mt-2 ml-6 list-disc text-lg font-medium text-[#1C4F59]">
                          {lesson.sublessons.map((sublesson, subIndex) => (
                            <li key={subIndex}>
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
