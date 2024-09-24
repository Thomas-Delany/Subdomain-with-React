import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import FreeCourse from "./components/FreeCourse";
import Footer from "./components/Footer";
import A1 from "./pages/courses/A1"; // Import course pages
{
  /* import LessonPage from "./pages/lessons/LessonPage"; // Import LessonPage component*/
}

function App() {
  return (
    <Router>
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
        {/*<Route path="/course/A2" element={<A2Page />} />
        <Route path="/course/B1" element={<B1Page />} />
        <Route path="/course/B2" element={<B2Page />} />
        <Route path="/course/C1" element={<C1Page />} />
        <Route path="/course/C2" element={<C2Page />} />*/}

        {/* Route for individual lesson pages */}
        <Route
          path="/course/:courseId/lesson/:lessonId"
          element={<LessonPage />}
        />
      </Routes>
      <Footer /> {/* Footer stays the same for all pages */}
    </Router>
  );
}

export default App;
