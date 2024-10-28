import NextLessonButton from "./NextLessonButton";
import PreviousLessonButton from "./PreviousLessonButton";

const LessonTemplate = ({ title, videoUrl, content, exercises, prevLessonPath, nextLessonPath }) => {
  return (
    <div className="lesson bg-[#00C699] text-white">
      <h1 className="py-3 font-dosis text-5xl text-center font-bold text-white leading-tight">{title}</h1>

      <div className="video-container m-4 flex justify-center items-center">
        {/* Previous Lesson Button */}
        <div className="p-5"><PreviousLessonButton prevLessonPath={prevLessonPath} />
        </div>
        

        {/* Video Embed */}
        {videoUrl && (
          <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        )}

        {/* Next Lesson Button */}
        <div className="p-5"><NextLessonButton nextLessonPath={nextLessonPath} />
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
