import React from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader";
import Doctor from "../../components/Doctor";
import doc01 from "../../public/images/doctors/01.jpg";
import doc02 from "../../public/images/doctors/02.jpg";
import doc03 from "../../public/images/doctors/03.jpg";
import doc04 from "../../public/images/doctors/04.jpg";
import doc05 from "../../public/images/doctors/05.jpg";
import doc06 from "../../public/images/doctors/06.jpg";
import doc07 from "../../public/images/doctors/07.jpg";
import doc08 from "../../public/images/doctors/08.jpg";

const DoctorList = () => {
  const router = useRouter();
  const path = router.route.split("/");
  const specialists = [
    {
      _id: 1,
      name: "Eye Specialist",
      value: "eye",
    },
    {
      _id: 2,
      name: "Medicine Specialist",
      value: "medicine",
    },
    {
      _id: 3,
      name: "Barin Specialist",
      value: "brain",
    },
    {
      _id: 4,
      name: "Heart Specialist",
      value: "heart",
    },
    {
      _id: 5,
      name: "Surgery Specialist",
      value: "sugery",
    },
  ];

  const doctors = [
    {
      _id: 1,
      name: "Calvin Carlo",
      specialist: "Eye Care",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc01,
    },
    {
      _id: 2,
      name: "Cristino Murphy",
      specialist: "M.B.B.S, Gynecologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc02,
    },
    {
      _id: 3,
      name: "Alia Reddy",
      specialist: "M.B.B.S, Psychotherapist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc03,
    },
    {
      _id: 4,
      name: "Toni Kovar",
      specialist: "M.B.B.S, Orthopedic",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc04,
    },
    {
      _id: 5,
      name: "Jessica McFarlane",
      specialist: "M.B.B.S, Dentist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc05,
    },
    {
      _id: 6,
      name: "Elsie Sherman",
      specialist: "M.B.B.S, Gastrologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc06,
    },
    {
      _id: 7,
      name: "Bertha Magers",
      specialist: "M.B.B.S, Urologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc07,
    },
    {
      _id: 8,
      name: "Louis Batey",
      specialist: "M.B.B.S, Neurologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc08,
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <section className="container mx-auto px-5 py-24">
      <Breadcrumbs path={path} />
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <SectionHeader
            title="Explore By Specialist"
            desc="Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment or a simple consultation."
          />
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mx-auto">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Pick from Below
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-accent py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-accent"
                id="grid-state"
              >
                {specialists.map((speciallist, index) => {
                  return (
                    <option key={index} value={speciallist.value}>
                      {speciallist.name}
                    </option>
                  );
                })}
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
        <div className="flex flex-wrap -m-4">
          {doctors.map((doctor) => {
            return <Doctor key={doctor._id} doctor={doctor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorList;
