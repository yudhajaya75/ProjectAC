import { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

type Props = {
  parentMenu?: React.ReactNode | string;
  parentLink?: string;
  menu: { pathName: string; url: string }[];
};

const Dropdown = ({ menu, parentMenu, parentLink }: Props) => {
  const [active, setActive] = useState(false);
  const { width } = useWindowSize();
  const location = useLocation();

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  useEffect(() => {
    setActive(false);
  }, [width]);

  const isActive = (path: string) => {
    console.log(`Current path: ${location.pathname}, Menu path: ${path}`);
    return location.pathname === path
      ? "text-[#8DA9C4] md:text-[#074288] font-bold"
      : "text-white md:text-black";
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {parentLink ? (
        <Link
          to={parentLink}
          className="flex gap-2 items-center cursor-pointer"
        >
          <span className="hover:text-[#8DA9C4] text-white md:text-black">
            {parentMenu}
          </span>
          {active ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </Link>
      ) : (
        <div className="flex gap-2 items-center cursor-pointer">
          <span className="hover:text-[#8DA9C4] text-white md:text-black">
            {parentMenu}
          </span>
          {active ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </div>
      )}
      <div
        className={`${
          active ? "absolute" : "hidden"
        } top-[85px] lg:w-[200px] bg-white z-[9999] py-3 px-5 grid gap-2 transition-all duration-150 shadow-md rounded-md`}
      >
        {menu.map((value, index) => (
          <Link
            to={value.url}
            key={index}
            className={`${isActive(value.url)} block hover:text-[#074288]`}
            onClick={() => setActive(false)}
          >
            {value.pathName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
