import React from "react";

import Link from "next/link";

const UserDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52"
      >
        <li>
          <Link href={"/"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link href={"/"}>Settings</Link>
        </li>
        <li>
          <Link href={"/"}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
