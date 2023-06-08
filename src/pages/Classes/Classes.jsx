import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useQuery } from "react-query";
import SIngleClass from "./SIngleClass";
import { Spinner } from "@material-tailwind/react";

const Classes = () => {
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["approved-classes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5100/approved-classes");
      return res.json();
    },
  });
  return (
    <div className="bg-blue-gray-50">
      <PageBanner heading={"Classes"} />
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="container w-9/12 mx-auto  grid grid-cols-1 gap-3 md:gap-10 md:grid-cols-3 py-32">
          {classes.map((singleClass) => (
            <SIngleClass key={singleClass?._id} singleClass={singleClass} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
