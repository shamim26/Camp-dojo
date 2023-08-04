import React from "react";

const SingleEvent = ({ time, date, name, image }) => {
  return (
    <div className="md:flex items-center justify-between gap-6 border-b border-b-gray-100 pb-4">
      <img
        src={image}
        alt=""
        className="w-[109px] h-[106px] rounded-full object-cover"
      />
      <div className="flex-1">
        <small>{date}</small>
        <small className="ml-8 text-gray-500">{time}</small>
        <h3 className="text-3xl font-medium mt-5"> {name}</h3>
      </div>
      <button className="px-6 py-3 hover:bg-custom1 text-sm bg-custom2 text-gray-200 rounded-full uppercase font-medium">
        Learn More
      </button>
    </div>
  );
};

export default SingleEvent;
