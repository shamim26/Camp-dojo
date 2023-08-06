import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import brand from "../../../assets/Brand/logo-8.png";
import brand2 from "../../../assets/Brand/logo-10.png";
import brand3 from "../../../assets/Brand/logo-11.png";
import brand4 from "../../../assets/Brand/logo-12.png";
import brand5 from "../../../assets/Brand/logo-13.png";
import brand6 from "../../../assets/Brand/logo-9.png";
import { useContext } from "react";
import { DarkContext } from "../../../context/DarkMoodContext";

const Sponsor = () => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <div className={`${isDarkMode?"bg-custom2":""} pb-20`}>
      <div className="bg-gray-400">
        <div className="container w-9/12 mx-auto py-2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-[9.3rem]" src={brand6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
