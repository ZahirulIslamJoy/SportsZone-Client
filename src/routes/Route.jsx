import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/login/Login";
import Register from "../navPages/register/Register";
import Home from "../layout/homepage/home/Home";
import Dashboard from "../layout/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../layout/dashboard/adminPages/ManageUsers";
import AddClass from "../layout/dashboard/instructorPages/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClass from "../layout/dashboard/instructorPages/MyClass";
import ManageClasses from "../layout/dashboard/adminPages/ManageClasses";
import MyClassInfoUpdate from "../layout/dashboard/instructorPages/MyClassInfoUpdate";
import ApprovedClass from "../navPages/classes/ApprovedClass";
import Instructors from "../navPages/instructors/Instructors";
import StudentRoute from "./StudentRoute";
import SelectedClass from "../layout/dashboard/studentPages/selectedClass/SelectedClass";
import Payment from "../layout/dashboard/studentPages/payment/Payment";
import EnrolledClass from "../layout/dashboard/studentPages/enrolledClass/EnrolledClass";
import PaymentHistory from "../layout/dashboard/studentPages/paymenthistory/PaymentHistory";

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
        path: "/approvedclass",
        element:<ApprovedClass></ApprovedClass>
      },
      {
        path: "/instructors",
        element:<Instructors></Instructors>
      },
      {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        //admin
        children:[
          {
            path: "manageusers",
            element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
          },
          {
            path: "manageclasses",
            element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
          },
          //instructors
          {
            path: "addclass",
            element:<InstructorRoute><AddClass></AddClass></InstructorRoute>,
          },
          {
            path: "myclass",
            element:<InstructorRoute><MyClass></MyClass></InstructorRoute>,
          },
          {
            path:"update/:id",
            element:<InstructorRoute><MyClassInfoUpdate></MyClassInfoUpdate></InstructorRoute>,  
          },
          //student
          {
            path: "selectedclass",
            element:<StudentRoute><SelectedClass></SelectedClass></StudentRoute>
          },
          {
            path: "payment/:id",
            element:<StudentRoute><Payment></Payment></StudentRoute>
          },
          {
            path: "enrollclass",
            element:<StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
          },
          {
            path: "paymenthistory",
            element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
          },

        ]
      },
    ],
  },
]);

export default router;
