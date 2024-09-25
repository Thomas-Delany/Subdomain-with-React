import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import FreeCourse from "./components/FreeCourse";
import Footer from "./components/Footer";
import A1 from "./pages/courses/A1"; // Import course pages
import A2 from "./pages/courses/A2";
import B1 from "./pages/courses/B1";
import B2 from "./pages/courses/B2";
import C1 from "./pages/courses/C1";
import C2 from "./pages/courses/C2";
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
        <Route path="/courses/A1" element={<A1 />} />
        <Route path="/courses/A2" element={<A2 />} />
        <Route path="/courses/B1" element={<B1 />} />
        <Route path="/courses/B2" element={<B2 />} />
        <Route path="/courses/C1" element={<C1 />} />
        <Route path="/courses/C2" element={<C2 />} />
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
      <Footer /> {/* Footer stays the same for all pages */}
    </>
  );
}

export default App;
