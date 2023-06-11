import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosWithToken from "../../../hooks/useAxiosWithToken";
import { AuthContext } from "../../../providers/AuthProviders";

const ManageUsers = () => {

  const [axiosSecure]=useAxiosWithToken();
  const {user,loading}=useContext(AuthContext);
  const email=user?.email;

  const { data: userData, refetch } = useQuery({
    queryKey: ["/users"],
    enabled:!loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${email}`);
      const data = res.data;
      return data;
    },
  });

  const handleMakeAdmin = async (id) => {
    const role = "admin";
    const sendingRole = {
      role,
    };
    const res = await axios.patch(
      `${import.meta.env.VITE_URL}/users/${id}`,
      sendingRole
    );
    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `This User Is Admin Now`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMakeInstructors = async (id) => {
    const role = "instructor";
    const sendingRole = {
      role,
    };
    const res = await axios.patch(
      `${import.meta.env.VITE_URL}/users/${id}`,
      sendingRole
    );
    const data = res.data;
    if (data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `This User Is Instructor Now`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };



  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mt-12 mb-20">Manage All Users</h1>
      </div>
      <div>
        <div className="relative mb-20 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 ml-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Current Role
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
              {userData?.map((user, index) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 h-10 w-10 py-4">{user?.name}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user?.email}
                  </td>
                  <td className="px-6  py-4">{user?.role}</td>
                  <td className="px-6  cursor-pointer py-4">
                    <button
                     disabled={user?.role == "instructor"}
                      onClick={() => handleMakeInstructors(user?._id)}
                      className="bg-[#1e2a4b] disabled:cursor-not-allowed rounded-lg text-white  disabled:bg-slate-300 "
                    >
                      Make Instructors
                    </button>
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    <button
                    disabled={user?.role == "admin"}
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="bg-[#1e2a4b] disabled:cursor-not-allowed rounded-lg text-white  disabled:bg-slate-300 "
                    >
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
