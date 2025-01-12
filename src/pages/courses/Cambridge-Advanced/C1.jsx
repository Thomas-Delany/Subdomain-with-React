import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CourseDisplay";

const C1 = () => {
  return (
    <div>
      <Hero />
      <Curriculum />
      <NextLevel category="C2Cambridge" name="Proficiency" />
      <CoursesDisplay />
    </div>
  );
};

export default C1;
