import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useIsAdmin from "../hooks/useIsAdmin";
import { Navigate } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useIsAdmin();

  if (loading || adminLoading) {
    return (
      <div className={`h-[70vh] flex flex-col justify-center items-center  ${adminLoading  ?"h-[55vh]":" "} `}>
        <RiseLoader size={15} color="#1e2a4a" />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/login" replace state={location.pathname}></Navigate>;
  }
};

export default AdminRoute;
