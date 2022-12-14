import React from "react";
import Head from "next/head";
import FullLayout from "../../sections/dashboard/FullLayout";
import CardLineChart from "../../components/dashboard/Cards/CardLineChart";
import CardBarChart from "../../components/dashboard/Cards/CardBarChart";
import CardPageVisits from "../../components/dashboard/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/dashboard/Cards/CardSocialTraffic";

const Dashboard = () => {
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </FullLayout>
  );
};

export default Dashboard;
