import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProviders";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/popularclass`).then((res) => {
      setPopularClass(res.data);
    });
  }, []);
  //

  return (
    <div
      className={`${theme ? "bg-[#282A35] text-gray-200" : "bg-white text-black"}`}
    >
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">
          Our Popular Classes
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularClass?.map((singleClass) => (
            <div
              key={singleClass?._id}
              className={`${theme ? "bg-[#F3ECEA] text-black" : "bg-gray-100 text-black"}  max-w-sm mb-8  rounded-lg shadow `}
            >
              <img
                className="rounded-t-lg  h-[250px] w-full "
                src={singleClass.image}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight ">
                  Name: {singleClass.className}
                </h5>
                <p className="mb-3 font-normal">Price: {singleClass.price}</p>
                <p className="mb-3 font-normal">
                  Seats Avaliable: {singleClass.seats}
                </p>
                <p className="mb-3 font-normal">
                  Toatal Enrolled: {singleClass.enrolled}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
