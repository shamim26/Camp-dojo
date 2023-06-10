import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { DarkContext } from "../../context/DarkMoodContext";

const HomeSlider = () => {
  const { isDarkMode } = useContext(DarkContext);
  return (
    <div className="h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper h-screen"
      >
        <SwiperSlide
          className={`${
            isDarkMode ? "bg-[#03001cba]" : "bg-custom1"
          } bg-blend-multiply bg-no-repeat bg-cover`}
          style={{
            backgroundImage: "url(https://i.ibb.co/PDmw6Db/slide-1.jpg)",
          }}
        >
          <div className="flex flex-col text-white justify-center items-center h-screen w-2/5 mx-auto">
            <AttentionSeeker duration={1000}>
              <h1 className="text-3xl md:text-5xl leading-[4rem] uppercase font-bold">
                "The best fighter is never angry." <br /> - Lao Tzu
              </h1>
            </AttentionSeeker>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${
            isDarkMode ? "bg-[#03001cba]" : "bg-custom1"
          } bg-blend-multiply bg-no-repeat bg-cover`}
          style={{
            backgroundImage:
              "url(https://i.ibb.co/vYT3Tdy/portrait-little-boy-kimono-with-blue-belt-training-isolated-white-studio-background.jpg)",
          }}
        >
          <div className="flex flex-col text-white justify-center items-center h-screen w-2/5 mx-auto">
            <h1 className="text-3xl md:text-5xl leading-[4rem] uppercase font-bold">
              <Fade delay={1e3} duration={500} direction="down" cascade>
                <span>Immerse Yourself in</span> <span>Martial Arts</span>{" "}
                <span>Excellence at Camp Dojo</span>
              </Fade>
            </h1>
            <AttentionSeeker effect="flash">
              <Button className="py-7 px-10 rounded-full bg-black">
                Explore
              </Button>
            </AttentionSeeker>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${
            isDarkMode ? "bg-[#03001cba]" : "bg-custom1"
          } bg-blend-multiply bg-no-repeat bg-cover`}
          style={{
            backgroundImage:
              "url(https://i.ibb.co/8cgxgjm/two-boys-children-fighting-training-martial-sport-karate-isolated-white-studio-background.jpg)",
          }}
        >
          <div className="flex flex-col text-white justify-center items-center h-screen w-2/5 mx-auto">
            <h1 className="md:text-5xl text-3xl leading-[4rem] uppercase font-bold">
              <Fade delay={1000} direction="down" cascade>
                <span>Where there is</span> <span>preparation there is no</span>{" "}
                <span>fear</span>
              </Fade>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
