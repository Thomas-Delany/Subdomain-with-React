import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const products = [
  {
    id: 1,
    href: `${baseUrl}courses/Cambridge-First/B2`,
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "../../src/assets/b2_first.png",
    imageAlt: "B2 Cambrdige",
  },
  {
    id: 2,
    href: `${baseUrl}courses/Cambridge-Advanced/C1`,
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "../../src/assets/c1_advanced.png",
    imageAlt: "C1 Cambrdige",
  },
  {
    id: 3,
    href: `${baseUrl}courses/Cambridge-Proficiency/C2`,
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "../../src/assets/c2_pro.png",
    imageAlt: "C2 Cambrdige",
  },
  {
    id: 4,
    href: `${baseUrl}courses/English-Pronunciation/Pronunciation`,
    description: "Learn all about English Pronunciation",
    imageSrc: "../../src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 5,
    href: `${baseUrl}courses/English-Grammar/Grammar`,
    description: "Learn the Essentials of English Grammar",
    imageSrc: "../../src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 6,
    href: `${baseUrl}courses/Verbs-In-English/Verbs`,
    description: "Auxiliaries, Modals, Copulas, Active & Passive Voice, Get...",
    imageSrc: "../../src/assets/verbos-en-ingles.png",
    imageAlt: "English verbs",
  },
];

const CoursesDisplay = () => {
  return (
    <div className="bg-[#e2edf1] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-6 sm:px-6 sm:py-24 md:pt-4 lg:max-w-7xl lg:px-8">
        {/* Second section: Render the rest of the products from index 1 onwards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.slice(0).map((product, index) => (
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
              <Link to={product.href} className="group bg-white rounded-lg">
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
