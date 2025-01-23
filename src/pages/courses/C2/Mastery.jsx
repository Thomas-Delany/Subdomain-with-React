import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CoursesDisplay";
import curriculumData from "../../../data/curriculumData";

const Mastery = () => {
  const courseId = "C2";
  const courseUnit = curriculumData[courseId];

  return (
    <div>
      <Hero />
      <Curriculum unit={courseUnit} />
      <CoursesDisplay />
    </div>
  );
};

export default Mastery;
