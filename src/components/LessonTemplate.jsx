const LessonTemplate = ({ title, content, exercises }) => {
  return (
    <div className="lesson">
      <h1>{title}</h1>
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
