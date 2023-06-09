import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Registration = () => {
  const { createUser, updateUser, googleSignIn } = useAuth();
  const [passwordError, setPasswordError] = useState("");
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
    console.log(data);
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
            reset();
            navigate("/");  
          });
        });
      })
      .catch((err) => console.error(err));
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/");
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
            type="password"
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
          <input
            {...register("confirmPassword", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <small className="text-red-500">Please confirm your password</small>
          )}
          {passwordError && (
            <small className="text-red-500">{passwordError}</small>
          )}
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

          <span
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center gap-2 bg-blue-gray-200 bg-opacity-30 w-1/4 px-1 rounded-md"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
            </svg>
            Google
          </span>
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
