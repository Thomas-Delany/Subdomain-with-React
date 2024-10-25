const LessonTemplate = ({ title, videoUrl, content, exercises }) => {
  return (
    <div className="lesson bg-[#00C699] text-white">
      <h1 className="py-3 font-dosis text-5xl text-center font-bold text-white leading-tight">
        {title}
      </h1>

      {/* Video embed */}
      {videoUrl && (
        <div className="video-container m-4 flex justify-center items-center">
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
        </div>
      )}

      <h2 className="py-3 font-dosis text-3xl text-center font-bold text-white leading-tight">
        {content}
      </h2>
      <ul className="py-3 font-dosis text-2xl text-center font-bold text-white leading-tight">
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonTemplate;
