import React from "react";
import MyImage from "../assets/home/img_crp.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Home = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      name="Home"
      className={`w-full lg:px-10 xl:px-40 py-32  ${inView ? "active" : ""}`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between slide-in ${
          inView ? "active" : ""
        }`}
      >
        <div className="flex flex-col items-start md:items-center text-center md:text-left space-y-4 md:space-y-6 px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
            Welcome to my Portfolio!
          </h1>
          <p className="text-lg md:text-xl max-w-lg">
            Hello! I'm Dimitris, a passionate and dedicated front-end developer.
            I have completed my Bachelor's degree at the University of Piraeus,
            where I honed my skills and expanded my knowledge in the field of
            web development.
          </p>
          <Link
            to="/projects"
            className="group w-fit flex items-center rounded-xl bg-orange p-3 transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>My Projects</span>
              <BsArrowRightCircle
                size={20}
                className="transition-transform transform group-hover:translate-x-2 duration-300"
              />
            </span>
          </Link>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={MyImage}
            alt="Dimitris"
            className="rounded-full shadow-xl max-w-xs md:max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
