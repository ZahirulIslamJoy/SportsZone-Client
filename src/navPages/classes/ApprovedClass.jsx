import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";
import useAxiosWithToken from "../../hooks/useAxiosWithToken";
import { Fade } from "react-awesome-reveal";
import useAddedClass from "../../hooks/useAddedClass";
import useIsStudent from "../../hooks/useIsStudent";
import useEnrolledClass from "../../hooks/useEnrolledClass";

const ApprovedClass = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useIsAdmin();
  const [isStudent]=useIsStudent();
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
  
  const [SelectedClass,classRefetch]=useAddedClass();
  console.log(SelectedClass)
  const [enrolledClass]=useEnrolledClass();
  console.log(enrolledClass)

  const handleCourseSubmit = (id) => {
    if (user == null) {
      return Swal.fire("Please Login To Select The Course");
    }

    const selectedClass = approvedClasses.find(
      (singleClass) => singleClass._id == id
    );

    const email = user?.email;
    const classImage = selectedClass?.image;
    const className = selectedClass.className;
    const instructor = selectedClass.instructorName;
    const price = selectedClass.price;
    const classId = id;
    const selectedClassInfo = {
      email,
      classId,
      className,
      instructor,
      price,
      classImage,
    };

    axiosSecure.post(`/selectedClass`, selectedClassInfo).then((res) => {
      if (res.data.insertedId) {
        classRefetch();
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
    <div className="bg-[#282a35]">
      <div className="w-[85%] mx-auto ">
        <div>
          <h1 className="text-3xl  text-white text-center pt-12 mb-20">
            Pick Up Best Class Now!!!
          </h1>
        </div>
        <div className="grid grid-cols-1  gap-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
          {approvedClasses?.map((singleClass) => (
            <div key={singleClass._id}>
              <div
                className={`max-w-sm  rounded-lg shadow ${
                  singleClass.seats == 0 ? "bg-red-600" : "bg-gray-200"
                } `}
              >
                <img
                  className="rounded-t-lg h-[250px] w-full "
                  src={singleClass.image}
                  alt=""
                />
                <div className="p-5">
                  <Fade cascade damping={0.3}>
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>{singleClass.className}</p>
                    </h5>
                    <p className="mb-3 text-xl font-semibold ">
                      Instructor: {singleClass.instructorName}
                    </p>
                    <p className="mb-3 text-xl font-semibold ">
                      Seats: {singleClass.seats}
                    </p>
                    <p className="mb-3 text-xl font-semibold">
                      Price: {singleClass.price}
                    </p>
                    <button
                      disabled={
                        SelectedClass?.some(obj => obj.classId === singleClass._id) || enrolledClass?.some(obj => obj.classId == singleClass._id) ||
                        isAdmin || isInstructors || singleClass.seats == 0
                      }
                      onClick={() => handleCourseSubmit(singleClass._id)}
                      className="bg-[#426cde]  rounded-lg text-black disabled:cursor-not-allowed disabled:bg-slate-300 "
                    >
                      {
                        SelectedClass?.some(obj => obj.classId === singleClass._id) || enrolledClass?.some(obj => obj.classId == singleClass._id) ?"Already Applied":"Select Course"
                      }
                    </button>
                  </Fade>
                </div>
              </div>
              ;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedClass;
