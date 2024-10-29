import { useNavigate } from "react-router-dom";

const PreviousLessonButton = ({ prevLessonPath }) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (prevLessonPath) {
      navigate(prevLessonPath);
    }
  };

  return (
    <button
      onClick={handlePrevClick}
      disabled={!prevLessonPath}
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      Previous Lesson
    </button>
  );
};

export default PreviousLessonButton;
