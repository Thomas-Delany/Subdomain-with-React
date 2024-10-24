const LessonTemplate = ({ title, videoUrl, content, exercises }) => {
  return (
    <div className="lesson">
      <h1>{title}</h1>

      {/* Video embed */}
      {videoUrl && (
        <div className="video-container my-4">
          <iframe
            width="560"
            height="315"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}

      <div>{content}</div>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonTemplate;
