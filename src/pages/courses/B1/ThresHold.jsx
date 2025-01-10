import React from "react"; 
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CoursesDisplay";

const ThresHold = () => {
  return (
    <div>
     <Hero />
     <Curriculum />
     <NextLevel category="B2" name="Vantage" />
     <CoursesDisplay /> 
    </div>
  );
};

export default ThresHold;
