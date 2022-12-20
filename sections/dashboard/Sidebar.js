import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "../../components/dashboard/UserDropdown";
import { FaBars, FaHome, FaWindowClose } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import logo from "../../public/logo.png";
import Image from "next/image";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const routes = [
    {
      path: "/dashboard/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      icon: <ImProfile />,
    },
    {
      path: "/dashboard/adddoctor",
      name: "Add Doctor",
      icon: <ImProfile />,
    },
  ];
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link
            href="/"
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold px-0"
          >
            <Image src={logo} alt="logo" width={180} />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/"
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    <Image src={logo} alt="logo" width={180} />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaWindowClose />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Profile */}
            <div className=" hidden md:block">
              <hr className="mb-4 md:min-w-full" />
              <div className="user_section text-center border p-2 rounded-md">
                <img
                  className={`user_logo block mx-auto rounded-full`}
                  alt="User photo"
                  width={100}
                  height={100}
                  src="https://i.ibb.co/MgsTCcv/avater.jpg"
                />
                <h1 className="user_name text-lg whitespace-nowrap">
                  Abu Shama
                </h1>
                <p className="role text-sm whitespace-nowrap">Super Admin</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {routes.map((route, index) => {
                return (
                  <li key={index} className="items-center">
                    <Link
                      href={route.path}
                      className="text-sm uppercase py-2 font-semibold flex items-center hover:text-accent hover:bg-slate-50"
                    >
                      <span className="mr-2">{route.icon}</span> {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
