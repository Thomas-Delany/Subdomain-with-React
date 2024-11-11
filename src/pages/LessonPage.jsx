import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LessonTemplate from "../components/LessonTemplate";
import NextLessonButton from "../components/NextLessonButton";
import PreviousLessonButton from "../components/PreviousLessonButton";

const LessonPage = () => {
  const { course, unit, lessonId } = useParams(); // Get dynamic route parameters
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevLessonPath, setPrevLessonPath] = useState(null);
  const [nextLessonPath, setNextLessonPath] = useState(null);

  // Helper function to get the path to the previous lesson or sublesson
  const getPreviousLessonPath = (course, unit, lessonId) => {
    const [mainLessonNumber, subLessonNumber] = lessonId
      .replace("Lesson", "")
      .split(".")
      .map(Number);

    // Handle sublessons if they exist
    if (subLessonNumber && subLessonNumber > 1) {
      // Go to the previous sublesson
      return `/lessons/${course}/${unit}/Lesson${mainLessonNumber}.${subLessonNumber - 1}`;
    }

    // Otherwise, go to the previous main lesson
    const previousLessonNumber = mainLessonNumber - 1;
    return previousLessonNumber > 0
      ? `/lessons/${course}/${unit}/Lesson${previousLessonNumber}`
      : null;
  };

  // Helper function to get the path to the next lesson or sublesson
  const getNextLessonPath = (course, unit, lessonId, selectedLesson) => {
    const [mainLessonNumber, subLessonNumber] = lessonId
      .replace("Lesson", "")
      .split(".")
      .map(Number);

    // Check if sublessons are available in the current lesson
    if (selectedLesson?.sublessons?.length) {
      const nextSubLessonNumber = subLessonNumber ? subLessonNumber + 1 : 1;
      // Check if the next sublesson exists
      if (nextSubLessonNumber <= selectedLesson.sublessons.length) {
        return `/lessons/${course}/${unit}/Lesson${mainLessonNumber}.${nextSubLessonNumber}`;
      }
    }

    // Otherwise, go to the next main lesson
    const nextLessonNumber = mainLessonNumber + 1;
    return `/lessons/${course}/${unit}/Lesson${nextLessonNumber}`;
  };

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        // Dynamically import the correct course JSON file
        const courseData = await import(`../data/${course}.json`);

        // Find the correct unit in the course
        const selectedUnit = courseData.units.find((u) => u.unit === unit);

        // Split lessonId to check for sublesson
        const [mainLessonId, subLessonId] = lessonId.split(".");

        // Find the main lesson
        const selectedLesson = selectedUnit
          ? selectedUnit.lessons.find((l) => l.id === mainLessonId)
          : null;

        // Handle sublesson if available
        let lessonContent = selectedLesson;
        if (selectedLesson && subLessonId) {
          const subLesson = selectedLesson.sublessons?.find(
            (sub, index) => index + 1 === Number(subLessonId)
          );
          if (subLesson) {
            lessonContent = { ...subLesson, title: `${selectedLesson.title} - ${subLesson.title}` };
          }
        }

        if (lessonContent) {
          setLessonData(lessonContent);
          setPrevLessonPath(getPreviousLessonPath(course, unit, lessonId));
          setNextLessonPath(getNextLessonPath(course, unit, lessonId, selectedLesson));
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
      videoUrl={lessonData.videoUrl}
      content={lessonData.content}
      exercises={lessonData.exercises}
      prevLessonPath={prevLessonPath}
      nextLessonPath={nextLessonPath}
    />
  );
};

export default LessonPage;
