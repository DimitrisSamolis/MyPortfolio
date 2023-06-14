import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dimitris-samolis-66a73b208/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DimitrisSamolis",
    },
    {
      id: 3,
      child: (
        <> 
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:dimitrissamolis2001@gmai.com",
      style: "rounded-br-md"
    }
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-36 h-14 px-2 bg-orange ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between pl-1 items-center w-full "
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
