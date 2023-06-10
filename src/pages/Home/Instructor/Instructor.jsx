import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import InstructorImage from "./InstructorImage";
import { DarkContext } from "../../../context/DarkMoodContext";

const Instructor = () => {
  const { isDarkMode } = useContext(DarkContext);

  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://camp-dojo-server.vercel.app/users");
      return res.json();
    },
  });
  return (
    <div className={isDarkMode ? "bg-custom2" : ""}>
      <div className="container w-9/12 mx-auto py-32">
        <h1
          className={` font-heading font-medium text-3xl text-center mb-2 ${
            isDarkMode ? "text-gray-300" : "text-black"
          }`}
        >
          Top Instructors
        </h1>
        <Link
          className="flex justify-center text-custom1 text-sm font-semibold mb-16"
          to="/instructors"
        >
          All Instructors
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instructors.slice(0, 6).map((instructor) => (
            <InstructorImage key={instructor?._id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
