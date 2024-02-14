import React from "react";
import { FunctionComponent } from "react";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    category,
    Roles_And_Responsibilities,
    description,
    // github_url,
    key_techs,
  },
}) => {
  return (
    <>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500 text-white shadow-custom-light dark:shadow-custom-dark">
        <p className="my-2 text-center">{name}</p>
        <p className="my-2 text-center">{category}</p>
        <p className="my-2 text-center">{Roles_And_Responsibilities}</p>
        <p className="my-2 text-center">{description}</p>
        {/* <p className="my-2 text-center">{github_url}</p> */}
        <p className="my-2 text-center">{key_techs}</p>
      </div>
      {/* <img  src={image_path} alt={name} className='cursor-pointer' /> */}
    </>
  );
};

export default ProjectCard;
