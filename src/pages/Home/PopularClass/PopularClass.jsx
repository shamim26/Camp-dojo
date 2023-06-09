import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5100/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="container w-9/12 mx-auto my-32">
      <h1 className="font-heading font-medium text-3xl text-center mb-2">
        Popular Classes
      </h1>
      <Link
        className="flex justify-center text-custom1 text-sm font-semibold mb-16"
        to="/classes"
      >
        More Class
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6 bg-[#f0f0f4]">
        {classes.map((classItem) => (
          <ImageDisplay key={classItem?._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
