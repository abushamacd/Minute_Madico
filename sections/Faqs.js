import Image from "next/image";
import React, { useState } from "react";
import Faq from "../components/Faq";
import faq from "../public/images/svg/faq.svg";

const Faqs = () => {
  const faqs = [
    {
      _id: 1,
      title: "How many team members can I invite?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      _id: 2,
      title: "What is the maximum file upload size?",
      description:
        "No more than 2GB. All files in your account must fit your alloted storage space",
    },
    {
      _id: 3,
      title: "How do I reset my password?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      _id: 4,
      title: "Can I cancel my subscription?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      _id: 5,
      title: "Do you provide additional support?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  const [open, setOpen] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4 items-center">
          <div className="p-4 lg:w-1/2 mx-auto">
            <Image
              className="object-cover object-center rounded"
              src={faq}
              alt="faq"
            />
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="w-full">
              {faqs.map((faq) => {
                return (
                  <Faq
                    key={faq._id}
                    faq={faq}
                    open={open === faq._id}
                    toggle={() => toggle(faq._id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
