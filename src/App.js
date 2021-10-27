import { useEffect, useState } from "react";
import AboutMe from "./components/home/AboutMe";
import Contact from "./components/home/Contact";
import Cursor from "./components/custom/Cursor";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/common/Navbar";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import { gsap, Power3 } from "gsap";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  let tl = gsap.timeline();
  let ease = Power3.easeOut();

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  return (
    <div className="bg-background">
      {isDesktop && <Cursor />}
      <div>
        <Navbar timeline={tl} ease={ease} isDesktop={isDesktop} />
        <Hero isDesktop={isDesktop} timeline={tl} ease={ease} />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
