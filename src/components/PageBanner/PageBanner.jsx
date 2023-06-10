import React, { useContext } from "react";
import banner from "../../assets/banner.jpg";
import { DarkContext } from "../../context/DarkMoodContext";

const PageBanner = ({ heading }) => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className={`h-96 bg-cover ${
        isDarkMode ? "bg-[#03001cba]" : "bg-custom1"
      }  bg-blend-multiply flex flex-col items-center justify-center`}
    >
      <h1 className=" text-4xl text-white font-bold font-heading">{heading}</h1>
    </div>
  );
};

export default PageBanner;
