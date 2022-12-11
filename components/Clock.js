import React, { useState } from "react";
import moment from "moment";

const Clock = () => {
  const date = moment().format("dddd, Do MMM YYYY");
  let time = moment().format("h:mm:ss A");

  const [cTime, setCTime] = useState("");
  const updateTime = () => {
    time = moment().format("h:mm:ss A");
    setCTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div className={`text-sm flex flex-col text-secondary`}>
      <span> {cTime} </span>
      <span> {date} </span>
    </div>
  );
};

export default Clock;
