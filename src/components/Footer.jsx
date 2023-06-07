import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/dimitris-samolis-66a73b208/',
    },
    {
      id: 2,
      child: <FaGithub size={20} />,
      href: 'https://github.com/Dimitris155',
    },
    {
      id: 3,
      child: <HiOutlineMail size={20} />,
      href: 'mailto:dimitrissamolis2001@gmai.com',
    },
    {
      id: 4,
      child: <BsFillPersonFill size={20} />,
      href: '/CV-DS.pdf',
      download: true,
    },
  ];

  return (
    <footer className="bg-blue pb-1 mt-20">
      <div className="mx-auto text-center ">
        <div className="flex justify-center items-center"> Find me on: 
          {links.map(({ id, child, href, download }) => (
            <div key={id} className="mx-2"> 
              <a
                href={href}
                className=" px-2"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </div>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Dimitris Samolis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
