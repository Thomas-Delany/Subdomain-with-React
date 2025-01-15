import React from "react";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL;

const courses = [
  { href: `${baseUrl}courses/A1/BreakThrough`, label: "A1 — BreakThrough" },
  { href: `${baseUrl}courses/A2/WayStage`, label: "A2 — WayStage" },
  { href: `${baseUrl}courses/B1/ThresHold`, label: "B1 — ThresHold" },
  { href: `${baseUrl}courses/B2/Vantage`, label: "B2 — Vantage" },
  { href: `${baseUrl}courses/C1/Advanced`, label: "C1 — Advanced" },
  { href: `${baseUrl}courses/C2/Mastery`, label: "C2 — Mastery" },
  { href: `${baseUrl}courses/B2Cambridge/First`, label: "B2 Cambridge First"},
  { href: `${baseUrl}courses/C1Cambridge/AdvancedNew`, label: "C1 Cambridge Advanced"},
  { href: `${baseUrl}courses/C2Cambridge/Proficiency`, label: "C2 Cambridge Proficiency"},
  { href: `${baseUrl}courses/EnglishGrammar/Grammar`, label: "English Grammar"},
  { href: `${baseUrl}courses/VerbsInEnglish/Verbs`, label: "Verbs In English"},
  { href: `${baseUrl}courses/Pronunciation/EnglishPronunciation`, label: "Pronunciation"},
];

const reservoirLinks = [
  {
    href: "https://englishreservoir.co.uk/english-grammar/",
    label: "English Grammar",
  },
  {
    href: "https://englishreservoir.co.uk/english-verbs/",
    label: "Verbs in English",
  },
  {
    href: "https://englishreservoir.co.uk/english-confusions/",
    label: "English Confusions",
  },
  {
    href: "https://englishreservoir.co.uk/cambridge/",
    label: "Cambridge Courses",
  },
  {
    href: "https://englishreservoir.co.uk/english-punctuation",
    label: "Punctuation",
  },
  {
    href: "https://englishreservoir.co.uk/english-pronunciation/",
    label: "Pronunciation",
  },
  { href: "https://englishreservoir.co.uk/blog/", label: "Blog" },
];

const moreLinks = [
  {
    href: "https://englishreservoir.co.uk/about-english-reservoir",
    label: "About us",
  },
  {
    href: "https://www.youtube.com/@EnglishReservoir/featured",
    label: "Learn for Free!",
  },
  {
    href: "https://englishreservoir.co.uk/method-english-reservoir",
    label: "Our Teaching Method",
  },
  {
    href: "https://englishreservoir.co.uk/affiliate",
    label: "Affiliate Programme",
  },
];

const socialLinks = [
  { href: "https://www.youtube.com/@EnglishReservoirES", label: "YouTube-ES" },
  {
    href: "https://www.youtube.com/@EnglishReservoir/featured",
    label: "YouTube-EN",
  },
  { href: "https://www.facebook.com/Englishreservoir/", label: "Facebook" },
  {
    href: "https://www.instagram.com/english_reservoir/?hl=en",
    label: "Instagram",
  },
  { href: "https://twitter.com/EN_Reservoir", label: "Twitter/X" },
];

function Footer() {
  return (
    <footer className="bg-[#00C699] text-white font-dosis flex flex-col items-center">
      <div className="container p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-center md:text-left">
          {/* Our Courses */}
          <div className="mb-6">
            <h2 className="mb-2.5 font-bold text-2xl">Our Courses</h2>
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
            <h2 className="mb-2.5 font-bold text-2xl">Reservoir!</h2>
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
            <h2 className="mb-2.5 font-bold text-2xl">More</h2>
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
            <h2 className="mb-2.5 font-bold text-2xl">Socials</h2>
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
