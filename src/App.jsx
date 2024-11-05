import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import FreeCourse from "./components/FreeCourse";
import Footer from "./components/Footer";
import BreakThrough from "./pages/courses/A1/BreakThrough";
import WayStage from "./pages/courses/A2/WayStage";
import ThresHold from "./pages/courses/B1/ThresHold";
import Vantage from "./pages/courses/B2/Vantage";
import Advanced from "./pages/courses/C1/Advanced";
import Mastery from "./pages/courses/C2/Mastery";
import B2 from "./pages/courses/Cambridge-First/B2";
import C1 from "./pages/courses/Cambridge-Advanced/C1";
import C2 from "./pages/courses/Cambridge-Proficiency/C2";
import Grammar from "./pages/courses/English-Grammar/Grammar";
import Pronunciation from "./pages/courses/English-Pronunciation/Pronunciation";
import Verbs from "./pages/courses/Verbs-In-English/Verbs";
import Free from "./pages/courses/FreeCourse/Free";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <>
      {/* ScrollToTop ensures user is taken to top when navigating courses */}
      <ScrollToTop />
      <Navbar /> {/* Navbar stays the same for all pages */}
      <Routes>
        {/* Route for the Home page */}
        <Route
          path="/"
          element={
            <>
              <Products />
              <FreeCourse />
            </>
          }
        />

        {/* Route for each Course page */}
        <Route path="/courses/A1/BreakThrough" element={<BreakThrough />} />
        <Route path="/courses/A2/WayStage" element={<WayStage />} />
        <Route path="/courses/B1/ThresHold" element={<ThresHold />} />
        <Route path="/courses/B2/Vantage" element={<Vantage />} />
        <Route path="/courses/C1/Advanced" element={<Advanced />} />
        <Route path="/courses/C2/Mastery" element={<Mastery />} />
        <Route path="/courses/Cambridge-First/B2" element={<B2 />} />
        <Route path="/courses/Cambridge-Advanced/C1" element={<C1 />} />
        <Route path="/courses/Cambridge-Proficiency/C2" element={<C2 />} />
        <Route path="/courses/English-Grammar/Grammar" element={<Grammar />} />
        <Route
          path="/courses/English-Pronunciation/Pronunciation"
          element={<Pronunciation />}
        />
        <Route path="/courses/Verbs-In-English/Verbs" element={<Verbs />} />
        <Route path="/courses/FreeCourse/Free" element={<Free />} />

        {/* Route for individual lesson pages */}
        <Route
          path="/lessons/:course/:unit/:lessonId"
          element={<LessonPage />}
        />
      </Routes>
      <Footer />
      {/* Footer stays the same for all pages */}
    </>
  );
}

export default App;
