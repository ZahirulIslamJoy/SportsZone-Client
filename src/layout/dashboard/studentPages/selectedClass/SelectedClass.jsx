import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAddedClass from "../../../../hooks/useAddedClass";
import useAxiosWithToken from "../../../../hooks/useAxiosWithToken";

const SelectedClass = () => {
    const [SelectedClass,refetch]=useAddedClass();
    const [axiosSecure] = useAxiosWithToken();

  const handleClassDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      axiosSecure.delete(`/selectedClass/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your class has been Deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    });
  };

  return (
    <div>
      <h1 className="text-3xl mt-12 mb-12 text-center">
        Your Selected Classes
      </h1>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-1 py-3">
                Serial No
              </th>
              <th scope="col" className="px-1 py-3">
                Class Name
              </th>
              <th scope="col" className="px-6 ml-6 py-3">
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {SelectedClass?.map((classes, index) => (
              <tr
                key={classes._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6  py-4">{classes?.className}</td>
                <td className="px-6  py-4">{classes?.instructor}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {classes?.price}
                </td>
                <td className="px-6  cursor-pointer py-4">
                  <Link to={`/dashboard/payment/${classes?._id}`} >
                    <button className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 ">
                      Pay
                    </button>
                  </Link>
                </td>
                <td
                  onClick={() => handleClassDelete(classes?._id)}
                  className="px-6   cursor-pointer py-4"
                >
                  <button className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
