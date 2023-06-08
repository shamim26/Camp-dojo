import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useQuery } from "react-query";
import SingleInstructor from "./SingleInstructor";

const AllInstructor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5100/instructors");
      return res.json();
    },
  });
  return (
    <div className="bg-gray-100">
      <PageBanner heading={"Instructors"} />
      <div className="container w-9/12 mx-auto grid grid-cols-1 gap-3 md:gap-10 md:grid-cols-3 py-32">
        {instructors.map((instructor) => (
          <SingleInstructor key={instructor?._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
