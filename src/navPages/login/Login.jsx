import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#081229] text-white h-[70vh]">
      <h1 className="text-center text-3xl font-semibold  pt-20">
            Connect Us With Login!
      </h1>
      <div className="w-1/2  mt-24 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative  z-0">
            <input
              {...register("email")}
              type="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative mt-5 z-0">
            <input
             {...register("password")}
              type="password"
              id="floating_standard1"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard1"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account yet?
          <Link to="/register">
            <span className="text-blue-600 cursor-pointer ">Register</span>
          </Link>
        </p>
        <div className="text-center">
            <h1>OR!!</h1>
            <button>
                
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
