import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Faq = ({ faq, open, toggle }) => {
  const { _id, title, description } = faq;
  return (
    <>
      <div className="border rounded">
        <div
          className={`bg-gray-50 py-6 px-12 flex justify-between items-center cursor-pointer hover:text-accent ${
            open ? "text-accent" : ""
          }`}
          onClick={toggle}
        >
          <h2 className={`text-xl font-semibold`}>{title} </h2>
          <div className={`text-xl`}>
            {open ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
          </div>
        </div>

        <Collapse isOpened={open}>
          <p className="bg-white px-12 pb-5"> {description} </p>
        </Collapse>
      </div>
    </>
  );
};

export default Faq;
