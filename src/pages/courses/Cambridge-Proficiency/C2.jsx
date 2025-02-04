import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CourseDisplay";
import curriculumData from "../../../data/curriculumData";

const C2 = () => {
  const courseId = "C2Proficiency";
  const courseUnit = curriculumData[courseId];

  return (
    <div>
      <Hero />
      <Curriculum unit={courseUnit} />
      <CoursesDisplay />
    </div>
  );
};

export default C2;
