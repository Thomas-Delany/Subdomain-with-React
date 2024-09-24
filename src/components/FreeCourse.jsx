import React from "react";

function FreeCourse() {
  return (
    <div className="bg-mellowGreen py-4 pb-32 flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-4 sm:px-6 sm:py-4 lg:max-w-3xl lg:px-8">
        <div className="flex justify-center items-center py-8">
          <h1 className="text-4xl text-center font-bold text-white font-sans leading-tight">
            Take our free English course!
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <a className="group bg-white rounded-lg">
            <div className="w-full overflow-hidden rounded-t-lg">
              <img
                src="src/assets/free-english-course.png"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-0 w-full rounded-lg">
              <div className="w-8/12 mx-auto">
                <p className="py-8 text-lg font-bold text-black text-center">
                Start learning now for Free and get to know about our Teaching Method.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FreeCourse;
