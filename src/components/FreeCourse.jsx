import React from "react";

function FreeCourse() {
  return (
    <div className="bg-mellowGreen min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <a className="group bg-white rounded-lg">
          <div className="w-full overflow-hidden rounded-t-lg">
            <img
              src="src/assets/verbos-en-ingles.png"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="mt-0 w-full rounded-lg">
            <div className="w-8/12 mx-auto">
              <p className="py-8 text-lg font-bold text-black text-center">
                English Grammar Essentials
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FreeCourse;
