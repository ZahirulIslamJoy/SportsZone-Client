import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handleLoginWithEp } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    handleLoginWithEp(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Provide Valid Email And Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const { signInWithGit } = useContext(AuthContext);

  const handleGithubLogin = () => {
    signInWithGit()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="bg-[#081229] text-white">
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
              type={showPass ? "text" : "password"}
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
          <div onClick={() => setShowPass(!showPass)} className="mt-2">
            {showPass ? (
             <BsFillEyeSlashFill></BsFillEyeSlashFill>
            ) : (
              <BsFillEyeFill></BsFillEyeFill>
              
            )}
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
          <div className="flex justify-center mt-4">
            <button
              onClick={handleGithubLogin}
              className="flex items-center  py-1 rounded-lg px-2 gap-2 bg-gray-500"
            >
              <div>Login With</div>
              <div>
                <BsGithub></BsGithub>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
