import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import FooterBottom from "../components/FooterBottom";
import Span from "../components/Span";
import logo from "../public/logo.png";

const Footer = () => {
  const router = useRouter();
  const path = router.route.split("/");
  if (path[1] !== "dashboard") {
    return (
      <footer className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href={`/`}
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <Image
                priority={true}
                src={logo}
                alt=""
                width={220}
                height={30}
                className={`pl-2`}
              />
            </Link>
            <div className="md:flex justify-start">
              <Span />
            </div>
            <p className="mt-2 text-lg text-gray-500">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    First Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    First Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Second Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Third Link
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Fourth Link
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    contact@imshama.com
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    +880 19 8726 8375
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    www.imshama.com
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-14 bg-gray-200">
          <FooterBottom />
        </div>
      </footer>
    );
  }
};

export default Footer;
