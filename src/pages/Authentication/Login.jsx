import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const [hidden, setHidden] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.error(err));
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
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
          <h1 className="text-3xl font-medium">Login</h1>
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
            {...register("password", { required: true })}
            className=" rounded-full bg-opacity-30 outline-none bg-gray-500 py-2 px-3"
            type={hidden ? "password" : "text"}
            placeholder="Password"
          />
          {errors.password && (
            <small className="text-red-500">Please enter your password</small>
          )}
          <span
            onClick={() => setHidden(!hidden)}
            className="absolute top-[9.7rem] right-10 cursor-pointer"
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
          <div>
            <Button
              type="submit"
              className="bg-custom1 mr-4 hover:bg-gray-500 duration-300 rounded-full"
            >
              Login
            </Button>
            <span>
              <small className="font-light cursor-pointer">
                Forget Password?
              </small>
            </span>
          </div>
          <small className="font-light cursor-pointer"> Or login with</small>
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
            to="/registration"
            className="font-medium border-b-2 border-white hover:border-custom1 duration-300 w-[160px]"
          >
            Register new account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
