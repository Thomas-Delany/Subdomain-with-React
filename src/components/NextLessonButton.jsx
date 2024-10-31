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
      className="bg-green-500 text-white py-3 px-4 rounded-lg text-lg w-48 h-12 flex items-center justify-center"
    >
      Next Lesson
    </button>
  );
};

export default NextLessonButton;
