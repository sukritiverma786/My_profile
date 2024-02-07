import React from "react";
import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="font-mono">
            <div className="mt-6 text-center">
              <span className="text-xl m-8 font-bold border-b-4 text-red-400 border-red-400 md:text-2xl">
                Resume
              </span>
            </div>

            <div className="px-6 py-2">
              {/* education & exp */}
              <div className="grid gap-6 md:grid-cols-2 text-white">
                <div>
                  <h5 className="my-3 text-2xl font-bold ">Education</h5>
                  <div>
                    <h5 className="my-2 text-xl font-bold">
                      BCA from MU, in 2016 with 61.46% marks
                    </h5>
                    <p className="font-semibold">Academy of Technology</p>
                    <p className="my-3">
                      I am currently pursuing MCA from Ignou
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="my-3 text-2xl font-bold ">Exprience</h5>
                  <div>
                    <h5 className="my-2 text-xl font-bold">
                      Company Name: Demazi Technologies Pvt. Ltd.
                    </h5>
                    <p className="font-semibold">
                      Formal Title: Software Engineer
                    </p>
                    <p className="font-semibold">
                      Start-End Date: Nov-2019 till date
                    </p>
                    <p className="my-3">
                      Designated as a Software Engineer. I am responsible for
                      developing new and provide services to existing software
                      and products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="my-3 text-2xl text-green font-bold">
                    Languages & Frameworks
                  </h5>
                  <div className="my-2">
                    {languages.map((Language) => (
                      <Bar data={Language} key={Language.name} />
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="my-3 text-2xl text-green font-bold">
                    Tools & Softwares
                  </h5>
                  <div className="my-2">
                    {tools.map((tool) => (
                      <Bar data={tool} key={tool.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
