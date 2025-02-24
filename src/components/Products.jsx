import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;
import { courseData } from "../data/courseData";

const Products = () => {
  const progressingCourses = courseData.slice(0, 6);
  const cambridgeCourses = courseData.slice(6, 9);
  const specializedCourses = courseData.slice(9, 12);

  // Reusable function to render a course section
  const renderCoursesSection = (title, courses) => (
    <>
      <h2 className="text-4xl md:text-5xl text-center font-bold text-white leading-tight font-dosis py-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-6">
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
    <div className="bg-[#00C699] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Render course sections */}
        {renderCoursesSection("Select Your Level", progressingCourses)}
        {renderCoursesSection("Cambridge Exams", cambridgeCourses)}
        {renderCoursesSection("Specialized Learning", specializedCourses)}
      </div>
    </div>
  );
};

export default Products;
