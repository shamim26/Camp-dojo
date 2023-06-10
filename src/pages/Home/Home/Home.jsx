import HomeSlider from "../../../components/HomeSlider/HomeSlider";
import Slider from "../../../components/Slider/Slider";
import Instructor from "../Instructor/Instructor";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      {/* <Slider /> */}
      <PopularClass />
      <Instructor />
    </div>
  );
};

export default Home;
