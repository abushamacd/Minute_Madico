import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Span from "../components/Span";
import about from "../public/images/about.png";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className={`badge ${process.env.NEXT_PUBLIC_gb} text-white`}>
            Know About Minute Madico
          </div>
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
            immediate assistance, emergency treatment or a simple consultation.
            <br />
            <br />
            The most well-known dummy text is the 'Lorem Ipsum', which is said
            to have originated in the 16th century. Lorem Ipsum is composed in a
            pseudo-Latin language which more or less corresponds to 'proper'
            Latin. It contains a series of real Latin words.
          </p>
          <Button text="Read More" />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            
            alt="hero"
            src="../public/images/about.png"
          /> */}
          <Image
            className="object-cover object-center rounded"
            src={about}
            alt="about"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
