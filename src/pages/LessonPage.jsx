import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

const LessonPage = () => {
  const { course, unit, lessonId } = useParams(); // Get dynamic route parameters
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <p>Loading...</p>;
  }

  if (!lessonData) {
    return <p>Lesson not found</p>;
  }

  return (
    <LessonTemplate
      title={lessonData.title}
      content={lessonData.content}
      exercises={lessonData.exercises}
      videoUrl={lessonData.videoUrl}
    />
  );
};

export default LessonPage;
