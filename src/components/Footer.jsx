import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = ({ isDarkMode }) => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={20} />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/dimitris-samolis-66a73b208/",
    },
    {
      id: 2,
      child: <FaGithub size={20} />,
      title: "GitHub",
      href: "https://github.com/DimitrisSamolis",
    },
    {
      id: 3,
      child: <HiOutlineMail size={20} />,
      title: "Email",
      href: "mailto:dimitrissamolis2001@gmai.com",
    },
  ];

  return (
    <footer
      className={`${
        isDarkMode ? "bg-indigo-800" : "bg-indigo-400"
      } pb-1 mt-auto`}
    >
      <div className="mx-auto text-center">
        <div className="flex justify-center items-center">
          Find me on:
          {links.map(({ id, child, href, title }) => (
            <div key={id}  className="mx-2 hover:text-orange" title={title}>
              <a href={href} className=" px-2" target="_blank" rel="noreferrer">
                {child}
              </a>
            </div>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Dimitris Samolis. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
