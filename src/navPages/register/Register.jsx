import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { signInWithGit, creatUserWithEp, handeleSignOut } =
    useContext(AuthContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    const confirmpass = data.confirmpassword;

    

    if (password !== confirmpass) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password and Confirm Password must be same",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const userInfo = {
      name,
      email,
      role: "student",
      photo,
    };

    creatUserWithEp(data.email, data.password)
      .then((result) => {
        update(result, name, photo);
        handeleSignOut();
        fetch(`${import.meta.env.VITE_URL}/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.upsertedCount>0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration is Complete,Login Now",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const update = (user, name, photo) => {
    updateProfile(user.user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {});
  };

  const handleGithubLogin = () => {
    signInWithGit()
      .then((result) => {
        const user = result.user;
        const name =user?.displayName;
        const email=user?.email;
        const role="student";
        const photo=user?.photoURL;
        const userInfo={
          name,email,role,photo
        }
        fetch(`${import.meta.env.VITE_URL}/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(data => {
            navigate("/");
          })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div style={{backgroundImage: "url('bg.jpg')", opacity: 0.9}} className="bg-[#282a35] bg-cover  py-16 bg-no-repeat bg-center h-full text-white">
        <h1 className="text-center text-3xl font-semibold  pt-20">
          Connect Us With Register!
        </h1>
        <div className="w-1/2  mt-24 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Name*
            </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Email*
            </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Password*
            </label>
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[@#$%!*^&+=~]).{6,}$/,
                })}
                type={showPass ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Password "
              />
              <div onClick={() => setShowPass(!showPass)} className="mt-2">
                {showPass ? (
                  <BsFillEyeSlashFill></BsFillEyeSlashFill>
                ) : (
                  <BsFillEyeFill></BsFillEyeFill>
                )}
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600" role="alert">
                  Password must Contains One Uppercase and a Special Character and six Character Long {" "}
                </p>
              )}
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
            Confirm Password*
            </label>
              <input
                {...register("confirmpassword", { required: true })}
                type={showConfirmPass ? "text" : "password"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Confirm Password"
              />
              <div
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="mt-2"
              >
                {showConfirmPass ? (
                  <BsFillEyeSlashFill></BsFillEyeSlashFill>
                ) : (
                  <BsFillEyeFill></BsFillEyeFill>
                )}
              </div>
              {errors.confirmpassword?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Confirm Password is required
                </p>
              )}
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
           Photo Url*
            </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" "
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Photo Url is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Register
            </button>
          </form>
          <p>
            Already Have an Account?
            <Link to="/login">
              <span className="text-blue-700  bg-black py-1 rounded-sm cursor-pointer ">Login</span>
            </Link>
          </p>
          <div className="text-center">
            <h1>OR!!</h1>
            <div className="flex justify-center  mt-4">
              <button
                onClick={handleGithubLogin}
                className="flex items-center mb-12  py-1 rounded-lg px-2 gap-2 bg-gray-500"
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
    </div>
  );
};

export default Register;
