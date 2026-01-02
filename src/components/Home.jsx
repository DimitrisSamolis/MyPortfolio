import MyImage from "../assets/home/profile.webp";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProfileImage = ({ className }) => (
  <div
    className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
  >
    <img
      src={MyImage}
      alt="Dimitris, Front-End Developer Profile"
      className="w-128 h-128 object-cover rounded-2xl"
      fetchpriority="high"
      width="475"
      height="457"
      decoding="async"
    />
  </div>
);

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      name="Home"
      className={`w-full py-32 lg:px-10 xl:px-40 ${inView ? "active" : ""}`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center transition-opacity duration-1000 ease-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome to my Portfolio!
          </h1>
          <div className="relative md:hidden my-6 flex justify-center">
            <ProfileImage></ProfileImage>
          </div>
          <p className="text-lg my-8">
            Hello! I am <b>Dimitris</b>, a passionate and dedicated
            <b> front-end developer</b>. I have completed my Bachelor's degree
            at the University of Piraeus, where I honed my skills and expanded
            my knowledge in the field of web development.
          </p>
          <Link
            to="/about"
            className="inline-flex text-black items-center my-8 space-x-3 text-lg bg-orange font-medium py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>More about me</span>
            <BsArrowRightCircle size={24} />
          </Link>
        </div>
        <div className="relative md:block p-4 mt-10 md:mt-0 flex justify-center">
          <ProfileImage></ProfileImage>
        </div>
      </div>
    </div>
  );
};

export default Home;
