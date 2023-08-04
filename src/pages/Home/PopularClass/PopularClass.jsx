import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
import { DarkContext } from "../../../context/DarkMoodContext";

const PopularClass = () => {
  const { isDarkMode } = useContext(DarkContext);

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://camp-dojo-server.vercel.app/home-classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className={isDarkMode ? "bg-[#2a264d]" : "bg-[#f0f0f4]"}>
      <div className="container w-9/12 mx-auto py-32">
        <h1
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } font-heading font-bold text-4xl text-center mb-2`}
        >
          Popular Classes
        </h1>
        <Link
          className="flex justify-center text-custom1 text-sm font-semibold mb-16"
          to="/classes"
        >
          More Class
        </Link>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 p-6 ${
            isDarkMode ? "bg-[#2a264d]" : "bg-[#f0f0f4]"
          } `}
        >
          {classes.map((classItem) => (
            <ImageDisplay key={classItem?._id} classItem={classItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
