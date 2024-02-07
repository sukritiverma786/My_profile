import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    const lowercasePathname = pathname.toLowerCase();
    if (lowercasePathname === "/") setActiveItem("About");
    if (lowercasePathname === "/projects" || lowercasePathname === "/Projects")
      setActiveItem("Projects");
    if (lowercasePathname === "/resume" || lowercasePathname === "/Resume")
      setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg text-red-400">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/Projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/Resume"
        />
      </div>
    </div>
  );
};

export default NavBar;