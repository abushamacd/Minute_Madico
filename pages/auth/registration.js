import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";

const Registration = () => {
  const currentColor = "#6E0963";

  return (
    <div
      style={{ color: currentColor }}
      className={`flex justify-center items-center h-screen	bg-main-bg dark:bg-main-dark-bg custom relative top-5`}
    >
      <div
        className={`${styles.box} bg-main-bg dark:bg-secondary-dark-bg h-[520px] before:h-[520px] after:h-[520px]`}
      >
        <div className={`${styles.content} bg-main-bg bg-white`}>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-1 text-xl font-medium text-center">Sign Up</h3>
            <div className="form flex flex-col">
              <form className="space-y-6 flex flex-col">
                <div className={`${styles.inputBox}`}>
                  <input
                    className={``}
                    type="text"
                    name="userName"
                    id="userName"
                    required="required"
                  />
                  <span className={``}>Username</span>
                  <i style={{ backgroundColor: currentColor }}></i>
                </div>{" "}
                <div className={`${styles.inputBox}`}>
                  <input
                    className={``}
                    type="email"
                    name="email"
                    id="email"
                    required="required"
                  />
                  <span className={``}>Email</span>
                  <i style={{ backgroundColor: currentColor }}></i>
                </div>
                <div className={`${styles.inputBox}`}>
                  <input
                    className={``}
                    type="password"
                    name="password"
                    id="password"
                    required="required"
                  />
                  <span className={``}>Password</span>
                  <i style={{ backgroundColor: currentColor }}></i>
                </div>
                <div className={`${styles.inputBox}`}>
                  <input
                    className={``}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required="required"
                  />
                  <span className={``}>Confirm Password</span>
                  <i style={{ backgroundColor: currentColor }}></i>
                </div>
                <div className="links flex justify-between">
                  <Link href={`/auth/reset`}>Forgot Password ?</Link>
                  <Link href={`/auth/login`}>Sign In</Link>
                </div>
                <input
                  style={{ backgroundColor: currentColor }}
                  className={`text-[#1D2434] w-24 py-3 rounded-md mx-auto`}
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
