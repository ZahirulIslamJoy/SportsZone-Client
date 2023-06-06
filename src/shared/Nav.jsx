import { Button, Navbar } from "flowbite-react";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="bg-black">
      <Navbar className=" bg-black w-[90%] mx-auto " fluid>
        <Navbar.Brand>
          <span className="self-center text-white whitespace-nowrap  lg:text-3xl text-xl font-semibold">
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
          <Link to="/">
            <Navbar.Link className="cursor-pointer hover:bg-blue-600 text-white">
              <p>Home</p>
            </Navbar.Link>
          </Link>
          <Navbar.Link className="cursor-pointer  hover:bg-blue-600  text-white">
            Instructors
          </Navbar.Link>
          <Navbar.Link className="cursor-pointer  hover:bg-blue-500  text-white">
            Classes
          </Navbar.Link>
          <Navbar.Link className="cursor-pointer  hover:bg-blue-500  text-white">Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
