import React from 'react';

function Footer() {
  return (
    <footer
    className="bg-gray-800 lg:text-left">
    <div className="container p-12 justify-content mx-auto items-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {/* <!--First links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200 text-center">
            Our Courses
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >B2 Cambridge First</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >C1 Cambridge Advanced</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >C2 Cambridge Proficiency</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Gramática Esencial</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Verbos en Inglés</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Pronunciación en Inglés</a>
            </li>
          </ul>
        </div>

        {/* <!--Second links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200 text-center">
            Reservoir!
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >English Grammar</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Verbs in English</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >English Confusions</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Cambridge Courses</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Punctuation</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Pronunciation</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Take A Free Course!</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Blog</a>
            </li>
          </ul>
        </div>

        {/* <!--Third links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200 text-center">
            More
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >About Us</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Learn For Free!</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Our Teaching Method</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Affiliate Programme</a>
            </li>
          </ul>
        </div>

        {/* <!--Fourth links section--> */}
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200 text-center">
            Social
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >YouTube</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Instagram</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Twitter/X</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div
      className="bg-gray-800 p-4 text-center text-neutral-700 dark:text-neutral-200">
      © 2024 Copyright:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      >English Reservoir</a>
    </div>
  </footer>
  );
}

export default Footer;