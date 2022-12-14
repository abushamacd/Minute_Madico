import React from "react";
import CardStats from "./Cards/CardStats";
import { FaRegChartBar, FaChartPie, FaUsers, FaPercent } from "react-icons/fa";

// components

export default function HeaderStats() {
  const cardsData = [
    {
      statSubtitle: "TRAFFIC",
      statArrow: "up",
      statTitle: "350,897",
      statPercentColor: "text-emerald-500",
      statPercent: "3.48",
      statIconName: <FaRegChartBar />,
      statDescripiron: "Since last month",
      statIconColor: "bg-red-500",
    },
    {
      statSubtitle: "NEW USERS",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-red-500",
      statDescripiron: "Since last week",
      statIconName: <FaChartPie />,
      statIconColor: "bg-orange-500",
      statTitle: "2,356",
    },
    {
      statSubtitle: "SALES",
      statTitle: "924",
      statArrow: "down",
      statPercent: "1.10",
      statPercentColor: "text-orange-500",
      statDescripiron: "Since yesterday",
      statIconName: <FaUsers />,
      statIconColor: "bg-pink-500",
    },
    {
      statSubtitle: "PERFORMANCE",
      statTitle: "49,65%",
      statArrow: "up",
      statPercent: "12",
      statPercentColor: "text-emerald-500",
      statDescripiron: "Since last month",
      statIconName: <FaPercent />,
      statIconColor: "bg-blue-500",
    },
  ];
  return (
    <>
      {/* Header */}
      <div
        className={`relative md:pt-32 pb-32 pt-12 ${process.env.NEXT_PUBLIC_gb}`}
      >
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {cardsData.map( (cardData,index) => {
                return <CardStats key={index} cardData={cardData} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
