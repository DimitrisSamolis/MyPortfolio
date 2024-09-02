import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Project";
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
        background: isDarkMode
          ? "linear-gradient(135deg, #0731c1bf, #002c57)"
          : "linear-gradient(135deg, #3771e0cc, #32c5ff4a)",
        color: isDarkMode ? "#fff" : "#111",
      }}
      className="flex flex-col min-h-screen transition-all duration-500 ease-in-out"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <NavBar isDarkMode={isDarkMode} />
          <div className="flex-grow fade-in">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route
                path="/about"
                element={<About isDarkMode={isDarkMode} />}
              />
              <Route
                path="/projects"
                element={<Projects isDarkMode={isDarkMode} />}
              />
              <Route
                path="/experience"
                element={<Experience isDarkMode={isDarkMode} />}
              />
              <Route
                path="/contact"
                element={<Contact isDarkMode={isDarkMode} />}
              />
              <Route path="*" element={<Home isDarkMode={isDarkMode} />} />
            </Routes>
          </div>
          <Socials isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
          <SwitchMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Router>
      )}
    </div>
  );
}

export default App;
