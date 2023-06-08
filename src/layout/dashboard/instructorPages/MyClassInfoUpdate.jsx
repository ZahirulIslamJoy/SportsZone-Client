import React from "react";
import { useForm } from "react-hook-form";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyClassInfoUpdate = () => {
  const [axiosSecure] = useAxiosWithToken();
  const id = useParams().id;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const className = data.name;
    const price = data.price;
    const seats = data.seats;
    const updatedClassData = { className, price, seats };
    console.log(updatedClassData);
    const res = await axiosSecure.patch(`/updateclass/${id}`, updatedClassData);
    const result = res.data;
    if (result.modifiedCount == 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nothing is Addeded",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
        reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class Data Has Been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-12 ">Update Your Class Info</h1>
      <div>
        <div className="w-1/2  mt-24 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative  z-0">
              <input
                {...register("name")}
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Class Name
              </label>
            </div>
            <div className="relative mt-5 z-0">
              <input
                {...register("seats")}
                type="nunber"
                min={1}
                id="floating_standard1"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard1"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Total Seats
              </label>
            </div>
            <div className="relative mt-5 z-0">
              <input
                {...register("price")}
                type="nunber"
                min={1}
                id="floating_standard1"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard1"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <button
              type="submit"
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyClassInfoUpdate;
