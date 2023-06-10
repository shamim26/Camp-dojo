import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Registration = () => {
  const { createUser, updateUser, googleSignIn } = useAuth();
  const [passwordError, setPasswordError] = useState("");
  const [hidden, setHidden] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    if (data?.password !== data?.confirmPassword) {
      return setPasswordError("Please confirm password");
    } else {
      setPasswordError("");
    }
    createUser(data?.email, data?.confirmPassword)
      .then((result) => {
        const user = result.user;
        updateUser(data?.name, data?.photoUrl).then(() => {
          const userInfo = {
            image: data?.photoUrl,
            name: data?.name,
            email: data?.email,
            role: "student",
          };
          axios.post("http://localhost:5100/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              navigate("/");
            }
          });
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-screen bg-[#414045]">
      <div className="w-1/2 mx-auto py-32 text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mb-4 flex flex-col gap-6 p-6 bg-[#212026] max-w-[440px] mx-auto"
        >
          <h1 className="text-3xl font-medium">Register</h1>
          <input
            {...register("name", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <small className="text-red-500">Please enter your email</small>
          )}
          <input
            {...register("password", {
              required: true,
              pattern: /^(?=.*[0-6])(?=.*[A-Z])(?=.*[!@#$&*])/,
            })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type={isHidden ? "password" : "text"}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <small className="text-red-500">Please enter your password</small>
          )}
          {errors.password?.type === "pattern" && (
            <small className="text-red-500">
              Password must have one uppercase one spacial character and more
              than 6 character
            </small>
          )}
          <span
            onClick={() => setIsHidden(!isHidden)}
            className="absolute top-[13.8rem] right-10 cursor-pointer"
          >
            {isHidden ? (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M508 624a112 112 0 00112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 00-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 000 11.31L155.25 889a8 8 0 0011.31 0l712.16-712.12a8 8 0 000-11.32zM332 512a176 176 0 01258.88-155.28l-48.62 48.62a112.08 112.08 0 00-140.92 140.92l-48.62 48.62A175.09 175.09 0 01332 512z" />
                <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 01445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z" />
              </svg>
            )}
          </span>
          <input
            {...register("confirmPassword", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type={hidden ? "password" : "text"}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <small className="text-red-500">Please confirm your password</small>
          )}
          {passwordError && (
            <small className="text-red-500">{passwordError}</small>
          )}
          <span
            onClick={() => setHidden(!hidden)}
            className="absolute top-[17.8rem] right-10 cursor-pointer"
          >
            {hidden ? (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M508 624a112 112 0 00112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 00-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 000 11.31L155.25 889a8 8 0 0011.31 0l712.16-712.12a8 8 0 000-11.32zM332 512a176 176 0 01258.88-155.28l-48.62 48.62a112.08 112.08 0 00-140.92 140.92l-48.62 48.62A175.09 175.09 0 01332 512z" />
                <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 01445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z" />
              </svg>
            )}
          </span>
          <input
            {...register("photoUrl", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type="text"
            placeholder="photoUrl"
          />
          <div>
            <Button
              type="submit"
              className="bg-custom1 mr-4 hover:bg-gray-500 duration-300 rounded-full"
            >
              Register
            </Button>
            <span>
              <small className="font-light"> Or register with</small>
            </span>
          </div>

          <GoogleSignIn />
          <Link
            to="/login"
            className="font-medium border-b-2 border-white hover:border-custom1 duration-300 w-[180px]"
          >
            Login to existing account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
