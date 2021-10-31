import { useEffect, useState } from "react";
import AboutMe from "./components/home/AboutMe";
import Contact from "./components/home/Contact";
import Cursor from "./components/custom/Cursor";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/common/Navbar";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setHeight] = useState(0);

  useEffect(() => {
    let timer = null;
    const callback = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const result =
          typeof window.orientation === "undefined" &&
          navigator.userAgent.indexOf("IEMobile") === -1;
        window.history.scrollRestoration = "manual";
        setIsDesktop(result);
        setHeight(window.innerHeight);
      }, 100);
    };

    callback();

    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  return (
    <div className="bg-background">
      {isDesktop && <Cursor />}
      <div>
        <Navbar />
        <Hero isDesktop={isDesktop} />
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
