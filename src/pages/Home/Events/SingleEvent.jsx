import React from "react";

const SingleEvent = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <img
        src="https://graphicriver.img.customer.envatousercontent.com/files/196687581/Karate+Championships+Sports+Flyer+Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=65d652c3c9859d9b94833c1015826e6a"
        alt=""
        className="w-[109px] rounded-full object-contain"
      />
      <div className="flex-1">
        <small>1 April, 2023</small>
        <small className="ml-8 text-gray-500">Starting 00.00</small>
        <h3 className="text-3xl font-medium mt-5"> Karate Grand Prix Ostrava.</h3>
      </div>
      <button className="px-6 py-3 hover:bg-custom1 bg-custom2 text-white rounded-full">
        Learn More
      </button>
    </div>
  );
};

export default SingleEvent;
