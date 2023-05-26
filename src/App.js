import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Project from "./components/Project";
import Wallpaper from './assets/myportwall.jpg'
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import React, { useState, useEffect } from "react";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div  style={{
      backgroundImage: `url(${Wallpaper})`
    }}>
      {isLoading ? <Loader /> : null}
      {!isLoading && (
        <div>
          
          <NavBar />
          <Home />
          <About />
          <Project />
          <Experience />
          <Contact />
    
          <Socials />
          
        </div>
      )}

    </div>
  );
}

export default App;
