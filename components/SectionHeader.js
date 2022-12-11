import React from "react";
import Span from "./Span";

const SectionHeader = ({ title, desc }) => {
  return (
    <>
      <h1
        className={`sm:text-3xl text-2xl title-font mb-4 font-bold text-transparent ${process.env.NEXT_PUBLIC_gt}`}
      >
        {title}
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
        {desc}
      </p>
      <Span />
    </>
  );
};

export default SectionHeader;
