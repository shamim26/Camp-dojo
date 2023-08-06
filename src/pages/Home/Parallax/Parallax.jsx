import bg from "../../../assets/dojo-bg.jpg";
import logo from "../../../assets/icon.png";

const Para = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-gray-400 bg-blend-multiply bg-cover bg-fixed bg-center flex items-center"
    >
      {/* <img src={logo} alt="" /> */}
      <div className="container w-9/12 mx-auto text-white flex flex-col items-start gap-6 md:gap-16">
        <h1 className="space-y-2">
          <span className=" block text-4xl font-bold tracking-wider md:tracking-[1.4rem] pl-3">
            MARTIAL ARTS
          </span>{" "}
          <span className=" block text-8xl font-bold md:tracking-[0.6rem]">
            OPEN DAY
          </span>{" "}
          <span className=" block text-3xl font-bold tracking-wider md:pl-10">
            4th March 00 AM to 00 PM
          </span>
        </h1>
        <div className="flex gap-10 justify-center md:ml-16">
          <button className="uppercase font-medium text-sm px-7 py-3 rounded-full bg-[#212226] hover:bg-custom1">
            Details
          </button>
          <button className="uppercase font-medium text-sm px-7 py-3 rounded-full bg-custom1 hover:bg-[#212226]">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Para;
