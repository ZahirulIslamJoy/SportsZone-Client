import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
});

const useAxiosWithToken = () => {
  const { handeleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("access-token");
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await handeleSignOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [handeleSignOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosWithToken;
