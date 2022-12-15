import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";

const Login = () => {
  const currentColor = "#6E0963";
  return (
    <div
      style={{ color: currentColor }}
      className={`flex justify-center items-center h-screen	bg-main-bg dark:bg-main-dark-bg custom`}
    >
      <div
        className={`${styles.box} bg-main-bg dark:bg-secondary-dark-bg h-[420px] before:h-[420px] after:h-[420px]`}
      >
        <div className={`${styles.content} bg-main-bg bg-white`}>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-center">Sign In</h3>
            <div className="form flex flex-col">
              <form className="space-y-6 flex flex-col">
                <div className={`${styles.inputBox}`}>
                  <input
                    className={`text-white`}
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
                    type="text"
                    name="password"
                    id="password"
                    required="required"
                  />
                  <span className={``}>Password</span>
                  <i style={{ backgroundColor: currentColor }}></i>
                </div>
                <div className="links flex justify-between">
                  <Link href={`/auth/reset`}>Forgot Password ?</Link>
                  <Link href={`/auth/registration`}>Sign Up</Link>
                </div>
                <input
                  style={{ backgroundColor: currentColor }}
                  className={`text-[#1D2434] w-24 py-3 rounded-md mx-auto`}
                  type="submit"
                  value="Sign In"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
