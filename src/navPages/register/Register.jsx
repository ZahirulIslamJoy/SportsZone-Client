import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGit, creatUserWithEp,handeleSignOut } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate();
  console.log(errors)

  const onSubmit = (data) => {
    const name=data.name;
    const photo=data.photo;
    const email=data.email;
    const password=data.password;
    const confirmpass=data.confirmpassword;
 
    

    if(password !== confirmpass){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password and Confirm Password must be same',
        showConfirmButton: false,
        timer: 1500
      })
        return;
    }






    creatUserWithEp(data.email, data.password)
      .then((result) => {
        update(result,name,photo);
        handeleSignOut()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registration is Complete,Login Now',
            showConfirmButton: false,
            timer: 1500
          })
        navigate("/login")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const update=(user,name,photo)=>{
    updateProfile(user.user, {
      displayName:name, photoURL:photo
    }).then(() => {
    }).catch((error) => {
    });
  }

  const handleGithubLogin = () => {
    signInWithGit()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="bg-[#081229] text-white">
        <h1 className="text-center text-3xl font-semibold  pt-20">
          Connect Us With Register!
        </h1>
        <div className="w-1/2  mt-24 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative  z-0">
              <input
                {...register("name",{ required: true })}
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name*
              </label>
              {errors.name?.type === 'required' && <p className="text-red-600"  role="alert">Name is required</p>}
            </div>
            <div className="relative mt-5  z-0">
              <input
                {...register("email",{ required: true })}
                type="email"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email*
              </label>
              {errors.email?.type === 'required' && <p className="text-red-600"  role="alert">Email is required</p>}
            </div>
            <div className="relative mt-5 z-0">
              <input
                {...register("password",{ required: true,pattern:/^(?=.*[A-Z])(?=.*[@#$%!*^&+=~])/ })}
                type="text"
                id="floating_standard1"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard1"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password*
              </label>
              {errors.password?.type === 'required' && <p className="text-red-600"  role="alert">Password is required</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600"  role="alert">Password must Contains One Uppercase and a Special Character </p>}
            </div>
            <div className="relative mt-5 z-0">
              <input
                {...register("confirmpassword",{ required: true })}
                type="text"
                id="floating_standard1"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard1"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password*
              </label>
              {errors.confirmpassword?.type === 'required' && <p className="text-red-600"  role="alert">Confirm Password is required</p>}
            </div>
            <div className="relative mt-5  z-0">
              <input
                {...register("photo",{ required: true })}
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo Url*
              </label>
              {errors.photo?.type === 'required' && <p className="text-red-600"  role="alert">Photo Url is required</p>}
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
              <span className="text-blue-600 cursor-pointer ">Login</span>
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
