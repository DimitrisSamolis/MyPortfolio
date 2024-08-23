import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ isDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Experience", path: "/experience" },
    { id: 4, link: "Projects", path: "/projects" },
    { id: 5, link: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-16 px-4 fixed top-0 left-0 z-50 ${
        isDarkMode ? "bg-indigo-800" : "bg-indigo-400"
      } shadow-lg `}
    >
      <div className="flex items-center">
        <h1 className="text-xl lg:text-4xl font-mono font-bold ml-2 hover:text-orange duration-200 cursor-pointer">
          <Link to="/">Dimitris Samolis</Link>
        </h1>
      </div>

      <ul className={`hidden md:flex ${nav ? "hidden" : ""}`}>
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-mono font-bold hover:text-orange duration-200"
          >
            <Link
              to={path}
              className="hover:text-orange"
              onClick={() => setNav(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden hover:text-orange font-mono duration-200 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col bg-inherit justify-center font-mono items-center absolute top-0 left-0 w-full h-screen ">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-mono font-bold py-6 text-3xl hover:text-orange hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={path}
                className="px-4 cursor-pointer font-mono font-bold py-6 text-3xl hover:scale-105 duration-200 hover:text-orange rounded-xl"
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
