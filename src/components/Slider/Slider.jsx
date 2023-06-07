import { Button, Carousel } from "@material-tailwind/react";
import image1 from "../../assets/slider/slide(1).jpg";
import image2 from "../../assets/slider/slide(2).jpg";
import image3 from "../../assets/slider/slide(3).jpg";

const Slider = () => {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      navigation={""}
      className="h-screen"
    >
      <div className="relative h-full w-full">
        <img
          src={image1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-custom1 bg-opacity-75">
          <div className="w-3/4 font-heading text-center text-white md:w-2/4 ">
            <h1 className="text-5xl leading-[4rem] uppercase font-bold">
              "The best fighter is never angry." <br /> - Lao Tzu
            </h1>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={image2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-custom1 bg-opacity-75">
          <div className="w-3/4 font-heading text-center text-white md:w-2/4 ">
            <h1 className="text-5xl leading-[4rem] uppercase font-bold">
              Immerse Yourself in Martial Arts Excellence at Camp Dojo
            </h1>
            <Button className="py-7 px-10 rounded-full bg-black">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={image3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-custom1 bg-opacity-75">
          <div className="w-3/4 font-heading text-center text-white md:w-2/4 ">
            <h1 className="text-5xl leading-[4rem] uppercase font-bold">
              Where there is preparation there is no fear
            </h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
