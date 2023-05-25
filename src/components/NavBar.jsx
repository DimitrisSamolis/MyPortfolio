import React, { useState } from "react";
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import wallpaper from '../assets/myportwall.jpg'


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
      link: 'Portfolio'
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
    
    <div className="flex justify-between items-center w-full h-16 px-4 fixed text-gray-300 bg-blue-950 ">
      <div>
        <h1 className="text-2xl md:text-4xl  font-mono  ml-2 cursor-pointer" onClick={refreshPage}>
          DimSa <span className="md:text-3xl text-1xl">👨‍💻</span>
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={800}> {link} </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:scale-105 duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        
        <ul className="flex flex-col opacity-95 justify-center items-center absolute top-0 left-0 w-full h-screen text-white"
            style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
          }}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 duration-200  hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 rounded-xl "
            >
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}> {link} </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
