import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";
import useIsStudent from "../../hooks/useIsStudent";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Marquee from "react-fast-marquee";
import { BiBookContent } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { GiConfirmed} from "react-icons/gi";
import { FaCommentDollar } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { GoListOrdered } from "react-icons/go";


const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin] = useIsAdmin();
  const [isInstructor] = useIsInstructor();
  const [isStudent] = useIsStudent();
  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex  min-h-screen flex-col md:flex-row h-full">
        {/* Sidebar */}
        <aside
          className={` text-gray-400 w-36 lg:w-52 flex-shrink-0 overflow-x-hidden  ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex  items-center justify-center h-10">
          </div>
          <nav className="mt-8 border ml-8  bg-white">
            <a className="flex items-center text-black mt-4 py-2 px-6">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <Link to="/dashboard">
              <span className=" lg:mx-4">Dashboard</span>
              </Link>
            </a>
            {isStudent && (
              <span>
                <Link to='selectedclass'>
                <hr className="border" />
                  <span className="flex items-center mt-4 py-2 px-2 lg:px-6 text-black ">
                    <BiSelectMultiple size={30} ></BiSelectMultiple>
                    <span className="mx-4">Selected Classes</span>
                  </span>
                  <hr className="border" />
                </Link>
                <Link to='enrollclass'>
                  <span className="flex items-center mt-4 py-2 px-2 lg:px-6  text-black ">
                    <GiConfirmed size={30} ></GiConfirmed>
                    <span className="mx-4">Enrolled Classes</span>
                  </span>
                  <hr className="border" />
                </Link>
                <Link to='paymenthistory'>
                  <span className=" flex  items-center mt-4 py-2 px-2 lg:px-6 text-black">
                    <FaCommentDollar size={30} ></FaCommentDollar>
                    <span className="mx-4">Payment History</span>
                  </span>
                </Link>
                <hr className="border" />
              </span>
            )}
            {isInstructor && (
              <span>
                <Link to='addclass'>
                <hr className="border" />
                  <span className="flex text-black items-center mt-4 py-2 px-2 lg:px-6 ">
                    <AiFillFileAdd size={30} ></AiFillFileAdd>
                    <span className="mx-4">Add Class</span>
                  </span>
                </Link>
                <hr className="border" />
                <Link to='myclass'>
                  <span className="flex text-black  items-center mt-4 py-2 px-2 lg:px-6 ">
                    <GoListOrdered></GoListOrdered>
                    <span className="mx-4">My Class</span>
                  </span>
                </Link>
                <hr className="border" />
              </span>
            )}
             {isAdmin && (
              <span>
                <Link to='manageclasses'>
                <hr className="border" />
                  <span className="flex items-center mt-4 py-2 px-2 lg:px-6 text-black">
                    <BiBookContent></BiBookContent>
                    <span className="mx-4">Manage Class</span>
                  </span>
                </Link>
                <hr className="border" />
                <Link to='manageusers'>
                  <span className="flex items-center mt-4 py-2 px-2 lg:px-6 text-black">
                    <FaUserAlt></FaUserAlt>
                    <span className="mx-4">Manage Users</span>
                  </span>
                </Link>
                <hr className="border" />
              </span>
            )}
          </nav>
        </aside>
        {/* Mobile Menu */}
        <div className="md:hidden">
          {!isMenuOpen ? (
            <button
              className="bg-gray-800 text-gray-400  text-left"
              onClick={toggleMenu}
            >
              Dashboard
            </button>
          ) : (
            <button
              className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-white"
              onClick={toggleMenu}
            >
              Close
            </button>
          )}
        </div>
        {/* Content */}
        <div className="flex flex-col ml-12 overflow-x-auto flex-1">
        <Marquee>
              <span className="text-black text-sm font-semibold">
                {user?.displayName}
              </span>
            </Marquee>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
