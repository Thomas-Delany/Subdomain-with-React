import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const products = [
  {
    id: 1,
    category: "C2",
    name: "Mastery",
    description: "C2 —  Mastery",
    imageSrc: "../../src/assets/C2-new.png",
    imageAlt: "C2 Mastery",
  },
  {
    id: 2,
    category: "B2Cambridge",
    name: "First",
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "../../src/assets/b2_first.png",
    imageAlt: "B2 Cambrdige",
  },
  {
    id: 3,
    category: "C1Cambridge",
    name: "Advanced",
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "../../src/assets/c1_advanced.png",
    imageAlt: "C1 Cambrdige",
  },
  {
    id: 4,
    category: "C2Cambridge",
    name: "Proficiency",
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "../../src/assets/c2_pro.png",
    imageAlt: "C2 Cambrdige",
  },
  {
    id: 5,
    category: "Pronunciation",
    name: "EnglishPronunciation",
    description: "Learn all about English Pronunciation",
    imageSrc: "../../src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 6,
    category: "EnglishGrammar",
    name: "Grammar",
    description: "Learn the Essentials of English Grammar",
    imageSrc: "../../src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 7,
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

        {/* First section: Render the product with index 0 in its own centered grid */}
        <div className="grid grid-cols-1 place-items-center py-4">
          {products.slice(0, 1).map((product) => (
            <Link
              key={product.id}
              to={`/courses/${product.category}/${product.name}`}
              className="group bg-white rounded-lg w-full sm:max-w-sm"
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

        {/* Second section: Render the rest of the products from index 1 onwards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.slice(1).map((product, index) => (
            <React.Fragment key={product.id}>
              {/* Cambridge Courses */}
              {index === 0 && (
                <div className="col-span-full flex justify-center items-center">
                  <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
                    Cambridge Courses
                  </h2>
                </div>
              )}
              {/* Specialized Courses */}
              {index === 3 && (
                <div className="col-span-full flex justify-center items-center">
                  <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
                    Specialized Courses
                  </h2>
                </div>
              )}
              <Link to={`/courses/${product.category}/${product.name}`} className="group bg-white rounded-lg">
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
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDisplay;
