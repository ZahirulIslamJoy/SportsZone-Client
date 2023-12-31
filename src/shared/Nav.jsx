import { Navbar } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { ThemeContext } from "../providers/ThemeProviders";
import { BsFillMoonFill } from 'react-icons/bs';
const Nav = () => {
  const { user, handeleSignOut } = useContext(AuthContext);
  const {theme,toggleTheme}=useContext(ThemeContext);

     
  const handleLogOut = () => {
    handeleSignOut();
    then(() => {}).catch((error) => {});
  };

  return (
    <div className={ `${theme?"bg-[#1D2A35] text-white":"bg-white text-black"}`
    }>
      <div >
        <Navbar  className={`w-[85%]  mx-auto  ${theme?" bg":"bg-white"} `} fluid>
          <Navbar.Brand>
            <span className={`self-center ${theme?"text-white":"text-black"}  whitespace-nowrap  lg:text-2xl text-sm font-semibold`}>
              Sports <span>
                <img className="h-10  w-10 inline-flex" src={logo} alt="" />
              </span> Zone
            </span>
          </Navbar.Brand>
          <div className="flex gap-4 md:order-2">
            {user && (
              <img
                className=" h-6 w-6 mt-4 lg:mt-0 lg:h-8 lg:w-8 lg:ml-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            )}
             {
              theme?<span>
                <BsFillMoonFill onClick={()=>toggleTheme(!theme)} className=" mt-4 lg:mt-1  lg:ml-4" size={25}  color="white"  ></BsFillMoonFill>
              </span>
              :
              <BsFillMoonFill onClick={()=>toggleTheme(!theme)} className=" mt-4 lg:mt-0  lg:ml-4" size={25}  color="black"  ></BsFillMoonFill>
             }
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link
              className="cursor-pointer hover:bg-blue-700  hover:px-2 hover:rounded-full"
              to="/"
            >
              <p>Home</p>
            </Link>
            <Link to="/instructors" className="cursor-pointer   hover:bg-blue-700  hover:rounded-full hover:px-2  ">
              Instructors
            </Link>
            <Link to='/approvedclass' className="cursor-pointer  hover:bg-blue-700  hover:rounded-full hover:px-2">
              Classes
            </Link>

            {user ? (
              <span className="flex flex-col lg:flex-row lg:gap-5 ">
                <Link
                  to="/dashboard"
                  className="hover:bg-blue-700  hover:rounded-full hover:px-2"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={handleLogOut}
                  className="hover:bg-blue-700  hover:rounded-full hover:px-2"
                >
                  LogOut
                </Link>
              </span>
            ) : (
              <Link
                to="/login"
                className="hover:bg-blue-700  hover:rounded-full hover:px-2"
              >
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;

// bg-[#191D3A]
