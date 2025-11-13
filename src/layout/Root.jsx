import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <>
    <div className="">
        <header className="flex-1"><Navbar></Navbar></header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
      <Toaster />
    </div>
      
    </>
  );
};

export default Root;
