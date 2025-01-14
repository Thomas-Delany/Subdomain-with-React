import React from "react"; 
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CoursesDisplay";
import { courseData } from "../../../data/courseData";

const ThresHold = () => {
  const currentCourseIndex = courseData.findIndex(
      (product) => product.name === "ThresHold"
    );
  
    const nextCourse = courseData[currentCourseIndex + 1] || null;
  return (
    <div>
     <Hero />
     <Curriculum />
     {nextCourse ? (
        <NextLevel category={nextCourse.category} name={nextCourse.name} />
      ) : (
        <h2>No Next Level</h2>
      )}
     <CoursesDisplay /> 
    </div>
  );
};

export default ThresHold;
