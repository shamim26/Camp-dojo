import { useContext } from "react";
import { DarkContext } from "../../../context/DarkMoodContext";
import SingleEvent from "./SingleEvent";

const Events = () => {
  const { isDarkMode } = useContext(DarkContext);

  return (
    <div className={isDarkMode ? "bg-custom2" : ""}>
      <div className="container w-7/12 mx-auto py-32">
        <h1
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } font-heading font-bold text-4xl text-center mb-2`}
        >
          Events
        </h1>
        <p className="text-center text-custom1 text-sm font-semibold mb-16">
          More events
        </p>
        <div className="container  mx-auto px-10">
          <SingleEvent />
        </div>
      </div>
    </div>
  );
};

export default Events;
