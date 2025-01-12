import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CourseDisplay";

const B2 = () => {
  return (
    <div>
      <Hero />
      <Curriculum />
      <NextLevel category="C1Cambridge" name="AdvancedNew"/>
      <CoursesDisplay />
    </div>
  );
};

export default B2;
