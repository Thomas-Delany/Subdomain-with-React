import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const products = [
  {
    id: 1,
    category: "A1",
    name: "BreakThrough",
    description: "A1 —  BreakThrough",
    imageSrc: "src/assets/A1-new.png",
    imageAlt: "A1 BreakThrough",
  },
  {
    id: 2,
    category: "A2",
    name: "WayStage",
    description: "A2 — WayStage",
    imageSrc: "src/assets/A2-new.png",
    imageAlt: "A2 WayStage",
  },
  {
    id: 3,
    category: "B1",
    name: "ThresHold",
    description: "B1 —  ThresHold",
    imageSrc: "src/assets/B1-new.png",
    imageAlt: "B1 ThresHold",
  },
  {
    id: 4,
    category: "B2",
    name: "Vantage",
    description: "B2 —  Vantage",
    imageSrc: "src/assets/B2-new.png",
    imageAlt: "B2 Vantage",
  },
  {
    id: 5,
    category: "C1",
    name: "Advanced",
    description: "C1 —  Advanced",
    imageSrc: "src/assets/C1-new.png",
    imageAlt: "C1 Advanced",
  },
  {
    id: 6,
    category: "C2",
    name: "Mastery",
    description: "C2 —  Mastery",
    imageSrc: "src/assets/C2-new.png",
    imageAlt: "C2 Mastery",
  },
  {
    id: 7,
    category: "B2Cambridge",
    name: "First",
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "src/assets/b2_first.png",
    imageAlt: "B2 Cambrdige",
  },
  {
    id: 8,
    category: "C1Cambridge",
    name: "AdvancedNew",
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "src/assets/c1_advanced.png",
    imageAlt: "C1 Cambrdige",
  },
  {
    id: 9,
    category: "C2Cambridge",
    name: "Proficiency",
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "src/assets/c2_pro.png",
    imageAlt: "C2 Cambridge",
  },
  {
    id: 10,
    category: "Pronunciation",
    name: "EnglishPronunciation",
    description: "Learn all about English Pronunciation",
    imageSrc: "src/assets/pronunciacion-en-ingles.png",
    imageAlt: "English Pronunciation",
  },
  {
    id: 11,
    category: "EnglishGrammar",
    name: "Grammar",
    description: "Learn the Essentials of English Grammar",
    imageSrc: "src/assets/Gramatica-esencial.png",
    imageAlt: "English Grammar",
  },
  {
    id: 12,
    category: "VerbsInEnglish",
    name: "Verbs",
    description: "Auxiliaries, Modals, Copulas, Active & Passive Voice, Get...",
    imageSrc: "src/assets/verbos-en-ingles.png",
    imageAlt: "English verbs",
  },
  // More products...
];

function Products() {
  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-white leading-tight font-dosis py-4">Select Your Level</h2>  
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.map((product, index) => (
            <>
              {/* Cambridge Courses Display */}
              {index === 6 && (
                <div className="col-span-full flex justify-center items-center py-4">
                  <h2 className="text-4xl md:text-5xl text-center font-bold text-white font-dosis">
                    Cambridge
                  </h2>
                </div>
              )}
              {/* Cambridge Courses Display */}
              {index === 9 && (
                <div className="col-span-full flex justify-center items-center py-4">
                  <h2 className="text-4xl md:text-5xl text-center font-bold text-white font-dosis">
                    Specialized
                  </h2>
                </div>
              )}
              <Link
                key={product.id}
                to={`${baseUrl}courses/${product.category}/${product.name}`}
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
      </div>
    </div>
  );
}
export default Products;
