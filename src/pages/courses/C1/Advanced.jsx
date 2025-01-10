import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CoursesDisplay"; 

const Advanced = () => {
  return (
    <div> 
      <Hero />
      <Curriculum />
      <NextLevel category="C2" name="Mastery" />
      <CoursesDisplay /> 
    </div>
  );
};

export default Advanced;
