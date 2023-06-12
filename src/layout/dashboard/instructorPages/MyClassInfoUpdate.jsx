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
            <div>
               <label
              className="block mb-2 text-sm font-medium text-black"
            >
            Class Name
            </label>
              <input
                {...register("name")}
                type="text"
                className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Class Name"
              />
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-black"
            >
            Total Seats
            </label>
              <input
                {...register("seats")}
                type="number"
                min={0}
                className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Seats "
              />
            </div>
            <div>
            <label
              className="block mb-2 text-sm font-medium text-black"
            >
          Total Price
            </label>
              <input
                {...register("price")}
                type="number"
                min={1}
                className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Price"
              />
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
