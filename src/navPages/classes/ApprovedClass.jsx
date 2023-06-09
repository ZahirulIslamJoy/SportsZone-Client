import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";
import useAxiosWithToken from "../../hooks/useAxiosWithToken";

const ApprovedClass = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useIsAdmin();
  const [isInstructors] = useIsInstructor();
  const [axiosSecure] = useAxiosWithToken();

  const { data: approvedClasses, refetch } = useQuery({
    queryKey: ["/verifiedclass"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/verifiedclass`);
      const data = res.data;
      return data;
    },
  });

  console.log(approvedClasses);

  const handleCourseSubmit = (id) => {
    if (user == null) {
      return Swal.fire("Please Login To Select The Course");
    }

    const selectedClass = approvedClasses.find(
      (singleClass) => singleClass._id == id
    );

    const email = user?.email;
    const className = selectedClass.className;
    const instructor = selectedClass.instructorName;
    const price = selectedClass.price;
    const selectedClassInfo = {
      email,
      className,
      instructor,
      price,
    };

    axiosSecure.post(`/selectedClass`, selectedClassInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "This Class Is Seleced,Pay For The Enrollment",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto ">
      <div>
        <h1 className="text-3xl  text-center mt-12 mb-12">
          Pick Up Best Class Now!!!
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {approvedClasses?.map((singleClass) => (
          <div key={singleClass._id}>
            <div
              className={`max-w-sm  border border-gray-200 rounded-lg shadow ${
                singleClass.seats == 0 ? "bg-red-600" : "bg-white"
              } `}
            >
              <img
                className="rounded-t-lg h-[250px] w-full "
                src={singleClass.image}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singleClass.className}
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Instructor: {singleClass.instructorName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Seats: {singleClass.seats}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700">
                  Price: {singleClass.price}
                </p>
                <button
                  disabled={isAdmin || isInstructors || singleClass.seats == 0}
                  onClick={() => handleCourseSubmit(singleClass._id)}
                  className="bg-[#1e2a4b] px-2 py-1 rounded-lg text-white  disabled:bg-slate-300 "
                >
                  Select Course
                </button>
              </div>
            </div>
            ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedClass;
