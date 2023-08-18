import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail ,HiOutlinePhone} from "react-icons/hi";

const Footer = ({isDarkMode}) => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/dimitris-samolis-66a73b208/",
    },
    {
      id: 2,
      child: <FaGithub size={20} />,
      href: "https://github.com/DimitrisSamolis",
    },
    {
      id: 3,
      child: <HiOutlineMail size={20} />,
      href: "mailto:dimitrissamolis2001@gmai.com",
    },
    {
      id: 4,
      child: <HiOutlinePhone size={20} />,
      href: "tel:+306949227199",
    }
  ];

  return (
    <footer className={`${
      isDarkMode ? "bg-sky-900" : "bg-sky-600"
    } pb-1 mt-20`}>
      <div className="mx-auto text-center ">
        <div className="flex justify-center items-center">
          Find me on:
          {links.map(({ id, child, href }) => (
            <div key={id} className="mx-2">
              <a
                href={href}
                className=" px-2"
                target="_blank"
                rel="noreferrer"
              >
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
