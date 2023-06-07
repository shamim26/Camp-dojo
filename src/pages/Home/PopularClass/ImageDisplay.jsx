import React from "react";

const ImageDisplay = ({ classItem }) => {
  return (
    <div className="relative">
      <img
        className="w-[360px] h-[250px] object-cover"
        src={classItem?.image}
        alt=""
      />
      <div
        className="absolute bottom-0 left-0 right-0 top-0
       h-full w-full overflow-hidden bg-custom1
       bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"
      >
        <h1 className="text-xl text-white font-medium
         p-5">{classItem?.name}</h1>
      </div>
    </div>
  );
};

export default ImageDisplay;
