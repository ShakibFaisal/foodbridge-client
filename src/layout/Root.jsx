import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <header><Navbar></Navbar></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
      <Toaster />
    </>
  );
};

export default Root;
