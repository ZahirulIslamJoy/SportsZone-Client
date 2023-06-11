import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


//Todo:Field Validiation

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const imageKey = import.meta.env.VITE_imageKey;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageKey}`;

  const [axiosSecure] = useAxiosWithToken();

  const instructorName = user?.displayName;
  const instructorEmail = user?.email;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.classimage[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          const imageUrl = imgdata.data.display_url;
          const { className, seats, price } = data;
          const classInfo = {
            className,
            instructorName,
            instructorEmail,
            price: parseFloat(price),
            seats: parseFloat(seats),
            image: imageUrl,
            status: "pending",
            enrolled:0
          };
          axiosSecure.post("/classes", classInfo).then((data) => {
            if (data.data.insertedId) {
            reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Class Has Been Added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-12">Add Your  Class  </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mt-12 mx-auto">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Class Name
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("className")}
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            />
          </div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload Class Image
          </label>
          <input
            {...register("classimage")}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
          />
          <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Instructor Name
          </label>
          <input
            {...register("instructorName")}
            type="text"
            readOnly
            value={user?.displayName}
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          />
          <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Instructor Email
          </label>
          <input
            {...register("instructorEmail")}
            type="text"
            readOnly
            value={user?.email}
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          />
          <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Avaliable Seats
          </label>
          <input
            {...register("seats")}
            type="number"
            min={1}
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          />
          <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            min={1}
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          />
          <button
            type="submit"
            className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
