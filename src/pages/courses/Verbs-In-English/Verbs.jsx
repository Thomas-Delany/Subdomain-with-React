import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CourseDisplay";

const Verbs = () => {
  const courseId = "Verbs";
  return (
    <div>
      <Hero />
      <Curriculum courseId={courseId} />
      <CoursesDisplay />
    </div>
  );
};

export default Verbs;
