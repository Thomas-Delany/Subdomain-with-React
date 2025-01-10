import React from "react";
  import Hero from "./Hero";
  import Curriculum from "./Curriculum";
  import NextLevel from "./NextLevel";
  import CoursesDisplay from "./CoursesDisplay"; 

const Vantage = () => {
  return (
    <div> 
    <Hero />
    <Curriculum />
    <NextLevel category="C1" name="Advanced" />
    <CoursesDisplay /> 
    </div>
  );
};

export default Vantage;
