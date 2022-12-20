import React from "react";
import FullLayout from "../../sections/dashboard/FullLayout";

const Profile = () => {
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        {/* Left */}
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            "sssss"
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            "sssss"
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default Profile;
