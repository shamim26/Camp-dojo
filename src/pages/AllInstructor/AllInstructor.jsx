import React, { useContext } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useQuery } from "react-query";
import SingleInstructor from "./SingleInstructor";
import { Spinner } from "@material-tailwind/react";
import { DarkContext } from "../../context/DarkMoodContext";

const AllInstructor = () => {
  const { isDarkMode } = useContext(DarkContext);
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://camp-dojo-server.vercel.app/users");
      return res.json();
    },
  });
  return (
    <div className={isDarkMode ? "bg-custom2" : "bg-gray-100"}>
      <PageBanner heading={"Instructors"} />
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="container w-9/12 mx-auto grid grid-cols-1 gap-3 md:gap-10 md:grid-cols-3 py-32">
          {instructors.map((instructor) => (
            <SingleInstructor key={instructor?._id} instructor={instructor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInstructor;
