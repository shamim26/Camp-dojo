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
