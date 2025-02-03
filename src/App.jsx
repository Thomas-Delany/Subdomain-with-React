import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Course from "./components/Course";
import Footer from "./components/Footer";
import LessonPage from "./pages/LessonPage";

function App() {
  const location = useLocation();
  const isLessonPage = location.pathname.startsWith("/lessons/")
  return (
    <>
      <ScrollToTop />
      {!isLessonPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
            </>
          }
        />

        {/* Dynamic route for individual courses */}
        <Route path="/courses/:category/:courseName" element={<Course />} />

        {/* Dynamic route for individual lesson pages */}
        <Route
          path="/lessons/:course/:unit/:lessonId"
          element={<LessonPage />}
        />
      </Routes>
      {!isLessonPage && <Footer />}

    </>
  );
}

export default App;


