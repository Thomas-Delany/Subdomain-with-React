import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import CoursesDisplay from "./CoursesDisplay";

const Mastery = () => {
  const courseId = "C2";
  return (
    <div>
      <Hero />
      <Curriculum courseId={courseId} />
      <CoursesDisplay />
    </div>
  );
};

export default Mastery;
