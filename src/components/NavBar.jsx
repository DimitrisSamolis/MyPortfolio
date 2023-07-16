import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import account from "../assets/home/acc.png";

const NavBar = ({isDarkMode}) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
      position: 50,
    },
    {
      id: 3,
      link: "Projects",
      position: -80,
    },
    {
      id: 4,
      link: "Experience",
      position: 170,
    },
    {
      id: 5,
      link: "Contact",
      position: -80,

    },
  ];

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div
      className={`flex justify-between items-center w-full h-16 px-4 fixed z-50 ${
        isDarkMode ? "bg-sky-900" : "bg-sky-600"
      }`} 
    >
      <div className="flex items-center cursor-pointer" onClick={refreshPage}>
        <h1 className="text-2xl md:text-4xl font-mono ml-2 hover:text-orange duration-200">
          D-Sam
        </h1>
        <img src={account} alt="my account" className="h-8 md:h-10 ml-2" />
      </div>

      <ul className={`hidden md:flex ${nav ? "hidden" : ""}`}>
        {links.map(({ id, link ,position }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium"
          >
            <Link
              to={link}
              smooth
              duration={800}
              className="hover:text-orange duration-200"
              offset={position}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden hover:text-orange duration-200 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col opacity-95 bg-slate-800 justify-center items-center absolute top-0 left-0 w-full h-screen  z-40"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl  duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={800}
                className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200
                hover:text-orange  hover:opacity-100 rounded-xl"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
