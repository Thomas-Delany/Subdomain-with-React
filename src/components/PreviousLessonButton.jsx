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
      className="border border-[#00C699] py-3 px-4 rounded-lg text-lg w-48 h-12 flex items-center justify-center"
    >
      Previous Lesson
    </button>
  );
};

export default PreviousLessonButton;
