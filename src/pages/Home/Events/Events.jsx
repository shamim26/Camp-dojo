import { useContext } from "react";
import { DarkContext } from "../../../context/DarkMoodContext";
import SingleEvent from "./SingleEvent";

const Events = () => {
  const { isDarkMode } = useContext(DarkContext);

  return (
    <div className={isDarkMode ? "bg-custom2" : ""}>
      <div className="container md:w-7/12 mx-auto py-32">
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
        <div className="container mx-auto px-10 flex flex-col md:gap-8">
          <SingleEvent
            time={"Starting at 00:00"}
            date={"1 April, 2024"}
            name={"Karate Grand Prix Ostrava."}
            image={
              "https://graphicriver.img.customer.envatousercontent.com/files/196687581/Karate+Championships+Sports+Flyer+Preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=65d652c3c9859d9b94833c1015826e6a"
            }
          />
          <SingleEvent
            time={"Starting at 00:00"}
            date={"20 December, 2023"}
            name={"High Kick Karate."}
            image={
              "https://img.freepik.com/premium-vector/karate-tournament-social-media-post-template_9245-748.jpg"
            }
          />
          <SingleEvent
            time={"Starting at 00:00"}
            date={"20 October, 2023"}
            name={"Art Of Defensee."}
            image={
              "https://cdn3.vectorstock.com/i/1000x1000/58/37/karate-tournament-flyer-design-template-vector-38095837.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
