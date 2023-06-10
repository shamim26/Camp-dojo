import HomeSlider from "../../../components/HomeSlider/HomeSlider";
import About from "../About/About";
import Instructor from "../Instructor/Instructor";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <PopularClass />
      <Instructor />
      <About />
    </div>
  );
};

export default Home;
