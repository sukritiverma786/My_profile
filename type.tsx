import { IconType } from "react-icons";
export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Iskill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface IProject {
  name: string;
  description: string;
  Roles_And_Responsibilities: String;
  // github_url:string;
  category: Category[];
  key_techs: string[];
}
export type Category = "React " | "Node " | "Express " | "Django " | "Mongo ";
