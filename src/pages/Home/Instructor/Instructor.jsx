import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import InstructorImage from "./InstructorImage";

const Instructor = () => {
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5100/users");
      return res.json();
    },
  });
  return (
    <div className="container w-9/12 mx-auto my-32">
      <h1 className="font-heading font-medium text-3xl text-center mb-2">
        Top Instructors
      </h1>
      <Link
        className="flex justify-center text-custom1 text-sm font-semibold mb-16"
        to="/instructors"
      >
        All Instructors
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.slice(0,6).map((instructor) => (
          <InstructorImage key={instructor?._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
