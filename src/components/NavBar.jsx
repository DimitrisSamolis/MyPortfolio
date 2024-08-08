import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import account from "../assets/home/acc.png";

const NavBar = ({ isDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Projects", path: "/projects" },
    { id: 4, link: "Experience", path: "/experience" },
    { id: 5, link: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-16 px-4 fixed top-0 left-0 z-50 ${
        isDarkMode ? "bg-indigo-800" : "bg-indigo-400"
      } shadow-lg `}
    >
      <div className="flex items-center">
        <h1 className="text-2xl md:text-4xl font-mono ml-2 hover:text-orange duration-200 cursor-pointer">
          <Link to="/">D-Sam</Link>
        </h1>
        <img src={account} alt="my account" className="h-8 md:h-10 ml-2" />
      </div>

      <ul className={`hidden md:flex ${nav ? "hidden" : ""}`}>
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:text-orange duration-200"
          >
            <Link
              to={path}
              className="hover:text-orange-400"
              onClick={() => setNav(false)}
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
        <ul className="flex flex-col bg-inherit justify-center items-center absolute top-0 left-0 w-full h-screen ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:text-orange hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={path}
                className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200 hover:text-orange rounded-xl"
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
