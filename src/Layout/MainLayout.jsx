import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
