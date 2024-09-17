import React from "react";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Cambridge First",
      imgSrc: "src/assets/b2_first.png",
      paragraph: "Learn how to do the Cambridge First B2 Exam",
    },
    {
      id: 2,
      title: "Cambridge Advanced",
      imgSrc: "src/assets/c1_advanced.png",
      paragraph: "Learn how to do the Cambridge Advanced C1 Exam",
    },
    {
      id: 3,
      title: "Cambridge Proficiency",
      imgSrc: "src/assets/c2_pro.png",
      paragraph: "Learn how to do the Cambridge Proficiency C2 Exam",
    },
    {
      id: 4,
      title: "Gramática Esencial",
      imgSrc: "src/assets/Gramatica-esencial.png",
      paragraph: "Learn the essentials of English grammar",
    },
    {
      id: 5,
      title: "Pronunciación en Inglés",
      imgSrc: "src/assets/pronunciacion-en-ingles.png",
      paragraph: "Learn everything you need to know about Verbs in English",
    },
    {
      id: 6,
      title: "Verbos en Inglés",
      imgSrc: "src/assets/verbos-en-ingles.png",
      paragraph: "Learn all about English Pronunciation",
    },
  ];

  return (
    <div className="bg-[#00C699] p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg justify-between p-6 transition-shadow cursor-pointer h-[400px]"
            relative
            overflow-hidden
            flex
            flex-col
          >
            <div className="flex-grow">
              <img
                className="w-full h-[60%] object-cover mb-4 rounded-lg"
                src={course.imgSrc}
                alt={course.title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-center font-semibold text-gray-800">
                {course.title}
              </h3>
              <div>
                <p className="text-center">{course.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
