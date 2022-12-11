import React from "react";

const Badge = ({ text }) => {
  return (
    <div className={`badge ${process.env.NEXT_PUBLIC_gb} text-white`}>
      {text}
    </div>
  );
};

export default Badge;
