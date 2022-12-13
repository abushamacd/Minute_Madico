import React from "react";
import { FiInstagram, FiMail, FiLinkedin, FiFacebook } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

const DoctorModal = ({ doctorModal, setDoctorModal }) => {
  const {
    name,
    specialist,
    location,
    schedule,
    fee,
    img,
    degree,
    about,
    education,
  } = doctorModal;
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl rounded-md">
          <label
            onClick={() => setDoctorModal(null)}
            htmlFor="my-modal-5"
            className={`btn btn-sm btn-circle absolute right-2 top-2 border-0 ${process.env.NEXT_PUBLIC_gb}`}
          >
            ✕
          </label>
          <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="h-full flex flex-col items-center text-center md:border-r rounded-lg overflow-hidden relative z-10 pr-4">
                <Image
                  priority={true}
                  className="flex-shrink-0 rounded-lg w-full h-68 object-cover object-center mb-4 transition-all duration-500 hover:scale-105 "
                  src={img}
                  alt="doctor image"
                />
                <div>
                  <h2 className={`title-font font-bold text-xl text-accent`}>
                    {name}
                  </h2>
                  <h4 className="text-neutral mb-3 text-sm">{specialist}</h4>
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
            <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="w-full text-start pb-4">
                <div className="doctor_info">
                  <p className="mb-2 flex items-center">
                    {" "}
                    <BiLocationPlus className="mr-2 text-accent" /> {location}
                  </p>
                  <p className="mb-2 flex items-center">
                    {" "}
                    <AiOutlineClockCircle className="mr-2 text-accent" />{" "}
                    {schedule}
                  </p>
                  <p className="mb-2 flex items-center">
                    {" "}
                    <AiOutlineDollarCircle className="mr-2 text-accent" /> ${" "}
                    {fee} USD / Visit
                  </p>
                  <p className="mb-2 flex items-center">
                    {" "}
                    <TbFileCertificate className="mr-2 text-accent" /> {degree}
                  </p>
                  <p className="mb-2 flex items-center">
                    {" "}
                    <FaGraduationCap className="mr-2 text-accent" />
                    {education}
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-bold text-accent py-4">
                Know About Me
              </h2>
              <p>{about}</p>
            </div>
          </div>

          <div className="modal-action">
            <label
              onClick={() => setDoctorModal(null)}
              htmlFor="my-modal-5"
              className={`btn btn-sm border-0 ${process.env.NEXT_PUBLIC_gb}`}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
