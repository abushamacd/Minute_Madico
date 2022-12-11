import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Category = ({ category }) => {
  const { name, desc, icon, url } = category;
  return (
    <div className="xl:w-1/5 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div
          className={`w-20 h-20 inline-flex items-center justify-center rounded-full border-2 border-accent text-accent mb-4`}
        >
          <div className="text-5xl">{icon}</div>
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {name}
        </h2>
        <p className="leading-relaxed text-base">{desc}</p>
        <Link
          href={url}
          className="flex items-center text-sm font-bold mt-2 text-accent"
        >
          Find Here <BsArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Category;
