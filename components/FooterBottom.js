import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <div className="border-t-2">
      <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-lg text-center sm:text-left">
          {year} @ Squeak_IT. All Rights Reserved. Design & Developed by{" "}
          <span className={`text-accent`}>Abu Shama</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link href={`/`} className="text-gray-500">
            <FaFacebookF />
          </Link>
          <Link href={`/`} className="ml-3 text-gray-500">
            <FaTwitter />
          </Link>
          <Link href={`/`} className="ml-3 text-gray-500">
            <FaInstagram />
          </Link>
          <Link href={`/`} className="ml-3 text-gray-500">
            <FaLinkedinIn />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FooterBottom;
