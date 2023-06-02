import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Project from "./components/Project";
import Wallpaper from './assets/background/myportwall.jpg';
import Wallpaper1 from './assets/background/myportwall1.jpg';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import SwitchMode from "./components/SwitchMode";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedDarkMode = sessionStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      sessionStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <div
      style={{
        backgroundImage: isDarkMode ? `url(${Wallpaper1})` : `url(${Wallpaper})`,
        color: isDarkMode ? "#111" : "#fff",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
          <Socials />
          <Footer />
          <SwitchMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      )}
    </div>
  );
}

export default App;
