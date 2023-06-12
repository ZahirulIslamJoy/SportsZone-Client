import React, { useContext } from "react";
import useIsStudent from "../hooks/useIsStudent";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const StudentRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, studentLoading] = useIsStudent();

  if (loading || studentLoading) {
    return (
        <div className={`h-[70vh] flex flex-col justify-center items-center  ${studentLoading  ?"h-[55vh]":" "} `}>
        <RiseLoader size={15} color="#1e2a4a" />
      </div>
    );
  }

  if (user && isStudent) {
    return children;
  } else {
    return <Navigate to="/login" replace state={location.pathname}></Navigate>;
  }
};

export default StudentRoute;
