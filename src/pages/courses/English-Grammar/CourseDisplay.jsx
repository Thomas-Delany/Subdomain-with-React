import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const products = [
  {
    id: 1,
    href: `${baseUrl}courses/A1/BreakThrough`,
    description: "A1 —  BreakThrough",
    imageSrc: "../../src/assets/A1-new.png",
    imageAlt: "A1 BreakThrough",
  },
  {
    id: 2,
    href: `${baseUrl}courses/A2/WayStage`,
    description: "A2 —  WayStage",
    imageSrc: "../../src/assets/A2-new.png",
    imageAlt: "A2 WayStage",
  },
  {
    id: 3,
    href: `${baseUrl}courses/B1/ThresHold`,
    description: "B1 —  ThresHold",
    imageSrc: "../../src/assets/B1-new.png",
    imageAlt: "B1 ThresHold",
  },
  {
    id: 4,
    href: `${baseUrl}courses/B2/Vantage`,
    description: "B2 —  Vantage",
    imageSrc: "../../src/assets/B2-new.png",
    imageAlt: "B2 Vantage",
  },
  {
    id: 5,
    href: `${baseUrl}courses/C1/Advanced`,
    description: "C1 —  Advanced",
    imageSrc: "../../src/assets/C1-new.png",
    imageAlt: "C1 Advanced",
  },
  {
    id: 6,
    href: `${baseUrl}courses/C2/Mastery`,
    description: "C2 —  Mastery",
    imageSrc: "../../src/assets/C2-new.png",
    imageAlt: "C2 Mastery",
  },
  {
    id: 7,
    href: "/courses/B2CambridgeFirst",
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "../../src/assets/b2_first.png",
    imageAlt: "B2 Cambrdige",
  },
  {
    id: 8,
    href: "/courses/C1CambridgeAdvanced",
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "../../src/assets/c1_advanced.png",
    imageAlt: "C1 Cambrdige",
  },
  {
    id: 9,
    href: "/courses/C2CambridgeProficiency",
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "../../src/assets/c2_pro.png",
    imageAlt: "C2 Cambrdige",
  },
  {
    id: 10,
    href: "/courses/PronunciacionEnIngles",
    description: "Learn all about English Pronunciation",
    imageSrc: "../../src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 11,
    href: "/courses/GramaticaEsencial",
    description: "Learn the Essentials of English Grammar",
    imageSrc: "../../src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 12,
    href: "/courses/VerbosEnIngles",
    description: "Auxiliaries, Modals, Copulas, Active & Passive Voice, Get...",
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
              {/* Cambridge Courses */}
              {index === 6 && (
                <div className="col-span-full flex justify-center items-center">
                  <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
                    Cambridge Courses
                  </h2>
                </div>
              )}
              {/* Specialized Courses */}
              {index === 9 && (
                <div className="col-span-full flex justify-center items-center">
                  <h2 className="text-5xl text-center font-bold text-[#1b3679] leading-tight font-dosis pb-8 pt-8">
                    Specialized Courses
                  </h2>
                </div>
              )}
              <Link
                key={product.id}
                to={product.href} // Change href to to for react-router
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
