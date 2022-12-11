import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      class={`text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded text-base px-5 py-2.5 text-center`}
    >
      {text}
    </button>
  );
};

export default Button;
