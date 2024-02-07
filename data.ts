import { IProject, IService, Iskill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Dev",
    about:
      "I specialize in crafting stunning and infinitely scalable Single Page Applications, seamlessly merging beauty and scalability using cutting-edge technologies. <b> HTML5 </b> <b> CSS3 </b> <b> Redux </b>and <b> React.js</b>",
  },

  {
    Icon: FaServer,
    title: "Backend Devlopment",
    about:
      "handle database, server, upi using Node.js, Express.js <b>& other popular frameworks",
  },

  {
    Icon: AiOutlineApi,
    title: "Database",
    about: "<b> MongoDB, MySQL <b> ",
  },

  {
    Icon: MdDeveloperMode,
    title: "Languages",
    about: "Html, JavaScript ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "API Devlopment",
    about: "I can develop robust Rest Api using </b> and <b> Node Api</b>",
  },

  {
    Icon: RiComputerLine,
    title: "Version Control",
    about: "Git, GitHub",
  },
];

export const languages: Iskill[] = [
  {
    name: "React.js",
    level: "85%",
    Icon: BsCircleFill,
  },

  {
    name: "NodeJs",
    level: "45%",
    Icon: BsCircleFill,
  },

  {
    name: "HTML5",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "JavaScript",
    level: "45%",
    Icon: BsCircleFill,
  },

  {
    name: "Mongo DB",
    level: "45%",
    Icon: BsCircleFill,
  },

  {
    name: "bootstrap, css3",
    level: "70%",
    Icon: BsCircleFill,
  },
];
// JavaScript, React.js, Redux, Node.js, Express.js, bootstrap, html, css
// Database Management:    		MYSQL (Intermediate), Mongo DB
// Designing:				Figma (Intermediate)
// IT Methodologies:                 		Agile, Test Driven
// Development Environment:              Visual Studio
// Version Control: 			Git

export const tools: Iskill[] = [
  {
    name: "figma",
    level: "45%",
    Icon: BsCircleFill,
  },

  {
    name: "photoshop",
    level: "45%",
    Icon: BsCircleFill,
  },

  {
    name: "Visual Studio",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "Git",
    level: "45%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Admin Portal",
    description:
      "This is a progressive web app aimed to show the report of income and employment details",
    // deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    Roles_And_Responsibilities:
      "Responsible to perform following upon the application: Designing WebPages, Coding some modules of the UI. Applying Business Logic functionalities to the web pages.Integrating the APIS on the WebPages.",
    // github_url: "https://github.com/dey-sumit/covid-19-tracker",
    category: ["Node ", "Mongo ", "React "],
    key_techs: ["React, ", "Node, ", "Express, ", "Mongo, "],
  },
  {
    name: "Income and Employment Verification Platform",
    description:
      "An web app which shows how an algorithm (path finding or sorting)works with cool animation",
    // deployed_url: "https://visual-algorithm.web.app/",
    Roles_And_Responsibilities:
      " Responsible to perform following upon the application: Coordinating with the UX designer to get the webpage mock design and assets.Writing reusable and efficient code components.Applying Business Logic functionalities to the web pages.Writing media queries for different screen resolutions and testing it.",
    // github_url: "https://github.com/Dey-sumit/algorithm-visualizer",
    category: ["React "],
    key_techs: ["React, ", "node, "],
  },
  {
    name: "E-commerce",
    description:
      "Social Media app for developers who can share project,create posts, etc...",
    // deployed_url: "https://dev-talks.herokuapp.com/",
    Roles_And_Responsibilities:
      "Responsible to perform following upon the application: Designing WebPages, Coding some modules of the UI. Applying Business Logic functionalities to the web pages.Integrating the APIS on the WebPages. also work on nodejs making server,model,schema using mongoDB",
    // github_url: "https://github.com/Dey-sumit/Dev-talks",
    category: ["Node ", "Mongo ", "React "],
    key_techs: ["React, ", "Node, ", "Express, ", "Mongo"],
  },
  //   {
  //     name: "Realtime Chat App",
  //     description:
  //       "Basic Realtime Chat App where one can create a room can talk to each other",
  //     image_path: "/image/chatapp.jpg",
  //     deployed_url: "https://sumit-chat.netlify.app/",
  //     github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  //     category: ["node", "react"],
  //     key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  //   },
  //   {
  //     name: "Tweeter clone",
  //     description:
  //       "Basic Realtime Chat App where one can create a room can talk to each other",
  //     image_path: "/image/tweetme.jpg",
  //     deployed_url: "https://github.com/Dey-Sumit/tweetme/",
  //     github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  //     category: ["django", "react"],
  //     key_techs: ["React", "Django", "Django REST API"],
  //   },
  //   {
  //     name: "YouTube suing Youtube",
  //     description:
  //       'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube". User can like a video,comment on a video & Much More',
  //     image_path: "/image/YoutubeClone.jpg",
  //     deployed_url: "https://not-utube.web.app",
  //     github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //     category: ["express"],
  //     key_techs: [
  //       "React",
  //       "Redux",
  //       "Firebase Auth",
  //       "YouTube API",
  //       "Sass",
  //       "Bootstrap",
  //     ],
  //   },
  //   {
  //     name: "Football App",
  //     description:
  //       "Basic Realtime Chat App where one can create a room can talk to each other",
  //     image_path: "/image/football.jpg",
  //     deployed_url: "https://o-my-goal.web.app/",
  //     github_url: "https://github.com/Dey-Sumit/football-app",
  //     category: ["react"],
  //     key_techs: ["React", "Redux", "firebase Auth", "API", "Sass", "Bootstrap"],
  //   },
];
