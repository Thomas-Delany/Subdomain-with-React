import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const products = [
  {
    id: 1,
    href: `${baseUrl}courses/A1/BreakThrough`,
    description: "A1 —  BreakThrough",
    imageSrc: "src/assets/A1-new.png",
    imageAlt: "A1 BreakThrough",
  },
  {
    id: 2,
    href: `${baseUrl}courses/A2/WayStage`,
    description: "A2 — WayStage",
    imageSrc: "src/assets/A2-new.png",
    imageAlt: "A2 WayStage",
  },
  {
    id: 3,
    href: `${baseUrl}courses/B1/ThresHold`,
    description: "B1 —  ThresHold",
    imageSrc: "src/assets/B1-new.png",
    imageAlt: "B1 ThresHold",
  },
  {
    id: 4,
    href: `${baseUrl}courses/B2/Vantage`,
    description: "B2 —  Vantage",
    imageSrc: "src/assets/B2-new.png",
    imageAlt: "B2 Vantage",
  },
  {
    id: 5,
    href: `${baseUrl}courses/C1/Advanced`,
    description: "C1 —  Advanced",
    imageSrc: "src/assets/C1-new.png",
    imageAlt: "C1 Advanced",
  },
  {
    id: 6,
    href: `${baseUrl}courses/C2/Mastery`,
    description: "C2 —  Mastery",
    imageSrc: "src/assets/C2-new.png",
    imageAlt: "C2 Mastery",
  },
  {
    id: 7,
    href: `${baseUrl}courses/Cambridge-First/B2`,
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "src/assets/b2_first.png",
    imageAlt: "B2 Cambrdige",
  },
  {
    id: 8,
    href: `${baseUrl}courses/Cambridge-Advanced/C1`,
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "src/assets/c1_advanced.png",
    imageAlt: "C1 Cambrdige",
  },
  {
    id: 9,
    href: `${baseUrl}courses/Cambridge-Proficiency/C2`,
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "src/assets/c2_pro.png",
    imageAlt: "C2 Cambrdige",
  },
  {
    id: 10,
    href: `${baseUrl}courses/English-Pronunciation/Pronunciation`,
    description: "Learn all about English Pronunciation",
    imageSrc: "src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 11,
    href: `${baseUrl}courses/English-Grammar/Grammar`,
    description: "Learn the Essentials of English Grammar",
    imageSrc: "src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 12,
    href: `${baseUrl}courses/Verbs-In-English/Verbs`,
    description: "Auxiliaries, Modals, Copulas, Active & Passive Voice, Get...",
    imageSrc: "src/assets/verbos-en-ingles.png",
    imageAlt: "English verbs",
  },
  // More products...
];

function Products() {
  return (
    <div className="bg-[#00C699] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.map((product, index) => (
            <>
              {/* Cambridge Courses Display */}
              {index === 6 && (
                <div className="col-span-full flex justify-center items-center pt-8">
                  <h2 className="text-5xl text-center font-bold text-white leading-tight font-dosis">
                    Cambridge
                  </h2>
                </div>
              )}
              {/* Cambridge Courses Display */}
              {index === 9 && (
                <div className="col-span-full flex justify-center items-center pt-8">
                  <h2 className="text-5xl text-center font-bold text-white leading-tight font-dosis">
                    Specialized
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
                    <p className="py-8 text-xl font-bold font-dosis text-[#1C4F59] text-center">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <button className="px-32 py-3 bg-[rgb(79,70,229)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Get started!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Products;
