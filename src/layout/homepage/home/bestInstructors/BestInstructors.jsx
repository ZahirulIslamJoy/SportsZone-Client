import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ThemeContext } from "../../../../providers/ThemeProviders";

const BestInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/instructors`).then((res) => {
      setPopularInstructors(res.data.slice(0, 6));
    });
  }, []);

  console.log(popularInstructors);

  return (
    <div
      className={`${
        theme ? "bg-[#282A35] text-gray-200" : "bg-white text-black"
      } pb-32`}
    >
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  pt-16 mb-20 text-center">
          Our Popular Instructors
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {popularInstructors.map((singleInstructor) => (
            <div
              key={singleInstructor?._id}
              className="relative transition duration-200 transform hover:-translate-y-4 mt-6 lg:mt-8"
            >
              <img
                className="object-fill h-[350px] w-full"
                src={singleInstructor.photo}
                alt=""
              />
              <div className="absolute flex justify-center flex-col p-4 text-white  hover:opacity-100 opacity-0 bg-black bg-opacity-75 inset-0">
                <p className="mb-2">Name:{singleInstructor?.name}</p>
                <p className="mb-2">Email:{singleInstructor?.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestInstructors;
