import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Span from "../components/Span";
import about from "../public/images/about.png";
import {
  AiOutlineInfoCircle,
  AiOutlineBarChart,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import cta from "../public/images/cta.jpg";
import Link from "next/link";
import Badge from "../components/Badge";

const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Badge />
            <h1
              className={`title-font sm:text-4xl text-3xl mt-4 font-medium text-transparent bg-clip-text bg-gradient-to-bl from-primary to-error ${process.env.NEXT_PUBLIC_gt}`}
            >
              Good Services And Better
              <br className="hidden lg:inline-block" />
              Health By Our Specialists
            </h1>
            <Span />
            <p className="mb-8 leading-relaxed">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
              <br />
              <br />
              The most well-known dummy text is the 'Lorem Ipsum', which is said
              to have originated in the 16th century. Lorem Ipsum is composed in
              a pseudo-Latin language which more or less corresponds to 'proper'
              Latin. It contains a series of real Latin words.
            </p>
            <Button text="Read More" />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              src={about}
              alt="about"
            />
          </div>
        </div>
      </section>
      <div className="hero min-h-screen banner">
        <div className="hero-overlay bg-opacity-10 "></div>
        <section className="text-gray-600  body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b mb-10 sm:flex-row flex-col bg-base-100 bg-opacity-70 p-4 rounded-md">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-base-100 text-accent flex-shrink-0">
                <AiOutlineBarChart className="text-6xl" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-accent text-xl title-font font-bold mb-2">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-base">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-accent inline-flex items-center"
                >
                  Learn More
                  <BsArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto border-b mb-10 sm:flex-row flex-col bg-base-100 bg-opacity-70 p-4 rounded-md">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-accent text-xl title-font font-bold mb-2">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-base">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-accent inline-flex items-center"
                >
                  Learn More
                  <BsArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-base-100 text-accent flex-shrink-0">
                <AiOutlineFundProjectionScreen className="text-6xl" />
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col bg-base-100 bg-opacity-70 p-4 rounded-md">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-base-100 text-accent flex-shrink-0">
                <AiOutlineInfoCircle className="text-6xl" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-accent text-xl title-font font-bold mb-2">
                  Who We Are ?
                </h2>
                <p className="leading-relaxed text-base">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-accent inline-flex items-center"
                >
                  Learn More
                  <BsArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
