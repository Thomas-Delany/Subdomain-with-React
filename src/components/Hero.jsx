const Hero = ({
  title = "This is a title",
  subtitle = "This is a subtitle",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl.mx-auto.px-4 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">{title}</h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
