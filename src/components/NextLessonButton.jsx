import { useNavigate } from "react-router-dom";

const NextLessonButton = ({ nextLessonPath }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (nextLessonPath) {
      navigate(nextLessonPath);
    }
  };

  return (
    <button
      onClick={handleNextClick}
      disabled={!nextLessonPath}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Next Lesson
    </button>
  );
};

export default NextLessonButton;
