import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CoursesDisplay";

const BreakThrough = () => {
  return (
    <div>
    <Hero />
    <Curriculum />
    <NextLevel category="A2" name="WayStage" />
    <CoursesDisplay />
    </div>
  );
};

export default BreakThrough;
