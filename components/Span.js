import React from "react";

const Span = () => {
  return (
    <div className="flex my-4 justify-center">
      <div
        className={`w-16 h-1 rounded-full inline-flex ${process.env.NEXT_PUBLIC_gb}`}
      ></div>
    </div>
  );
};

export default Span;
