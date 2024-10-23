import React from "react";
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
      { title: "Lesson 1", path: "/lessons/A2/Unit1/Lesson1" },
      { title: "Lesson 2", path: "/lessons/A2/Unit1/Lesson2" },
      { title: "Lesson 3", path: "/lessons/A2/Unit1/Lesson3" },
      { title: "Lesson 4", path: "/lessons/A2/Unit1/Lesson4" },
      { title: "Lesson 5", path: "/lessons/A2/Unit1/Lesson5" },
    ],
  },
  {
    icon: TfiBlackboard,
    title: "UNIT 2",
    lessons: [
      { title: "Lesson 6", path: "/lessons/A2/Unit2/Lesson6" },
      { title: "Lesson 7", path: "/lessons/A2/Unit2/Lesson7" },
      { title: "Lesson 8", path: "/lessons/A2/Unit2/Lesson8" },
      { title: "Lesson 9", path: "/lessons/A2/Unit2/Lesson9" },
      { title: "Lesson 10", path: "/lessons/A2/Unit2/Lesson10" },
    ],
  },
  {
    icon: LiaDumbbellSolid,
    title: "UNIT 3",
    lessons: [
      { title: "Lesson 11", path: "/lessons/A2/Unit3/Lesson11" },
      { title: "Lesson 12", path: "/lessons/A2/Unit3/Lesson12" },
      { title: "Lesson 13", path: "/lessons/A2/Unit3/Lesson13" },
      { title: "Lesson 14", path: "/lessons/A2/Unit3/Lesson14" },
      { title: "Lesson 15", path: "/lessons/A2/Unit3/Lesson15" },
    ],
  },
  {
    icon: IoStar,
    title: "UNIT 4",
    lessons: [
      { title: "Lesson 16", path: "/lessons/A2/Unit4/Lesson16" },
      { title: "Lesson 17", path: "/lessons/A2/Unit4/Lesson17" },
      { title: "Lesson 18", path: "/lessons/A2/Unit4/Lesson18" },
      { title: "Lesson 19", path: "/lessons/A2/Unit4/Lesson19" },
      { title: "Lesson 20", path: "/lessons/A2/Unit4/Lesson20" },
    ],
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 5",
    lessons: [
      { title: "Lesson 21", path: "/lessons/A2/Unit5/Lesson21" },
      { title: "Lesson 22", path: "/lessons/A2/Unit5/Lesson22" },
      { title: "Lesson 23", path: "/lessons/A2/Unit5/Lesson23" },
      { title: "Lesson 24", path: "/lessons/A2/Unit5/Lesson24" },
      { title: "Lesson 25", path: "/lessons/A2/Unit5/Lesson25" },
    ],
  },
  {
    icon: GiChampions,
    title: "UNIT 6",
    lessons: [
      { title: "Lesson 26", path: "/lessons/A2/Unit6/Lesson26" },
      { title: "Lesson 27", path: "/lessons/A2/Unit6/Lesson27" },
      { title: "Lesson 28", path: "/lessons/A2/Unit6/Lesson28" },
      { title: "Lesson 29", path: "/lessons/A2/Unit6/Lesson29" },
      { title: "Lesson 30", path: "/lessons/A2/Unit6/Lesson30" },
    ],
  },
  // Add more units as necessary
];

const Curriculum = () => {
  return (
    <section class="bg-[#f3d5bd] py-8 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-4xl md:text-6xl text-center font-bold font-dosis text-[#1C4F59] py-4">
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

              {/* Right Inner Div for Bullet Points */}
              <div className="p-4 rounded-xl w-full text-[#1C4F59] bg-[#fab51a]">
                <ul className="list-disc pl-5 space-y-2 text-xl md:text-2xl font-semibold font-dosis">
                  {unit.lessons.map((lesson, i) => (
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
