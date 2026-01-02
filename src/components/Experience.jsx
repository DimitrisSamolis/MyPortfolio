import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import js from "../assets/experience/js.png";
import reactimg from "../assets/experience/reactimg.png";
import vue from "../assets/experience/vue.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import angular from "../assets/experience/angular.png";
import uml from "../assets/experience/uml.png";
import java from "../assets/experience/java.png";
import php from "../assets/experience/php.png";
import azure from "../assets/experience/azure.png";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue" },
    { id: 3, src: js, title: "JavaScript", style: "shadow-yellow" },
    { id: 4, src: reactimg, title: "React", style: "shadow-sky" },
    { id: 5, src: vue, title: "Vue", style: "shadow-green" },
    { id: 6, src: angular, title: "Angular", style: "shadow-red" },
    { id: 7, src: uml, title: "UML", style: "shadow-pink" },
    { id: 8, src: tailwind, title: "Tailwind", style: "shadow-sky" },
    { id: 9, src: github, title: "Github", style: "shadow-gray" },
    { id: 10, src: java, title: "JAVA", style: "shadow-red" },
    { id: 11, src: php, title: "PHP", style: "shadow-purple" },
    { id: 12, src: azure, title: "Azure DevOps", style: "shadow-blue" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      name="Experience"
      className="w-full py-32 lg:px-10 xl:px-40 "
    >
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ${
          inView ? "active" : ""
        }`}
      >
        <div
          className={`rounded-2xl shadow-lg p-6  slide-in ${
            inView ? "active" : ""
          }`}
        >
          <div className="w-auto h-auto flex ">
            <h2 className="text-4xl font-bold border-b-4 border-orange inline">
              Experience
            </h2>
          </div>
          <p className="py-6 w-auto h-auto flex ">
            I’ve had the opportunity to work with a diverse set of technologies
            throughout my development journey. Each project has allowed me to
            refine my skills and gain hands-on experience with these tools.
            Here’s a glimpse of the technologies I’ve utilized to build robust
            and dynamic web applications.
          </p>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-20">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={` py-2 rounded-3xl bg-gradient-to-t from-slate-500 to-slate-300 ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <h3 className="mt-4">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
