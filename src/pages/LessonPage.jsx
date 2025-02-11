import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

const LessonPage = () => {
  const { course, unit, lessonId } = useParams(); // Get dynamic route parameters
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevLessonPath, setPrevLessonPath] = useState(null);
  const [nextLessonPath, setNextLessonPath] = useState(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const courseData = await import(`../data/${course}.json`);
        const lessons = courseData.units.flatMap((u) => u.lessons);

        const currentIndex = lessons.findIndex((l) => l.id === lessonId);
        if (currentIndex !== -1) {
          setLessonData(lessons[currentIndex]);
          setPrevLessonPath(
            currentIndex > 0
              ? `/lessons/${course}/${courseData.units.find((u) => u.lessons.includes(lessons[currentIndex - 1])).unit}/${lessons[currentIndex - 1].id}`
              : null
          );
          setNextLessonPath(
            currentIndex < lessons.length - 1
              ? `/lessons/${course}/${courseData.units.find((u) => u.lessons.includes(lessons[currentIndex + 1])).unit}/${lessons[currentIndex + 1].id}`
              : null
          );
        } else {
          setLessonData(null);
        }
      } catch (error) {
        console.error("Error loading course data:", error);
        setLessonData(null);
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