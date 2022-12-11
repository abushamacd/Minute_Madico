import Link from "next/link";
import React from "react";
import { FiInstagram, FiMail, FiLinkedin, FiFacebook } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import Image from "next/image";

const Doctor = ({ doctor }) => {
  const { name, designation, location, schedule, fee, img } = doctor;
  return (
    <>
      <div className="p-4 lg:w-1/4 md:w-1/2 ">
        <div className="h-full flex flex-col items-center text-center border rounded-lg overflow-hidden relative z-10">
          <Image
            priority={true}
            className="flex-shrink-0 rounded-lg w-full h-68 object-cover object-center mb-4 transition-all duration-500 hover:scale-105 "
            src={img}
            alt="doctor image"
          />
          <div className="w-full text-start p-4 pt-0">
            <h2 className={`title-font font-bold text-xl text-accent`}>
              {name}
            </h2>
            <h4 className="text-neutral mb-3 text-sm">{designation}</h4>
            <div className="doctor_info">
              <p className="mb-2 flex items-center">
                {" "}
                <BiLocationPlus className="mr-2 text-accent" /> {location}
              </p>
              <p className="mb-2 flex items-center">
                {" "}
                <AiOutlineClockCircle className="mr-2 text-accent" /> {schedule}
              </p>
              <p className="mb-2 flex items-center">
                {" "}
                <AiOutlineDollarCircle className="mr-2 text-accent" /> $ {fee}{" "}
                USD / Visit
              </p>
            </div>
            <span className="inline-flex my-2">
              <Link
                target={"_blank"}
                href={"/"}
                className={`border rounded-full border-accent text-accent w-10 h-10 flex justify-center items-center text-xl mr-2 hover:bg-gradient-to-bl from-primary to-error hover:text-white transition duration-400 ease-in-out`}
              >
                <FiFacebook />
              </Link>
              <Link
                target={"_blank"}
                href={"/"}
                className={`border rounded-full border-accent text-accent w-10 h-10 flex justify-center items-center text-xl mr-2 hover:bg-gradient-to-bl from-primary to-error hover:text-white transition duration-400 ease-in-out`}
              >
                <FiInstagram />
              </Link>
              <Link
                target={"_blank"}
                href={"/"}
                className={`border rounded-full border-accent text-accent w-10 h-10 flex justify-center items-center text-xl mr-2 hover:bg-gradient-to-bl from-primary to-error hover:text-white transition duration-400 ease-in-out`}
              >
                <FiMail />
              </Link>
              <Link
                target={"_blank"}
                href={"/"}
                className={`border rounded-full border-accent text-accent w-10 h-10 flex justify-center items-center text-xl mr-2 hover:bg-gradient-to-bl from-primary to-error hover:text-white transition duration-400 ease-in-out`}
              >
                <FiLinkedin />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
