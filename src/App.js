import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if(window.innerWidth < 767) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  return (
    <div className="bg-background">
      {isDesktop && <Cursor/> }
      <Navbar />
      <Hero isDesktop={isDesktop} />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
