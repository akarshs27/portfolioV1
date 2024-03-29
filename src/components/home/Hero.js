import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import Parallax from "parallax-js";
import Button from "../common/Button";
import man from "../../images/hero/man2.png";
import nextjs from "../../images/hero/nextjs.png";
import code from "../../images/hero/code1.png";
import dots2 from "../../images/hero/dots2.png";
import lower from "../../images/hero/lower.png";
import reactFigma from "../../images/hero/reactFigma.png";
import shapes from "../../images/hero/shapes.svg";
import smHero3 from "../../images/hero/smHero3.png";
import  Resume  from '../../images/Akarsh.pdf'

const Hero = ({ isDesktop }) => {
  const sceneEl = useRef(null);
  const hiEl = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(hiEl.current, { opacity: 1, duration: 1 })
      .from(
        targetSection.current.querySelectorAll(".animItem"),
        { opacity: 0, duration: 2, stagger: 1 },
        "<"
      );
  }, [targetSection]);

  return (
    <section className="mb-16 md:mb-20 relative " id="home" ref={targetSection}>
      <div
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center select-none"
        ref={hiEl}
      >
        <div className="md:w-2/5 flex flex-col md:pr-4 md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-4 animItem">
          <h1 className="text-lg font-medium text-gray-200">
            HI THERE 👋🏻, I'M
          </h1>
          <h1 className="tracking-wider text-4xl md:text-5xl font-semibold nameAnimation">
            Akarsh
          </h1>
          <h1 className="tracking-wider text-md md:text-lg font-medium text-gray-200">
            DEVELOPER + DESIGNER
            <span className="pl-2 text-2xl">🧑🏻‍💻</span>
          </h1>
          <p className="mb-12 leading-relaxed tracking-wider text-md md:text-xl font-medium text-gray-300">
            I design and build user interfaces
          </p>
          <div className="flex justify-center">
            <Button name="Resume" href={Resume} />
          </div>
        </div>
        <div className="lg:max-w-3xl lg:w-full md:w-3/5 select-none animItem">
          {isDesktop ? (
            <>
              <div className="parallax-images" ref={sceneEl}>
                <img
                  data-depth="0.2"
                  src={man}
                  alt="hero"
                  className="absolute z-0 backgroundhero"
                />
                <img
                  data-depth="0.3"
                  src={nextjs}
                  alt="nextjs"
                  className="h-32 absolute z-20 angular"
                />
                <img
                  data-depth="0.4"
                  src={code}
                  alt="code"
                  className="h-12 absolute z-20 code"
                />
                <img
                  data-depth="0.3"
                  src={reactFigma}
                  alt="react"
                  className="h-36 absolute z-20 react"
                />
                <img
                  data-depth="0.4"
                  src={lower}
                  alt="lower"
                  className="h-20 absolute z-20 lower"
                />
                <img
                  data-depth="0.3"
                  src={dots2}
                  alt="dots2"
                  className="absolute z-10 dots"
                />
                <img
                  data-depth="0.3"
                  src={shapes}
                  alt="shapes"
                  className="absolute z-10 shapes"
                />
              </div>
            </>
          ) : (
            <>
              <img src={smHero3} alt="Akarsh" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
