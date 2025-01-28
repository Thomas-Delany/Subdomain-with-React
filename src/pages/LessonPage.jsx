import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

const LessonPage = () => {
  const { course, unit, lessonId } = useParams(); // Get dynamic route parameters
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevLessonPath, setPrevLessonPath] = useState(null);
  const [nextLessonPath, setNextLessonPath] = useState(null);

  // Helper function to get the path to the previous lesson
  const getPreviousLessonPath = (course, unit, lessonId) => {
    const currentLessonNumber = parseInt(lessonId.replace("Lesson", ""), 10);
    const previousLessonNumber = currentLessonNumber - 1;
    return previousLessonNumber > 0
      ? `/lessons/${course}/${unit}/Lesson${previousLessonNumber}`
      : null; // If there's no previous lesson, return null
  };

  // Helper function to get the path to the next lesson
  const getNextLessonPath = (course, unit, lessonId) => {
    const currentLessonNumber = parseInt(lessonId.replace("Lesson", ""), 10);
    const nextLessonNumber = currentLessonNumber + 1;
    return `/lessons/${course}/${unit}/Lesson${nextLessonNumber}`;
  };

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        // Dynamically import the correct course JSON file
        const courseData = await import(`../data/${course}.json`);

        // Find the correct unit in the course
        const selectedUnit = courseData.units.find((u) => u.unit === unit);

        // Find the correct lesson by its id (lessonId)
        const selectedLesson = selectedUnit
          ? selectedUnit.lessons.find((l) => l.id === lessonId)
          : null;

        if (selectedLesson) {
          setLessonData(selectedLesson);
          setPrevLessonPath(getPreviousLessonPath(course, unit, lessonId));
          setNextLessonPath(getNextLessonPath(course, unit, lessonId));
        } else {
          setLessonData(null); // Lesson not found
        }
      } catch (error) {
        console.error("Error loading course data:", error);
        setLessonData(null); // Handle case where course data is not found
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [course, unit, lessonId]);

  if (loading) {
    return <></>;
  }

  if (!lessonData) {
    return <p>Lesson not found</p>;
  }

  return (
    <LessonTemplate
      title={lessonData.title}
      content={lessonData.content}
      exercises={lessonData.exercises}
      prevLessonPath={prevLessonPath}
      nextLessonPath={nextLessonPath}
    />
  );
};

export default LessonPage;
