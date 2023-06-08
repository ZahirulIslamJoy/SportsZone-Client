import React from "react";
import { Link, Outlet } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";
import useIsStudent from "../../hooks/useIsStudent";

const Dashboard = () => {


  const [isAdmin]=useIsAdmin();
  const [isInstructor]=useIsInstructor();
  const[isStudent]=useIsStudent();


  return (
    <div>
      <h1>Hello EveryOne</h1>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed    lg:top-[60px] left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#1e2a4a] ">
            <div className="space-y-2 font-medium">
              <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                <span className="ml-3">Dashboard</span>
              </Link>
              {isAdmin && (
                <div>
                  <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">Manage Classes</span>
                  </Link>
                  <Link  to="manageusers" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">Manage Users</span>
                  </Link>
                </div>
              )}
              { isStudent &&(
                <div>
                  <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">Selected Classes</span>
                  </Link>
                  <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">Enrolled Classes</span>
                  </Link>
                </div>
              )}
              {isInstructor && (
                <div>
                  <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">Add Class</span>
                  </Link>
                  <Link className="flex items-center p-2 rounded-lg text-white hover:bg-gray-500">
                    <span className="ml-3">My Classes</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </aside>
        <div>
          <div className="p-4 sm:ml-64">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
