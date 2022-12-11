import React from "react";
import Image from "next/image";
import Link from "next/link";

const Client = ({ client }) => {
  return (
    <Link
      target={"_blank"}
      href="#"
      className="flex justify-center items-center"
    >
      <Image src={client.img} alt="Client Logo" />
    </Link>
  );
};

export default Client;
