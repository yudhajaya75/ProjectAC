import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Image from "../global/Image";
import data from "./newNavbarList.json";
import Dropdown from "./Dropdown";
import useWindowSize from "../../hooks/useWindowSize";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const userName = localStorage.getItem("user");
  const location = useLocation();
  const isActive = (path: string) => {
    console.log(`Current path: ${location.pathname}, Menu path: ${path}`);
    return location.pathname === path
      ? "text-[#8DA9C4] md:text-[#074288] font-bold"
      : "text-white md:text-black";
  };
  const { menuList } = data;

  useEffect(() => {
    setMenuOpen(false);
  }, [width]);

  return (
    <nav
      className={`w-full ${
        menuOpen &&
        "fixed top-0 flex flex-col h-screen w-screen bg-[#074188] z-50"
      } md:h-auto md:flex px-4 py-4 lg:px-0 justify-between lg:justify-around md:items-center md:py-8 md:bg-white`}
    >
      <div className="flex w-full md:w-auto justify-between items-center">
        <Link to="/">
          <Image
            alt="Logo AC"
            src="/images/Logo.png"
            isExternal
            customClass="max-h-[60px] w-[300px]"
          />
        </Link>
        <div className="md:hidden cursor-pointer">
          {menuOpen ? (
            <AiOutlineClose
              className={menuOpen ? "text-white" : ""}
              size={20}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          ) : (
            <AiOutlineMenu
              className={menuOpen ? "text-white" : ""}
              size={20}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={`w-full md:w-auto md:flex gap-4 md:gap-5 lg:gap-10 text-2xl md:text-base ${
          menuOpen ? "grid" : "hidden"
        }`}
      >
        {menuList.map((value, index) => {
          if (value.pathName === "About")
            return (
              <Dropdown
                menu={value.children!}
                parentMenu={"About"}
                parentLink={value.url}
                key={index}
              />
            );
          return (
            <Link
              key={index}
              to={value.url}
              className={`${isActive(value.url)} hover:text-[#074288]`}
            >
              {value.pathName}
            </Link>
          );
        })}
      </ul>
      <section
        className={`md:flex w-full md:w-fit text-2xl md:text-base ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {userName ? (
          <></>
        ) : (
          <>
            <img src="./images/we-are-open.png" className="w-[200px]" alt="" />
          </>
        )}
      </section>
    </nav>
  );
};

export default NewNavbar;
