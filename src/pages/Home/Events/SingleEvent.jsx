import { useContext } from "react";
import { DarkContext } from "../../../context/DarkMoodContext";

const SingleEvent = ({ time, date, name, image }) => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-base"
      } md:flex items-center justify-between gap-6 border-b border-b-gray-100 pb-4`}
    >
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
      <button
        className={` ${
          isDarkMode
            ? "bg-custom1 hover:bg-custom2"
            : "bg-custom2 hover:bg-custom1"
        } px-6 py-3 hover:bg-custom1 text-sm text-gray-200 rounded-full uppercase font-medium transition-all duration-200 ease-in`}
      >
        Learn More
      </button>
    </div>
  );
};

export default SingleEvent;
