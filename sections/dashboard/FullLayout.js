import React from "react";
import HeaderStats from "../../components/dashboard/HeaderStats";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FullLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        <Header />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FullLayout;
