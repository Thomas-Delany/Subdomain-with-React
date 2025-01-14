import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CourseDisplay";
import { courseData } from "../../../data/courseData";  

const C1 = () => {
  const currentCourseIndex = courseData.findIndex(
      (product) => product.name === "AdvancedNew"
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

export default C1;
