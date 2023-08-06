import React, { useContext } from "react";
import { DarkContext } from "../../../context/DarkMoodContext";
import blog1 from "../../../assets/blog/blog(1).jpg";
import blog2 from "../../../assets/blog/blog(2).jpg";
import blog3 from "../../../assets/blog/blog(3).jpg";
import Button from "../../../components/Button/Button";

const Blog = () => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <div className={`${isDarkMode ? "bg-custom2" : "bg-[#f0f0f4]"}`}>
      <div className="container w-9/12 mx-auto py-32">
        <h1
          className={` font-heading font-bold text-4xl text-center mb-2 ${
            isDarkMode ? "text-gray-300" : "text-black"
          }`}
        >
          Our Blogs
        </h1>
        <p className="flex justify-center text-custom1 text-sm font-semibold mb-16">
          More blogs
        </p>
        {/*Blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white md:col-span-2 flex flex-col md:flex-row">
            <img
              className="w-[23rem] h-[20rem] object-cover"
              src={blog1}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-medium ">
                How to get started with a personal trainer
              </h3>
              <p className="text-gray-500 text-justify">
                From unforgettable adventures to valuable life skills, Camp Dojo
                offers a comprehensive platform that goes beyond traditional
                learning. Dive into a world of imagination, growth, and
                camaraderie...
              </p>
              <Button />
            </div>
          </div>
          <div className="bg-white md:row-span-2">
            <img
              className="w-[23rem] h-[20rem] object-cover"
              src={blog2}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-medium ">
                Meet our member: Gabriel Lopez
              </h3>
              <p className="text-gray-500 text-justify">
                Enter the digital playground of Camp Dojo, where young explorers
                embark on thrilling journeys of discovery. With a range of
                captivating virtual camps and activities, kids can delve into
                fascinating worlds, broaden their horizons...
              </p>
              <Button />
            </div>
          </div>
          <div className="bg-white md:col-span-2 flex flex-col md:flex-row-reverse">
            <img
              className="w-[23rem] h-[20rem] object-cover"
              src={blog3}
              alt=""
            />
            <div className="p-6 space-y-2 ">
              <h3 className="text-2xl font-medium ">
                Enhancing Summer Break with Camp Dojo: A Parent's Guide
              </h3>
              <p className="text-gray-500 text-justify">
                Parents, gear up for an unforgettable summer break with Camp
                Dojo. Discover the website's features, benefits, and the
                incredible value it brings to your child's education and leisure
                time...
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
