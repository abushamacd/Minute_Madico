import React from "react";
import { GiNinjaMask, GiPillDrop } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { FaHandHoldingMedical, FaAmbulance } from "react-icons/fa";
import Category from "../components/Category";
import Span from "../components/Span";

const Categories = () => {
  const categories = [
    {
      _id: 1,
      name: "Doctor",
      desc: "Due to its wide spread use as filler text",
      url: "/",
      icon: <GiNinjaMask />,
    },
    {
      _id: 2,
      name: "Clinics",
      desc: "Due to its wide spread use as filler text",
      url: "/",
      icon: <GiPillDrop />,
    },
    {
      _id: 3,
      name: "Labs",
      desc: "Due to its wide spread use as filler text",
      url: "/",
      icon: <ImLab />,
    },
    {
      _id: 4,
      name: "Emergency",
      desc: "Due to its wide spread use as filler text",
      url: "/",
      icon: <FaAmbulance />,
    },
    {
      _id: 5,
      name: "Phermacy",
      desc: "Due to its wide spread use as filler text",
      url: "/",
      icon: <FaHandHoldingMedical />,
    },
  ];
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1
            className={`sm:text-3xl text-2xl title-font mb-4 font-bold text-transparent ${process.env.NEXT_PUBLIC_gt}`}
          >
            Explore By Categories
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation.
          </p>
          <Span />
        </div>
        <div className="flex flex-wrap -m-4">
          {categories.map((category) => {
            return <Category key={category._id} category={category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
