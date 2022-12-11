import React from "react";
import { GiNinjaMask, GiPillDrop } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { FaHandHoldingMedical, FaAmbulance } from "react-icons/fa";
import Category from "../components/Category";

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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl title-font text-primary mb-4 font-bold">
            Explore By Categories
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
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
