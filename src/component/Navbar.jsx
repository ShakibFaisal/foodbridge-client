import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { PiBowlFood } from "react-icons/pi";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {
  const { user ,signout} = use(AuthContext);
  const handleSignout=(e)=>{
    e.preventDefault();
     signout()

  }

  const navItems = (
    <>
      <NavLink className="m-3 font-bold  cursor-pointer text-[16px] " to={"/"}>
        Home
      </NavLink>
      <NavLink className="m-3 font-bold cursor-pointer text-[16px]" to={"/available"}>
        Available Foods
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm p-3 md:px-10">
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
        <Link className="text-xl font-extrabold flex items-center" to={"/"}>
          F
          <span className="text-orange-400 flex items-center ">
            <PiBowlFood />o
          </span>
          dBridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 flex items-center justify-between gap-5 ">
                <h3>Hi,<span className="text-primary ml-2.5">{user.displayName}</span></h3>
              <img src={user.photoURL} className="w-[40px] h-[40px] border-2 border-primary rounded-full object-cover  " alt="" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to={"/addfood"}>Add Food</Link>
                
              </li>
              <li>
              
                <Link to={"/managefood"}>Manage My Foods</Link>
               
              </li>
              <li>
                <a>My Food Requests</a>
              </li>
              <li>
                <a onClick={handleSignout}>SignOut</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <h3 className="btn btn-primary text-white">Login</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
