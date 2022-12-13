import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";

const Appoinment = () => {
  const router = useRouter();
  const path = router.route.split("/");
  return (
    <section className="container mx-auto px-5 py-24">
      <Breadcrumbs path={path} />
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <SectionHeader
            title="Book Your Appoinment"
            desc="Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation."
          />
        </div>
        <div className="p-4 lg:w-1/2 w-full mx-auto">
          <form className="">
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Patient Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-accent border focus:border-accent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Abu Shama"
                />
                <p className="text-error text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-accent border border-accent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="email"
                  placeholder="contact@imshama.com"
                />
                <p className="text-erroborder-gray-500r text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-accent border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-accent"
                  id="grid-last-name"
                  type="text"
                  placeholder="017XXXXXXXX"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Departments
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-100 border border-gray-200 text-accent py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-accent"
                    id="grid-state"
                  >
                    <option>ABC</option>
                    <option>DEF</option>
                    <option>GHI</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Doctor Name
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-100 border border-gray-200 text-accent py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-accent"
                    id="grid-state"
                  >
                    <option>ABC</option>
                    <option>DEF</option>
                    <option>GHI</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-accent border border-accent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="date"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Time
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-100 border border-gray-200 text-accent py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-accent"
                    id="grid-state"
                  >
                    <option>ABC</option>
                    <option>DEF</option>
                    <option>GHI</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Comments
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-accent border border-accent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  rows={7}
                  placeholder="......."
                />
              </div>
            </div>
            <div className="flex flex-wrap mx-auto mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <Button text="Book An Appoinment" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
