import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    href: "/courses/A1",
    description: "A1 —  Acceso",
    imageSrc: "src/assets/b2_first.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    href: "/courses/A2",
    description: "A2 —  Plataforma",
    imageSrc: "src/assets/c1_advanced.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    href: "/courses/B1",
    description: "B1 —  Intermedio",
    imageSrc: "src/assets/c2_pro.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    href: "/courses/B2",
    description: "B2 —  Intermedio Alto",
    imageSrc: "src/assets/pronunciacion-en-ingles.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    href: "/courses/C1",
    description: "C1 —  Dominio Operativo Eficaz",
    imageSrc: "src/assets/Gramatica-esencial.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    href: "/courses/C2",
    description: "C2 —  Maestría",
    imageSrc: "src/assets/verbos-en-ingles.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  // More products...
];

function Products() {
  return (
    <div className="bg-mellowGreen min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.map((product) => (
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
                  <p className="py-8 text-lg font-bold text-black text-center">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
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
