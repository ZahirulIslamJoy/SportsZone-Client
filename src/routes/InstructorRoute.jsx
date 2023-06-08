import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useIsInstructor from "../hooks/useIsInstructor";
import { Navigate } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructors, instructorLoading] = useIsInstructor();

  if (loading || instructorLoading) {
    return (
        <div className={`h-[70vh] flex flex-col justify-center items-center  ${instructorLoading  ?"h-[55vh]":" "} `}>
        <RiseLoader size={15} color="#1e2a4a" />
      </div>
    );
  }

  if (user && isInstructors) {
    return children;
  } else {
    return <Navigate to="/" replace state={location.pathname}></Navigate>;
  }
};

export default InstructorRoute;
