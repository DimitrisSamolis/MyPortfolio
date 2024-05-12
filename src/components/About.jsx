import React from "react";
import { useInView } from "react-intersection-observer";

const About = ({ isDarkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} name="About" className="w-full py-32 lg:px-10 xl:px-40">
      <div
        className={`max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full ${
          inView ? "active" : ""
        }`}
      >
        <div
          className={`rounded-2xl p-6 ${
            isDarkMode ? "bg-blue" : "bg-lightblue"
          } slide-in ${inView ? "active" : ""}`}
        >
          <div className=" w-auto h-auto flex items-center justify-center pb-8">
            <h2 className="text-4xl font-bold inline border-b-4 border-orange">
              About
            </h2>
          </div>
          <p className="text-md mt-2 px-2 pt-1">
            Throughout my journey as a developer, I have had the opportunity to
            work on numerous projects that have allowed me to apply and refine
            my skills. From building responsive websites to crafting interactive
            user interfaces, I have gained valuable hands-on experience in
            various aspects of software development. <br />I am particularly
            skilled in HTML, CSS, and JavaScript, and I am always eager to learn
            new technologies and frameworks to enhance my abilities. I have a
            strong attention to detail and a keen eye for design, which enables
            me to create visually appealing and user-friendly interfaces.
          </p>
          <p className="text-md mt-2 px-2">
            Collaboration is something I greatly value, and I thrive in team
            environments where ideas can be shared and synergies can be created.
            I believe that the best results are achieved through effective
            communication, cooperation, and a passion for delivering
            high-quality work. <br />
            I am currently seeking opportunities for cooperation and
            professional growth. If you have a project or an opportunity where
            my skills and enthusiasm align, I would love to hear from you. Let's
            work together to bring innovative ideas to life! <br />
          </p>
          <p className="text-md mt-2 px-2">
            Thank you for taking the time to visit my portfolio. Feel free to
            explore my projects and get in touch with me. I look forward to
            connecting with you and discussing potential collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
