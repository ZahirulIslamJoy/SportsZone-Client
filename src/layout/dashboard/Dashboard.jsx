import React from "react";
import { Link, Outlet } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";
import useIsStudent from "../../hooks/useIsStudent";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Marquee from "react-fast-marquee";

const Dashboard = () => {
  const [isAdmin] = useIsAdmin();
  const [isInstructor] = useIsInstructor();
  const [isStudent] = useIsStudent();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="h-full lg:hidden px-6  overflow-y-auto bg-[#1e2a4a] ">
        <h1 className="text-2xl mt-4 mb-4 underline text-gray-200">
          Dashboard Menus
        </h1>
        <div className=" font-medium">
          {isAdmin && (
            <div>
              <Link
                to="manageclasses"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Manage Classes</span>
              </Link>
              <Link
                to="manageusers"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Manage Users</span>
              </Link>
            </div>
          )}
          {isStudent && (
            <div>
              <Link
                to="selectedclass"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Selected Classes</span>
              </Link>
              <Link
                to="enrollclass"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Enrolled Classes</span>
              </Link>
              <Link
                to="paymenthistory"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Payment History</span>
              </Link>
            </div>
          )}
          {isInstructor && (
            <div>
              <Link
                to="addclass"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">Add Class</span>
              </Link>
              <Link
                to="myclass"
                className="flex items-center p-2 rounded-lg text-white "
              >
                <span className="ml-3">My Classes</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <aside
          id="default-sidebar"
          className=" lg:top-[67px] left-0 z-40 overflow-y-auto transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto  bg-[#64BCAC] ">
            <div className="space-y-2 font-medium">
              {isAdmin && (
                <div>
                  <Link
                    to="manageclasses"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Manage Classes</span>
                  </Link>
                  <Link
                    to="manageusers"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Manage Users</span>
                  </Link>
                </div>
              )}
              {isStudent && (
                <div>
                  <Link
                    to="selectedclass"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Selected Classes</span>
                  </Link>
                  <Link
                    to="enrollclass"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Enrolled Classes</span>
                  </Link>
                  <Link
                    to="paymenthistory"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Payment History</span>
                  </Link>
                </div>
              )}
              {isInstructor && (
                <div>
                  <Link
                    to="addclass"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">Add Class</span>
                  </Link>
                  <Link
                    to="myclass"
                    className="flex items-center p-2 rounded-lg text-white "
                  >
                    <span className="ml-3">My Classes</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </aside>
        <div>
          <div className="bg-gray-100">
            <div className="p-4 w-[85%]  mx-auto">
              <Marquee speed={120}>
                <h1 className=" text-2xl lg:text-4xl uppercase mt-12 mb-16 text-center ">
                  WELCOME! <span> {user?.displayName}</span>
                </h1>
              </Marquee>

              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
