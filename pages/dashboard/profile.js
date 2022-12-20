import Image from "next/image";
import React from "react";
import FullLayout from "../../sections/dashboard/FullLayout";
import logo from "../../public/icon.png";

const Profile = () => {
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        {/* Left */}
        <div className="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            {/* Profile */}
            <div className="">
              <div className="user_section text-center border p-2 rounded-md">
                <img
                  className={`user_logo block mx-auto rounded-full`}
                  alt="User photo"
                  width={100}
                  height={100}
                  src="https://i.ibb.co/MgsTCcv/avater.jpg"
                />
                <h1 className="user_name text-lg whitespace-nowrap">
                  Abu Shama
                </h1>
                <p className="role text-sm whitespace-nowrap">Super Admin</p>
              </div>
            </div>
            <div className="profile_info my-2">
              <ul className="text-sm">
                <li className="mb-2">
                  <span className="font-bold">Name: </span> Shama
                </li>
                <li className="mb-2">
                  <span className="font-bold">Gender: </span> Male
                </li>
                <li className="mb-2">
                  <span className="font-bold">Age: </span> 25
                </li>
                <li className="mb-2">
                  <span className="font-bold">Blood Group: </span> 25
                </li>
                <li className="mb-2">
                  <span className="font-bold">Phone: </span> 019XXXXXXXXX
                </li>
                <li className="mb-2">
                  <span className="font-bold">Email: </span> contact@imshama.com
                </li>
                <li className="mb-2">
                  <span className="font-bold">Address: </span> 121/9 Bangoss
                  Para, Chudanga
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            <h2 className="font-bold border-b-2">Other Info</h2>
            <div className="others_info text-sm">
              <ul>
                <li className="mt-2">
                  <span className="font-bold mb-2 block">About Us</span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  molestiae dolorem perferendis reiciendis ad magni quo at minus
                  voluptates, excepturi impedit magnam laborum asperiores
                  expedita corporis architecto ea, enim obcaecati.
                </li>
              </ul>
            </div>
            <div className="md:flex mt-4 md:space-x-2">
              <div className="md:w-6/12 w-full mb-3 md:mb-0">
                <h2 className="text-xl font-bold">Appoinment List</h2>
                <ul>
                  <li className="mt-2 border flex justify-between text-sm p-2 rounded">
                    <div>
                      <p className="font-bold">Treatment Name</p>
                      <p className="text-sm">Doctor Name</p>
                    </div>
                    <div
                      title="Show Details"
                      className={`text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 w-12 h-12 cursor-pointer `}
                    >
                      12 <br /> Dec
                    </div>
                  </li>
                  <li className="mt-2 border flex justify-between text-sm p-2 rounded">
                    <div>
                      <p className="font-bold">Treatment Name</p>
                      <p className="text-sm">Doctor Name</p>
                    </div>
                    <div
                      title="Show Details"
                      className={`text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 w-12 h-12 cursor-pointer `}
                    >
                      12 <br /> Dec
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-6/12 w-full">
                <h2 className="text-xl font-bold">Payment List</h2>
                <ul>
                  <li className="mt-2 border flex justify-between text-sm p-2 rounded">
                    <div>
                      <p className="font-bold">Treatment Name</p>
                      <p className="text-sm">Payment Status</p>
                    </div>
                    <div
                      title="Show Details"
                      className={`text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 w-12 h-12 cursor-pointer `}
                    >
                      Show Details
                    </div>
                  </li>
                  <li className="mt-2 border flex justify-between text-sm p-2 rounded">
                    <div>
                      <p className="font-bold">Treatment Name</p>
                      <p className="text-sm">Doctor Name</p>
                    </div>
                    <div
                      title="Show Details"
                      className={`text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 w-12 h-12 cursor-pointer `}
                    >
                      Show Details
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            <h2 className="font-bold border-b-2">Doctor List</h2>
            <div className="flex items-center border-b-[1px] py-2">
              <Image
                src={logo}
                alt=""
                width={120}
                height={120}
                className="rounded border"
              />
              <div className="doctor_info ml-4">
                <h2 className="font-bold text-accent">Name</h2>
                <p className="text-sm">Speciallity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default Profile;
