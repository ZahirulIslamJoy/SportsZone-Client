import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
const Nav = () => {
  const { user,handeleSignOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    handeleSignOut()
    then(() => {
      }).catch((error) => {
      });
  }

  return (
    <div className="bg-[#081229]">
      <Navbar className="bg-[#191D3A] w-[80%] mx-auto " fluid>
        <Navbar.Brand>
          <span className="self-center text-white whitespace-nowrap  lg:text-2xl text-lg font-semibold">
            Play
            Zone
            <span>
              <img className="h-10 w-10 inline-flex" src={logo} alt="" />
            </span>
            Pro
          </span>
        </Navbar.Brand>
        <div className="flex gap-4 md:order-2">
          {
            user && <img className="h-8 w-8 ml-12 rounded-full" src={user?.photoURL} alt="" />
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link className="cursor-pointer  hover:bg-blue-600 text-white" to="/">
            <p>Home</p>
          </Link>
          <Link className="cursor-pointer  hover:bg-blue-600  text-white">
            Instructors
          </Link>
          <Link className="cursor-pointer  hover:bg-blue-500  text-white">
            Classes
          </Link>

          {user ? (
            <span className="flex flex-col lg:flex-row lg:gap-5 ">
              <Link className="cursor-pointer  hover:bg-blue-500  text-white">
                Dashboard
              </Link>
              <Link
              onClick={handleLogOut}
                to="/login"
                className="cursor-pointer  hover:bg-blue-500  text-white"
              >
                LogOut
              </Link>
            </span>
          ) : (
            <Link
              to="/login"
              className="cursor-pointer  hover:bg-blue-500  text-white"
            >
              Login
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
