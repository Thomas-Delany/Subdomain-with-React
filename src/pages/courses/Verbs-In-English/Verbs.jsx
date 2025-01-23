import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CourseDisplay";
import curriculumData from "../../../data/curriculumData";

const Verbs = () => {
  const courseId = "Verbs";
  const courseUnit = curriculumData[courseId];

  return (
    <div>
      <Hero />
      <Curriculum unit={courseUnit} />
      <CoursesDisplay />
    </div>
  );
};

export default Verbs;
