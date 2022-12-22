import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
import icon from "../../public/icon.png";
import { toast } from "react-toastify";

const Registration = () => {
  const currentColor = "#6E0963";

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    // Send to DB
    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response?.data?.id) {
      toast(`${response.message}`);
      reset();
    } else {
      toast.error(`${response.message}`);
    }
  };

  return (
    <div
      style={{ color: currentColor }}
      className={`flex justify-center items-center h-screen relative`}
    >
      <div className={`h-[450px]`}>
        <div className={``}>
          <div className="py-6 px-6 lg:px-8 bg-white border rounded border-accent">
            <h3 className="mb-1 text-xl font-medium text-center">Sign Up</h3>
            <div className="form flex flex-col">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="flex flex-wrap">
                  {/* First Name */}
                  <div className="w-full md:w-1/2 md:pr-3">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "First name is required",
                        },
                      })}
                      type="text"
                      placeholder="Type your first name"
                      className="input input-bordered rounded w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.firstName?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.firstName.message}
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
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Last name is required",
                        },
                      })}
                      type="text"
                      placeholder="Type your last name"
                      className="input input-bordered rounded w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.lastName?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.lastName.message}
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
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone number is required",
                        },
                      })}
                      type="text"
                      placeholder="Type your phone number"
                      className="input input-bordered rounded w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.phone?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                {/* Password & Phone */}
                <div className="flex flex-wrap">
                  {/* Password */}
                  <div className="w-full md:w-1/2 md:pr-3">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Minumum 6 charcter",
                        },
                      })}
                      type="password"
                      placeholder="Type your password"
                      className="input input-bordered rounded w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-600">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* Address */}
                  <div className="w-full md:w-1/2 md:pl-3">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is required",
                        },
                      })}
                      type="text"
                      placeholder="Type your address"
                      className="input input-bordered rounded w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.address?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.address.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="links flex justify-between my-4 text-sm">
                  <Link href={`/auth/login`}>Sign In</Link>
                  <Link href={`/auth/reset`}>Forgot Password ?</Link>
                </div>
                {/* Submit */}
                <div className="flex justify-center">
                  <input
                    className={`px-5 py-2.5 text-center w-1/3 rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 `}
                    value="Sign Up"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
