import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../context/DarkMoodContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

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
    <div className={isDarkMode ? "bg-custom2" : " bg-[#f0f0f4]"}>
      <div className="container w-9/12 mx-auto py-32">
        <h1
          className={` font-heading font-bold text-4xl text-center mb-2 ${
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
        <div className="">
          <Swiper
            // slidesPerView={3}
            spaceBetween={50}
            centeredSlides={false}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {instructors.slice(0, 6).map((instructor) => (
              <SwiperSlide key={instructor?._id}>
                <Card className=" shadow-none rounded-none">
                  <CardHeader
                    floated={false}
                    className="h-80 overflow-hidden shadow-none rounded-none m-0"
                  >
                    <img
                      src={instructor?.image}
                      className="hover:scale-110 transition-all duration-300 rounded-none"
                      alt="profile-picture"
                    />
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      {instructor?.name}
                    </Typography>
                    <Typography
                      color="blue"
                      className="font-medium"
                      textGradient
                    >
                      {instructor?.email}
                    </Typography>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
