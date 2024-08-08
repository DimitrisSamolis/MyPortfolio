import React from "react";
import img1 from "../assets/projects/img1.jpg";
import img2 from "../assets/projects/img2.jpg";
import img3 from "../assets/projects/img3.png";
import img4 from "../assets/projects/img4.jpg";
import img5 from "../assets/projects/img5.png";
import img6 from "../assets/projects/img6.jpg";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: img1,
      href: "https://github.com/DimitrisSamolis/MyPortfolio",
      langs: "> ReactJS, TailwindCss",
      title: "Portfolio",
    },
    {
      id: 2,
      src: img2,
      href: "https://github.com/DimitrisSamolis/Rental-Website",
      langs: "> HTML, CSS, JavaScript, PHP",
      title: "CarRental App",
    },
    {
      id: 3,
      src: img3,
      href: "https://github.com/DimitrisSamolis/VideoGames-Angular",
      langs: "> AngularJS, TypeScript",
      title: "VideoGames App",
    },
    {
      id: 4,
      src: img4,
      href: "https://github.com/DimitrisSamolis/Information-System-for-University-Campus",
      langs: "> JAVA, UMLlet, SQL",
      title: "University Campus DataBase",
    },
    {
      id: 5,
      src: img5,
      href: "https://github.com/DimitrisSamolis/Website-Vue",
      langs: "> VueJS",
      title: "Information System App",
    },
    {
      id: 6,
      src: img6,
      href: "https://github.com/DimitrisSamolis/Client-Server",
      langs: "> Python, XML",
      title: "Communication Between Server-Client",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} name="Projects" className="w-full lg:px-10 xl:px-40 py-32">
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ${
          inView ? "active" : ""
        }`}
      >
        <div
          className={`rounded-2xl p-8 shadow-lg p-6 slide-in ${
            inView ? "active" : ""
          }`}
        >
          <div className="w-auto h-auto flex">
            <h2 className="text-4xl font-bold inline border-b-4 border-orange">
              Projects
            </h2>
          </div>
          <p className="py-6 w-auto h-auto flex ">
            Here’s a showcase of some of my projects. From innovative web apps
            to interactive interfaces, these projects highlight my skills in
            various technologies and frameworks. Dive into each project to see
            how I implement solutions.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 my-6">
            {projects.map(({ id, langs, title, src, href }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" key={id}>
                <div className="shadow-lg shadow-cyan hover:scale-105 duration-500 rounded-2xl relative hover:skew-y-2">
                  <img src={src} alt="" className="rounded-t-2xl " />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity">
                    <div className="bg-white border hover:animate-pulse border-orange w-full h-full flex flex-col items-center justify-center rounded-2xl">
                      <button className="sm:text-sm font-semibold text-lg py-4 text-center text-black">
                        <div className="flex items-center justify-center">
                          <FaGithub size={60} />
                        </div>
                        Show code
                      </button>
                    </div>
                  </div>
                  <div className="bg-orange rounded-b-2xl h-24">
                    <h3 className="font-mono pb-0 p-1">{langs}</h3>
                    <h3 className="flex items-center justify-center font-bold text-center py-2">
                      {title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
