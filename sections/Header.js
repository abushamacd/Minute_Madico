import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  const router = useRouter();
  const path = router.route.split("/");
  if (path[1] !== "dashboard") {
    return (
      <div className="relative">
        <Navbar />
      </div>
    );
  }
};

export default Header;
