import React from "react";
import error404 from "../assets/error.jpg";

import { NavLink } from "react-router";
import Navbar from "../component/Navbar";

const Error = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div className="flex justify-center items-center mt-[20px]">
          <img src={error404} className="max-h-[500px]" alt="" />
        </div>
        <h3 className="text-[62px] font-bold text-center">
          Oops, page not found!
        </h3>
        <p className="text-center text-[#627382]">
          The page you are looking for is not available.
        </p>
        <div className="flex justify-center mt-3.5">
          <NavLink
            to={"/"}
            className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
