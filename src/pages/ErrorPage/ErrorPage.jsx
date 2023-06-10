import { Button } from "@material-tailwind/react";
import gif from "../../assets/error.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <img className="" src={gif} alt="" />
      <Link className="px-4 bg-custom2 text-white rounded-full py-1" to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
