import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import Loader from "../components/Loader";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

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
          <div>
            <div className="mt-6 text-center">
              <span className="text-xl m-8 font-bold font-mono border-b-4 text-red-400 border-red-400 md:text-2xl">
                Projects Details
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects
                .slice(0, showDetails ? projects.length : 2)
                .map((project) => (
                  <div
                    className="col-span-12 font-protest sm:col-span-6 lg:col-span-4 p-2"
                    key={project.name}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="mt-6 text-center">
          {!showDetails && projects.length > 2 && (
            <button
              onClick={() => setShowDetails(true)}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
