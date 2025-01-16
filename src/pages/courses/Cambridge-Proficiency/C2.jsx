import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CourseDisplay";

const C2 = () => {
  const courseId = "Proficiency";
  return (
    <div>
      <Hero />
      <Curriculum courseId={courseId} />
      <CoursesDisplay />
    </div>
  );
};

export default C2;
