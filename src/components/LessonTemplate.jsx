import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, Moon, Sun } from "lucide-react";
import NextLessonButton from "./NextLessonButton";
import PreviousLessonButton from "./PreviousLessonButton";

const LessonTemplate = ({
  title,
  content,
  exercises,
  prevLessonPath,
  nextLessonPath,
}) => {
  const { course } = useParams();
  const navigate = useNavigate();

  const courseHomepages = {
    A1: "BreakThrough",
    A2: "WayStage",
    B1: "ThresHold",
    B2: "Vantage",
    C1: "Advanced",
    C2: "Mastery",
    B2Cambridge: "First",
    C1Cambridge: "AdvancedNew",
    C2Cambridge: "Proficiency",
    EnglishGrammar: "Grammar",
    Pronunciation: "EnglishPronunciation",
    VerbsInEnglish: "Verbs",
  };

  const homepageMappings = {
    First: "B2Cambridge",
    AdvancedNew: "C1Cambridge",
    Proficiency: "C2Cambridge",
    EnglishPronunciation: "Pronunciation",
    Grammar: "EnglishGrammar",
    Verbs: "VerbsInEnglish",
  };

  const correctCourse = homepageMappings[course] || course;
  const homepage = `/courses/${correctCourse}/${courseHomepages[correctCourse] || correctCourse
    }`;

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } min-h-screen`}
    >
      <div className="flex items-center justify-center gap-x-2 p-4 pt-12">
        <button
          onClick={() => navigate(homepage)}
          className="text-3xl text-gray-600 hover:text-gray-800"
        >
          <X size={38} />
        </button>
        <div className="w-5/6 bg-gray-200 h-6 rounded-2xl"></div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-3xl text-gray-600 hover:text-gray-800"
        >
          {darkMode ? <Sun size={32} /> : <Moon size={32} />}
        </button>
      </div>
      <div>
        <h1 className="py-8 pt-12 font-dosis text-4xl text-center font-bold leading-tight">
          {title}
        </h1>
      </div>

      <div>
        <h2 className="py-3 font-dosis text-3xl text-center font-bold leading-tight">
          {content}
        </h2>
      </div>

      <ul className="py-10 space-y-4 font-dosis text-2xl text-center font-bold leading-tight">
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>

      {/* Button Container */}
      <div class="flex flex-row items-center justify-center py-10 pb-28 space-x-4 font-dosis font-bold">
        <PreviousLessonButton prevLessonPath={prevLessonPath} />
        <NextLessonButton nextLessonPath={nextLessonPath} />
      </div>
    </div>
  );
};

export default LessonTemplate;