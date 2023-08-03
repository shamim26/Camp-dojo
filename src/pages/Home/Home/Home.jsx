import HomeSlider from "../../../components/HomeSlider/HomeSlider";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
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
      <ScrollToTop />
    </div>
  );
};

export default Home;
