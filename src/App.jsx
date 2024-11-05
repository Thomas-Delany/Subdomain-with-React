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
import B2First from "./pages/courses/B2-Cambridge-First/B2First";
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
        <Route path="/courses/B2-Cambridge-First/B2First" element={<B2First />} />
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
