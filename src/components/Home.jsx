import React from "react";
import MyImage from "../assets/home/img_crp.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineSwipeVertical } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className=" w-full lg:px-10 xl:px-40 py-20 md:mb-0">
      <div className="max-w-screen-lg h-full mx-auto flex items-center justify-center mt-20 sm:mt-24 p-4 md:flex-row ">
        <div
          className={`rounded-3xl p-6 w-auto h-auto flex items-center justify-center bg-lightblue `}
        >
          <div className="flex flex-col justify-center px-2 sm:px-6 font-semi">
            <h1 className="text-4xl pb-8"> Welcome to my Portfolio!</h1>
            <p className={`p-2 my-2 max-w-md `}>
              Hello! I'm Dimitris, a passionate and dedicated junior front-end
              developer. Currently, I am studying at the University of Piraeus,
              where I am honing my skills and expanding my knowledge in the
              field of web development.
            </p>
            <div>
              <Link
                to="Projects"
                smooth
                duration={500}
                className="group w-fit p-2 my-3 flex items-center rounded-xl bg-brown cursor-pointer"
              >
                My Projects
                <span className="p-2 group-hover:rotate-90 duration-300 ">
                  <BsArrowRightCircle size={20} />
                </span>
              </Link>
            </div>
          </div>
          <div className="my-4 ">
            <img
              src={MyImage}
              alt="my profile"
              className="shadow-2xl shadow-black rounded-3xl max-w-md h-auto md:w-32 w-24 text-right justify-between"
            />
          </div>
        </div>
      </div>
      <span className="flex my-8 justify-center items-center animate-bounce sm:hidden">
        <MdOutlineSwipeVertical color={"white"} size={30} />
      </span>
    </div>
  );
};

export default Home;
