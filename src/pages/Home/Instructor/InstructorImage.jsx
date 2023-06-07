import React from "react";

const InstructorImage = ({ instructor }) => {
  return (
    <div className="relative">
      <img
        className="w-[390px] h-[365px] object-cover "
        src={instructor?.image}
        alt=""
      />
      <div
        className="absolute bottom-0 left-0 right-0 top-0
       h-full w-full overflow-hidden bg-custom1
       bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"
      >
        <h1
          className="text-xl text-white font-medium text-end
         p-5"
        >
          {instructor?.name}
        </h1>
      </div>
    </div>
  );
};

export default InstructorImage;
