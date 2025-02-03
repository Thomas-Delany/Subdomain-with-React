import React from "react";
import Hero from "./Hero";
import Curriculum from "./Curriculum";
import NextLevel from "./NextLevel";
import CoursesDisplay from "./CourseDisplay";
import { courseData } from "../../../data/courseData";
import curriculumData from "../../../data/curriculumData";

const B2 = () => {
  const courseId = "First";
  const courseUnit = curriculumData[courseId];

  const currentCourseIndex = courseData.findIndex(
    (product) => product.name === "First"
  );

  const nextCourse = courseData[currentCourseIndex + 1] || null;
  return (
    <div>
      <Hero />
      <Curriculum unit={courseUnit} />
      {nextCourse ? (
        <NextLevel category={nextCourse.category} name={nextCourse.name} />
      ) : (
        <h2>No Next Level</h2>
      )}
      <CoursesDisplay />
    </div>
  );
};

export default B2;
