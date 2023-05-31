import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Project from "./components/Project";
import Wallpaper from './assets/myportwall.jpg';
import Wallpaper1 from './assets/myportwall1.jpg';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedDarkMode = sessionStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        backgroundImage: isDarkMode ? `url(${Wallpaper})` : `url(${Wallpaper1})`,
        color: isDarkMode ? "#fff" : "#111",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar isDarkMode={isDarkMode} />
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
          <Socials />
          <Footer />
          <button
            onClick={toggleDarkMode}
            className={`fixed top-20 right-5 px-4 py-2 hover:bg-orange-500 ${isDarkMode ? ' bg-white' : 'bg-black'}  rounded-xl cursor-pointer z-40`}
          >
            {isDarkMode ? (
              <div className="text-black">
                <BsSunFill />
              </div>
            ) : (
              <div className="text-white">
                <BsFillMoonStarsFill />
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
