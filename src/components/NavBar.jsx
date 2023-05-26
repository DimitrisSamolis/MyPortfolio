import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Project'
    },
    {
      id: 4,
      link: 'Experience'
    },
    {
      id: 5,
      link: 'Contact'
    }
  ];

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 fixed text-gray-300 bg-blue-950 z-50">
      <div>
        <h1 className="text-2xl md:text-4xl font-mono ml-2 cursor-pointer" onClick={refreshPage}>
          DimSa <span className="md:text-3xl text-2xl"> 👨‍💻 </span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 z-50"
          >
            <Link to={link} smooth duration={800}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-300 md:hidden hover:scale-105 duration-200 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col opacity-95 bg-black justify-center items-center absolute top-0 left-0 w-full h-screen text-white z-40">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200  hover:bg-gradient-to-r
              hover:from-yellow-400 hover:to-orange-500  hover:opacity-100 rounded-xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
