import React from "react";

function Courses() {
  const courses = [
    { id: 1, title: "Course 1", imgSrc: "src/assets/b2_first.png" },
    { id: 2, title: "Course 2", imgSrc: "src/assets/c1_advanced.png" },
    { id: 3, title: "Course 3", imgSrc: "src/assets/c2_pro.png" },
    { id: 4, title: "Course 4", imgSrc: "src/assets/Gramatica-esencial.png" },
    { id: 5, title: "Course 5", imgSrc: "src/assets/pronunciacion-en-ingles.png" },
    { id: 6, title: "Course 6", imgSrc: "src/assets/verbos-en-ingles.png" },
  ];

  return (
    <div className="bg-[#00C699] p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              className="w-full h-32 object-cover mb-4"
              src={course.imgSrc}
              alt={course.title}
            />
            <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
