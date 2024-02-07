import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation, GoMail, GoDeviceMobile } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import logo from "./logoImage.jpg";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("print settheme clicked");
  };
  return (
    <div>
      <Image className="logoImg mx-auto rounded-full" src={logo} alt="image" />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">SuKriti</span>{" "}
        <span className="text-white">Verma</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center"
        href="/Resume.pdf"
        download="Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* (social icons)*/}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        {/* <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}

        <a href="https://github.com/sukritiverma786">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>

        {/* <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a> */}
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="mr-2" />
          <span>Mumbai(India), Remote</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <GoMail className="mr-2" />
          <span>sukritiverma786@gmail.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <GoDeviceMobile className="mr-2" />
          <span>8789736059</span>
        </div>
        {/* 
        <p className="my-2">
          <span>
            <GoMail className="mr-2" />
          </span>
          sukritiverma786@gmail.com
        </p>

        <p className="my-2">
          <span>
            <GoDeviceMobile className="mr-2" />
          </span>
          8789736059
        </p> */}
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:sukritiVerma786@gmail.com")}
      >
        Email me
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle theme
      </button> */}
    </div>
  );
};

export default Sidebar;
