import React from "react";
import { Link } from "react-router-dom";
import { courseData } from "../../../data/courseData";

const CoursesDisplay = () => {
  const progressingCourses = courseData.slice(0, 6);
  const cambridgeCourses = courseData.slice(6, 9);
  const specializedCourses = courseData.filter((_, index) => index === 9 || index === 11);


  // Reusable function to render a course section
  const renderCoursesSection = (title, courses) => (
    <>
      <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
        {courses.map((product) => (
          <Link
            key={product.id}
            to={`/courses/${product.category}/${product.name}`}
            className="group bg-white rounded-lg"
          >
            <div className="w-full overflow-hidden rounded-t-lg">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-0 w-full rounded-lg">
              <div className="w-8/12 mx-auto">
                <p className="py-8 text-lg font-semibold text-[#1b3679] font-dosis text-center text-xl">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <div className="bg-[#e2edf1] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-6 sm:px-6 sm:py-24 md:pt-4 lg:max-w-7xl lg:px-8">
        {/* Render course sections */}
        {renderCoursesSection("Ensure you keep progressing", progressingCourses)}
        {renderCoursesSection("Cambridge Courses", cambridgeCourses)}
        {renderCoursesSection("Specialized Courses", specializedCourses)}
      </div>
    </div>
  );
};

export default CoursesDisplay;
