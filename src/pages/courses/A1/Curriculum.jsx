import React from "react";
import { FaCheckCircle, FaBook, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import { TfiBlackboard } from "react-icons/tfi";

const curriculumData = [
  {
    icon: TfiBlackboard,
    title: "UNIT 1",
    listItems: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
  },
  {
    icon: FaChalkboardTeacher,
    title: "UNIT 2",
    listItems: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    ]
  },
  {
    icon: FaBook,
    title: "UNIT 3",
    listItems: [
      "Curabitur vehicula mi at fringilla eleifend.",
      "Vestibulum facilisis, lorem eget fringilla imperdiet.",
      "Suspendisse potenti."
    ]
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 4",
    listItems: [
      "Quisque scelerisque diam ut urna.",
      "Nam consequat, tortor nec fringilla venenatis.",
      "Fusce imperdiet metus sit amet orci mollis feugiat."
    ]
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 5",
    listItems: [
      "Quisque scelerisque diam ut urna.",
      "Nam consequat, tortor nec fringilla venenatis.",
      "Fusce imperdiet metus sit amet orci mollis feugiat."
    ]
  },
  {
    icon: FaGraduationCap,
    title: "UNIT 6",
    listItems: [
      "Quisque scelerisque diam ut urna.",
      "Nam consequat, tortor nec fringilla venenatis.",
      "Fusce imperdiet metus sit amet orci mollis feugiat."
    ]
  },
  // Add more units as necessary
];

const Curriculum = () => {
  return (
    <section class="py-8 md:py-16 bg-greenAone">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-4xl md:text-6xl text-center font-semibold font-dosis text-white py-4">
          Study Plan
        </h2>

        {curriculumData.map((unit, index) => (

        <div key={index} className="grid place-items-center py-8 px-8">
          <div className="flex items-center justify-center w-10/12 bg-blue-500 rounded-3xl p-8">

            {/* Left Inner Div for Icon */}
            <div className="hidden md:flex justify-center items-center bg-white rounded-full p-4 mr-6">
              <unit.icon className="text-blue-500 text-6xl md:text-7xl lg:text-8xl" />
            </div>

            {/* Right Inner Div for Bullet Points */}
            <div className="bg-white p-4 rounded-xl w-full text-black">
              <h2 className="text-2xl font-bold mb-4 text-center font-roboto">{unit.title}</h2>
                <ul className="list-disc pl-5 space-y-2 text-lg font-semibold font-roboto">
                  {unit.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
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




