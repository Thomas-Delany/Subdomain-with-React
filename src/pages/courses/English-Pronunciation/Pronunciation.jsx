import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CourseDisplay";

const Pronunciation = () => {
  const courseId = "Pronunciation";
  return (
    <div>
      <Hero />
      <Curriculum courseId={courseId} />
      <CoursesDisplay />
    </div>
  );
};

export default Pronunciation;
