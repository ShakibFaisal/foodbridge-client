import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink className="m-3 cursor-pointer text-[16px] " to={"/"}>
        Home
      </NavLink>
      <NavLink className="m-3 cursor-pointer text-[16px]" to={"/available"}>
        Available Foods
      </NavLink>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm p-3 md:px-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
            
          </ul>
        </div>
        <Link className="text-xl" to={'/'}>F<span className="text-orange-400 ">oo</span>dBridge</Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}><a className="btn btn-primary text-white">Login</a></Link>
       
      </div>
    </div>
  );
};

export default Navbar;
