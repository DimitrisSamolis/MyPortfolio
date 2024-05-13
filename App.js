import React, { useState, useEffect } from "react";
import Home from "./src/components/Home";
import NavBar from "./src/components/NavBar";
import Socials from "./src/components/Socials";
import About from "./src/components/About";
import Project from "./src/components/Project";
import Wallpaper from "./assets/background/myportwall.jpg";
import Wallpaper1 from "./assets/background/myportwall1.jpg";
import Experience from "./src/components/Experience";
import Contact from "./src/components/Contact";
import Loader from "./src/components/Loader";
import Footer from "./src/components/Footer";
import SwitchMode from "./src/components/SwitchMode";

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
        backgroundImage: isDarkMode
          ? `url(${Wallpaper1})`
          : `url(${Wallpaper})`,
        color: isDarkMode ? "#111" : "#fff",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar isDarkMode={isDarkMode} />
          <Home isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Project isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Socials isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
          <SwitchMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      )}
    </div>
  );
}

export default App;
