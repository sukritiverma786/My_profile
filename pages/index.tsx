import React from "react";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import Projects from "./Projects";
import Resume from "./Resume";
// console.log("hello service", services)

const index = () => {
  return (
    <>
      <div className="flex flex-col flex-grow px-6 pt-1text-center font-mono">
        <h5 className="my-3 font-m edium text-white">
          May you find a dedicated and detail-oriented Software Engineer, with
          extensive experience in building dynamic and responsive web
          applications using React.js and Node.js. May they be adept at
          collaborating with cross-functional teams to deliver high-quality
          software solutions within specified timelines. May their passion drive
          them to stay abreast of emerging technologies and leverage them to
          enhance product functionality.
        </h5>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <div className="text-center">
            <span className="text-xl m-8 font-bold border-b-4 text-red-400 border-red-400 md:text-2xl">
              What I Offer
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                className="bg-gray-200 rounded-lg lg-col-span-1 dark:bg-dark-200"
                key={Date()}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* <div>{JSON.stringify(services)}</div> */}
      </div>
      <Resume />
      <Projects />
    </>
  );
};

export default index;

// export const getServerSidePropsContext = async (
//   context:GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()

//     console.log("SERVER,services");

//   return{
//     props:{
//       services: data.services,
//     }
//   }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER,services");

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const res = await fetch("http://localhost:3000/api/services");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();

    console.log("SERVER,services", data);

    return {
      props: {
        services: data.services,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return an empty object or default value to prevent build errors
    return {
      props: {
        services: [],
      },
    };
  }
};
