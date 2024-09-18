import React from "react";
const products = [
  {
    id: 1,
    href: '#',
    description: 'Learn how to do the Cambridge First B2 Exam',
    imageSrc: 'src/assets/b2_first.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    href: '#',
    description: 'Learn how to do the Cambridge Advanced C1 Exam',
    imageSrc: 'src/assets/c1_advanced.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    href: '#',
    description: 'Learn how to do the Cambridge Proficiency C2 Exam',
    imageSrc: 'src/assets/c2_pro.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    href: '#',
    description: 'English Grammar Essentials',
    imageSrc: 'src/assets/Gramatica-esencial.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    href: '#',
    description: 'The Essentials of English Pronunciation',
    imageSrc: 'src/assets/pronunciacion-en-ingles.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 6,
    href: '#',
    description: 'English Verbs - All you need to know',
    imageSrc: 'src/assets/verbos-en-ingles.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  // More products...
]

function Products() {
    return (
      <div className="bg-mellowGreen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="mt-5 text-lg font-medium text-gray-900 text-center">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  export default Products;