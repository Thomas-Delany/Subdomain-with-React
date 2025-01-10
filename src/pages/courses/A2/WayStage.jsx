import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CoursesDisplay";

const WayStage = () => {
  return (
    <div>
    <Hero />
    <Curriculum />
    <NextLevel category="B1" name="ThresHold" />
    <CoursesDisplay />
    </div>
  );
};

export default WayStage;