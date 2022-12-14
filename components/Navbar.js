import React from "react";
import Link from "next/link";
import { BsChatDots } from "react-icons/bs";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
  if (process.browser) {
    let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (mybutton) {
          mybutton.style.display = "block";
        }
      } else {
        if (mybutton) {
          mybutton.style.display = "none";
        }
      }
    }
    if (mybutton) {
      mybutton.addEventListener("click", backToTop);
    }

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/",
      name: "Doctors",
      subRoutes: [
        {
          path: "/dashboard/dashboard",
          name: "Dashboard",
        },
        {
          path: "/doctors/doctorlist",
          name: "Doctors List",
        },
      ],
    },
    {
      path: "/",
      name: "Patients",
      subRoutes: [
        {
          path: "/",
          name: "Dashboard",
        },
        {
          path: "/patients/appoinment",
          name: "Appoinment",
        },
      ],
    },
    {
      path: "/",
      name: "Pharmacy",
      subRoutes: [
        {
          path: "/",
          name: "Shop",
        },
        {
          path: "/",
          name: "Medicine Detail",
        },
      ],
    },
    {
      path: "/",
      name: "Pages",
      subRoutes: [
        {
          path: "/",
          name: "Faqs",
        },
        {
          path: "/",
          name: "About Us",
        },
        {
          path: "/",
          name: "Contact Us",
        },
        {
          path: "/",
          name: "Trems & Policy",
        },
        {
          path: "/",
          name: "Privacy Policy",
        },
      ],
    },
    {
      path: "/",
      name: "Admin",
    },
  ];
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <li key={index} tabIndex={0}>
                    <Link href={"/"} className="justify-between">
                      {route.name}
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </Link>
                    <ul className="p-2 bg-white border">
                      {route.subRoutes.map((subRoute, index) => {
                        return (
                          <li key={index} className="my_shadow">
                            <Link href={subRoute.path}>{subRoute.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link href={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href={"/"}>
          <Image
            priority={true}
            src={logo}
            alt=""
            width={220}
            height={30}
            className={`pl-2`}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <li key={index} tabIndex={0}>
                  <Link href={"/"}>
                    {route.name}
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-white border">
                    {route.subRoutes.map((subRoute, index) => {
                      return (
                        <li key={index} className="my_shadow">
                          <Link href={subRoute.path}>{subRoute.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            return (
              <li key={index}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsChatDots className="text-lg" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href={"/"}>Settings</Link>
              </li>
              <li>
                <Link href={"/"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-8 right-2"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
