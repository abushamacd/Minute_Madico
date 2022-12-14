import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";
import { BiRightArrow } from "react-icons/bi";

const Breadcrumbs = ({ path }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 uppercase">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-accent"
          >
            <HiHome className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <BiRightArrow />
            <Link
              href="/"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-accent md:ml-2"
            >
              {path[1]}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <BiRightArrow />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 ">
              {path[2]}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
