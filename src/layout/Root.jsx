import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <>
      <header><Navbar></Navbar></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster />
    </>
  );
};

export default Root;
