import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    category: "A1",
    name: "BreakThrough",
    description: "A1 —  BreakThrough",
    imageSrc: "../../src/assets/A1-new.png",
    imageAlt: "A1 BreakThrough",
  },
  {
    id: 2,
    category: "A2",
    name: "WayStage",
    description: "A2 —  WayStage",
    imageSrc: "../../src/assets/A2-new.png",
    imageAlt: "A2 WayStage",
  },
  {
    id: 3,
    category: "B1",
    name: "ThresHold",
    description: "B1 —  ThresHold",
    imageSrc: "../../src/assets/B1-new.png",
    imageAlt: "B1 ThresHold",
  },
  {
    id: 4,
    category: "B2",
    name: "Vantage",
    description: "B2 —  Vantage",
    imageSrc: "../../src/assets/B2-new.png",
    imageAlt: "B2 Vantage",
  },
  {
    id: 5,
    category: "C1",
    name: "Advanced",
    description: "C1 —  Advanced",
    imageSrc: "../../src/assets/C1-new.png",
    imageAlt: "C1 Advanced",
  },
  {
    id: 6,
    category: "C2",
    name: "Mastery",
    description: "C2 —  Mastery",
    imageSrc: "../../src/assets/C2-new.png",
    imageAlt: "C2 Mastery",
  },
  {
    id: 7,
    category: "Pronunciation",
    name: "EnglishPronunciation",
    description: "Learn all about English Pronunciation",
    imageSrc: "../../src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 8,
    category: "EnglishGrammar",
    name: "Grammar",
    description: "Learn the Essentials of English Grammar",
    imageSrc: "../../src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 9,
    category: "VerbsInEnglish",
    name: "Verbs",
    description: "Everything to do with English Verbs",
    imageSrc: "../../src/assets/verbos-en-ingles.png",
    imageAlt: "English verbs",
  },
];

const CoursesDisplay = () => {
  return (
    <div className="bg-[#e2edf1] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-6 sm:px-6 sm:py-24 md:pt-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
          Ensure you keep progressing
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.map((product, index) => (
            <>
              {/* Specialized Courses */}
              {index === 6 && (
                <div className="col-span-full flex justify-center items-center">
                  <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
                    Specialized Courses
                  </h2>
                </div>
              )}
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDisplay;
