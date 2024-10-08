import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { href: "#", label: "A1 — BreakThrough" },
  { href: "#", label: "A2 — WayStage" },
  { href: "#", label: "B1 — ThresHold" },
  { href: "#", label: "B2 — Vantage" },
  { href: "#", label: "C1 — Advanced" },
  { href: "#", label: "C2 — Mastery" },
  { href: "#", label: "B2 Cambridge First" },
  { href: "#", label: "C1 Cambridge Advanced" },
  { href: "#", label: "C2 Cambridge Proficiency" },
  { href: "#", label: "Gramática Esencial" },
  { href: "#", label: "Verbos en Inglés" },
  { href: "#", label: "Pronunciación en Inglés" },
  { href: "#", label: "Take a Free Course!" },
];

const reservoirLinks = [
  { href: "#", label: "English Grammar" },
  { href: "#", label: "Verbs in English" },
  { href: "#", label: "English Confusions" },
  { href: "#", label: "Cambridge Courses" },
  { href: "#", label: "Punctuation" },
  { href: "#", label: "Pronunciation" },
  { href: "#", label: "Blog" },
];

const moreLinks = [
  { href: "#", label: "About us" },
  { href: "#", label: "Learn for Free!" },
  { href: "#", label: "Our Teaching Method" },
  { href: "#", label: "Affiliate Programme" },
];

const socialLinks = [
  { href: "#", label: "YouTube-ES" },
  { href: "#", label: "YouTube-EN" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Twitter/X" },
];

function Footer() {
  return (
    <footer className="bg-[#00C699] text-white font-dosis flex flex-col items-center">
      <div className="container p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-center md:text-left">
          
            {/* Our Courses */}
            <div className="mb-6">
              <h2 className="mb-2.5 font-bold text-2xl">
                Our Courses
              </h2>
              <ul className="mb-0 list-none">
                {courses.map((course, index) => (
                  <li key={index} className="mb-4 text-lg font-medium">
                    <Link to={course.href} className="hover:underline">
                      {course.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reservoir! */}
            <div className="mb-6">
              <h2 className="mb-2.5 font-bold text-2xl">
                Reservoir!
              </h2>
              <ul className="mb-0 list-none">
                {reservoirLinks.map((link, index) => (
                  <li key={index} className="mb-4 text-lg font-medium">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div className="mb-6 ">
              <h2 className="mb-2.5 font-bold text-2xl">
                More
              </h2>
              <ul className="mb-0 list-none">
                {moreLinks.map((link, index) => (
                  <li key={index} className="mb-4 text-lg font-medium">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* social */}
            <div className="mb-6">
              <h2 className="mb-2.5 font-bold text-2xl">
                Socials
              </h2>
              <ul className="mb-0 list-none">
                {socialLinks.map((link, index) => (
                  <li key={index} className="mb-4 text-lg font-medium">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
