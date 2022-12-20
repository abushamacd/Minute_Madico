import React from "react";
import FullLayout from "../../sections/dashboard/FullLayout";
import logo from "../../public/icon.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            <h2 className="font-bold mb-4 border-b-2">Add New Doctor</h2>
            <div className="flex justify-evenly items-center mb-2">
              <Image
                src={logo}
                alt=""
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="px-4 md:block hidden">
                <h2 className="font-semibold">Upload your picture</h2>
                <p className="text-sm">
                  For best results, use an image at least 600px by 600px in
                  either .jpg or .png format
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center w-20 h-20 justify-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="flex flex-wrap">
                {/* Fisrt Name */}
                <div className="w-full md:w-1/2 md:pr-3">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Last Name */}
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              {/* Email & Phone */}
              <div className="flex flex-wrap">
                {/* Email */}
                <div className="w-full md:w-1/2 md:pr-3">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide valid email",
                      },
                    })}
                    type="email"
                    placeholder="Type your email"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Phone */}
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              {/* Departments & Gender */}
              <div className="flex flex-wrap">
                {/* Departments */}
                <div className="w-full md:w-1/2 md:pr-3">
                  <label className="label">
                    <span className="label-text">Departments</span>
                  </label>
                  <select
                    {...register("gender")}
                    className="input input-bordered rounded w-full max-w-xs"
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                {/* Gender */}
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("gender")}
                    className="input input-bordered rounded w-full max-w-xs"
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>

              {/* Facebook & Instagram */}
              <div className="flex flex-wrap">
                {/* Facebook */}
                <div className="w-full md:w-1/2 md:pr-3">
                  <label className="label">
                    <span className="label-text">Facebook</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                </div>
                {/* Instagram */}
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="label">
                    <span className="label-text">Instagram</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                </div>
              </div>
              {/* Linkedin & Twitter */}
              <div className="flex flex-wrap">
                {/* Linkedin */}
                <div className="w-full md:w-1/2 md:pr-3">
                  <label className="label">
                    <span className="label-text">Linkedin</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                </div>
                {/* Twitter */}
                <div className="w-full md:w-1/2 md:pl-3">
                  <label className="label">
                    <span className="label-text">Twitter</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered rounded w-full max-w-xs"
                  />
                </div>
              </div>
              {/* Bio */}
              <div className="w-full mb-4">
                <label className="label">
                  <span className="label-text">Your Bio Here</span>
                </label>
                <textarea
                  {...register("name")}
                  type="text"
                  placeholder="Type your name"
                  className="input input-bordered rounded w-full h-20"
                />
              </div>
              {/* Submit */}
              <input
                className={`px-5 py-2.5 text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200`}
                value="Sign Up"
                type="submit"
              />
            </form>
          </div>
        </div>

        {/* Doctor List */}
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

export default AddDoctor;
