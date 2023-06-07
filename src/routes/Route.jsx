import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/login/Login";
import Register from "../navPages/register/Register";
import Home from "../layout/homepage/home/Home";
import Dashboard from "../layout/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
    ],
  },
]);

export default router;
