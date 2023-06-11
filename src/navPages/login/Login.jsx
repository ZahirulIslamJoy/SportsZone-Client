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
    <div  style={{backgroundImage: "url('bg2.jpg')", opacity: 0.9}} className="bg-[#282a35] bg-cover  bg-no-repeat bg-center h-full text-white">
      <h1 className="text-center text-3xl font-semibold  pt-20">
        Connect Us With Login!
      </h1>
      <div className="w-1/2 mt-24 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
          <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email Address "
            />
          </div>
          <div>
          <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
            Password
            </label>
            <input
              {...register("password")}
              type={showPass ? "text" : "password"}
              id="floating_standard1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Password"
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
             <BsFillEyeSlashFill  ></BsFillEyeSlashFill>
            ) : (
              <BsFillEyeFill size={25}  ></BsFillEyeFill>
              
            )}
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none "
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account yet?
          <Link to="/register">
            <span className="text-blue-700 px-1 bg-black py-1 rounded-sm cursor-pointer ">Register</span>
          </Link>
        </p>
        <div className="text-center">
          <h1 className="mt-12 text-black">OR!!</h1>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleGithubLogin}
              className="flex items-center mb-16  py-1 rounded-lg px-2 gap-2 bg-gray-500"
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
