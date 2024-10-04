import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import FreeCourse from "./components/FreeCourse";
import Footer from "./components/Footer";
import BreakThrough from "./pages/courses/A1/BreakThrough"; // Import course pages
import WayStage from "./pages/courses/A2/WayStage";
import ThresHold from "./pages/courses/B1/ThresHold";
import Vantage from "./pages/courses/B2/Vantage";
import Advanced from "./pages/courses/C1/Advanced";
import Mastery from "./pages/courses/C2/Mastery";
import B2CambridgeFirst from "./pages/courses/B2CambridgeFirst";
import C1CambridgeAdvanced from "./pages/courses/C1CambridgeAdvanced";
import C2CambridgeProficiency from "./pages/courses/C2CambridgeProficiency";
import GramaticaEsencial from "./pages/courses/GramaticaEsencial";
import VerbosEnIngles from "./pages/courses/VerbosEnIngles";
import PronunciacionEnIngles from "./pages/courses/PronunciacionEnIngles";
import LessonPage from "./pages/lessons/LessonPage"; // Import LessonPage component

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar /> {/* Navbar stays the same for all pages */}
      <Routes>
        {/* Route for the Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
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
        <Route path="/courses/B2CambridgeFirst" element={<B2CambridgeFirst />} />
        <Route path="/courses/C1CambridgeAdvanced" element={<C1CambridgeAdvanced />} />
        <Route path="/courses/C2CambridgeProficiency" element={<C2CambridgeProficiency />} />
        <Route path="/courses/GramaticaEsencial" element={<GramaticaEsencial />} />
        <Route path="/courses/VerbosEnIngles" element={<VerbosEnIngles />} />
        <Route path="/courses/PronunciacionEnIngles" element={<PronunciacionEnIngles />} />

        {/* Route for individual lesson pages */}
        <Route
          path="/courses/:courseId/lesson/:lessonId"
          element={<LessonPage />}
        />
      </Routes>
      <Footer />
       {/* Footer stays the same for all pages */}
    </>
  );
}

export default App;
