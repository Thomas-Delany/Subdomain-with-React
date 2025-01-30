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
    <div className="lesson bg-[#ffffff]">
      <h1 className="py-8 font-dosis text-4xl text-center font-bold text-white leading-tight text-[#333652]">
        {title}
      </h1>

      <div>
        <h2 className="py-3 font-dosis text-3xl text-center font-bold text-white leading-tight text-[#333652]">
          {content}
        </h2>
      </div>

      <ul className="py-10 space-y-4 font-dosis text-2xl text-center font-bold text-white leading-tight text-[#333652]">
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>

      {/* Button Container */}
      <div class="flex flex-row items-center justify-center py-10 pb-28 space-x-4 font-dosis font-bold">
        <PreviousLessonButton prevLessonPath={prevLessonPath} />
        <NextLessonButton nextLessonPath={nextLessonPath} />
      </div>
    </div>
  );
};

export default LessonTemplate;
