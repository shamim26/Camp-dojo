import React from "react";

const Button = ({ children }) => {
  return (
    <button className="uppercase text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-custom1 bg-[#212226] transition-all duration-200 ease-linear">
      Read More
    </button>
  );
};

export default Button;
