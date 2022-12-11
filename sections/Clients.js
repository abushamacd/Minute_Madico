import React from "react";
import poyosis from "../public/images/clients/poyosis.png";
import google from "../public/images/clients/google.png";
import lenovo from "../public/images/clients/lenovo.png";
import paypal from "../public/images/clients/paypal.png";
import shopify from "../public/images/clients/shopify.png";
import spotify from "../public/images/clients/spotify.png";
import Client from "../components/Client";

const Clients = () => {
  const clients = [
    {
      _id: 1,
      website: "/",
      img: poyosis,
    },
    {
      _id: 2,
      website: "/",
      img: google,
    },
    {
      _id: 3,
      website: "/",
      img: lenovo,
    },
    {
      _id: 4,
      website: "/",
      img: spotify,
    },
    {
      _id: 5,
      website: "/",
      img: shopify,
    },
    {
      _id: 6,
      website: "/",
      img: paypal,
    },
  ];
  return (
    <section className="bg-slate-100 ">
      <div className="py-8 lg:py-12 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {clients.map((client) => {
            return <Client key={client._id} client={client}></Client>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
