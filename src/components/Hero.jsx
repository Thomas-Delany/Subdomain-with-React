import React from "react";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-screen p-8 bg-gray-100">
      {/* Left Section: H1 */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Welcome to Our Platform!
        </h1>
      </div>
      {/* Right Section: Image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <img
          className="w-80 h-80 object-cover"
          src="src/assets/20.svg"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
export default Hero;


{/*const Hero = ({
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
export default Hero; */}
