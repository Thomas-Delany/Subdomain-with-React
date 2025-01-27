import NextLessonButton from "./NextLessonButton";
import PreviousLessonButton from "./PreviousLessonButton";

const LessonTemplate = ({
  title,
  content,
  exercises,
  prevLessonPath,
  nextLessonPath,
}) => {
  return (
    <div className="lesson bg-[#00C699]">
      <h1 className="py-10 font-dosis text-4xl text-center font-bold text-white leading-tight">
        {title}
      </h1>

      <div className="video-container m-4 flex flex-col items-center">


        {/* Button Container */}
        <div class="flex flex-row items-center justify-center py-4 space-x-4 font-dosis font-bold">
          <PreviousLessonButton prevLessonPath={prevLessonPath} />
          <NextLessonButton nextLessonPath={nextLessonPath} />
        </div>
      </div>

      <div>
        <h2 className="py-3 font-dosis text-3xl text-center font-bold text-white leading-tight">
          {content}
        </h2>
      </div>

      <ul className="py-3 font-dosis text-2xl text-center font-bold text-white leading-tight">
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonTemplate;
