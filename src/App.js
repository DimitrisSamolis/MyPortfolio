import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />

      <Socials />
    </div>
  );
}

export default App;
