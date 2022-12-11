import React from "react";

const Appoinment = ({ appoinment }) => {
  const { title, desc, icon } = appoinment;
  return (
    <div className="flex items-center mx-auto border border-accent mb-10 sm:flex-row flex-col bg-base-100 bg-opacity-70 p-4 rounded-md">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border text-accent flex-shrink-0">
        {/* <AiOutlineBarChart  /> */}
        <div className="text-6xl">{icon}</div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-accent text-2xl title-font font-bold mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Appoinment;
