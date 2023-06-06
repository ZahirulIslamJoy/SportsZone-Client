import { Navbar } from "flowbite-react";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="bg-[#081229]">
      <Navbar className="bg-[#191D3A] w-[80%] mx-auto " fluid>
        <Navbar.Brand>
          <span className="self-center text-white whitespace-nowrap  lg:text-2xl text-lg font-semibold">
            Play
            <span>
              <img className="h-10 w-10 inline-flex" src={logo} alt="" />
            </span>
            ZonePro
          </span>
        </Navbar.Brand>
        <div className="flex text-white md:order-2">
          <p>okk</p>
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
            <Link to="/login" className="cursor-pointer  hover:bg-blue-500  text-white">
              Login
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
