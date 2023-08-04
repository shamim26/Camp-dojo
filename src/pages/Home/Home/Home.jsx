import HomeSlider from "../../../components/HomeSlider/HomeSlider";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import About from "../About/About";
import Events from "../Events/Events";
import Instructor from "../Instructor/Instructor";
import Para from "../Parallax/Parallax";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <About />
      <PopularClass />
      <Events />
      <Instructor />
      <Para />
      <ScrollToTop />
    </div>
  );
};

export default Home;
