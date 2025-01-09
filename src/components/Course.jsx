import React from "react";
import { useParams } from "react-router-dom";

import BreakThrough from "../pages/courses/A1/BreakThrough";
import WayStage from "../pages/courses/A2/WayStage";
import ThresHold from "../pages/courses/B1/ThresHold";
import Vantage from "../pages/courses/B2/Vantage";
import Advanced from "../pages/courses/C1/Advanced";
import Mastery from "../pages/courses/C2/Mastery";
import B2 from "../pages/courses/Cambridge-First/B2";
import C1 from "../pages/courses/Cambridge-Advanced/C1";
import C2 from "../pages/courses/Cambridge-Proficiency/C2";
import Grammar from "../pages/courses/English-Grammar/Grammar";
import Pronunciation from "../pages/courses/English-Pronunciation/Pronunciation";
import Verbs from "../pages/courses/Verbs-In-English/Verbs";

function Course() {
  const { category, courseName } = useParams();

  const courseComponents = {
    BreakThrough: <BreakThrough />,
    WayStage: <WayStage />,
    ThresHold: <ThresHold />,
    Vantage: <Vantage />,
    Advanced: <Advanced />,
    Mastery: <Mastery />,
    B2First: <B2 />,
    C1Advanced: <C1 />,
    C2Proficiency: <C2 />,
    Grammar: <Grammar />,
    Pronunciation: <Pronunciation />,
    Verbs: <Verbs />,
  };

  const selectedCourse = courseComponents[courseName];

  return (
    <div>
      {selectedCourse} || <h1>Course not found</h1>
    </div>
  );
}

export default Course;
