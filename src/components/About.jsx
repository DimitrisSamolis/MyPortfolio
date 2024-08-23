import React from "react";
import { useInView } from "react-intersection-observer";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} name="About" className={`w-full py-32 lg:px-10 xl:px-40 `}>
      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ${
          inView ? "active" : ""
        }`}
      >
        <div
          className={`rounded-2xl p-8 shadow-lg slide-in ${
            inView ? "active" : ""
          }`}
        >
          <div className="flex items-center space-x-4 pb-8">
            <h2 className="text-4xl font-bold border-b-4 border-orange pb-2">
              About Me
            </h2>
          </div>
          <p className="text-lg mt-4">
            Throughout my journey as a developer, I have had the opportunity to
            work on numerous projects that have allowed me to apply and refine
            my skills. From building responsive websites to crafting interactive
            user interfaces, I have gained valuable hands-on experience in
            various aspects of software development.
          </p>
          <p className="text-lg mt-4">
            I am particularly skilled in <b>HTML, CSS, and JavaScript </b> , and
            I am always eager to learn new technologies and frameworks to
            enhance my abilities. I have a strong attention to <b>detail</b> and
            a keen eye for <b>design</b>, which enables me to create visually
            appealing and user-friendly interfaces.
          </p>
          <p className="text-lg mt-4">
            Collaboration is something I greatly value, and I thrive in team
            environments where ideas can be shared and synergies can be created.
            I believe that the best results are achieved through effective
            <b> communication</b>, <b> cooperation</b>, and a passion for
            delivering
            <b> high-quality work</b> .
          </p>
          <p className="text-lg mt-4">
            I am currently seeking opportunities for cooperation and
            professional growth. If you have a project or an opportunity where
            my skills and enthusiasm align, I would love to hear from you. Let's
            work together to bring innovative ideas to life!
          </p>
          <p className="text-lg mt-4">
            Thank you for taking the time to visit my portfolio. Feel free to
            explore my projects and get in touch with me. I look forward to
            connecting with you and discussing potential collaborations.
          </p>
          <Link
            to="/experience"
            className="inline-flex items-center space-x-3 text-lg bg-orange font-medium my-8 py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>Technologies that I have worked with</span>
            <BsArrowRightCircle size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
