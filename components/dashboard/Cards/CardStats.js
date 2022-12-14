import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CardStats({ cardData }) {
  const {
    statSubtitle,
    statTitle,
    statArrow,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIconName,
    statIconColor,
  } = cardData;
  return (
    <>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  {statSubtitle}
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  {statTitle}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div
                  className={
                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                    statIconColor
                  }
                >
                  {statIconName}
                </div>
              </div>
            </div>
            <p className="text-sm text-blueGray-400 mt-4 flex items-center justify-between">
              <span className={statPercentColor + " flex items-center"}>
                {statArrow === "up" ? (
                  <FaArrowUp className="mr-2" />
                ) : statArrow === "down" ? (
                  <FaArrowDown className="mr-2" />
                ) : (
                  ""
                )}
                {statPercent}%
              </span>
              <span className="whitespace-nowrap">{statDescripiron}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
