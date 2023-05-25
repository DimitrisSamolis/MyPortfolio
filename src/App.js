import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Wallpaper from './assets/myportwall.jpg'
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div  style={{
      backgroundImage: `url(${Wallpaper})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center'
    }}>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <Socials />
    </div>
  );
}

export default App;
