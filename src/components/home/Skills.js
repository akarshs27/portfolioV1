import { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import javas from "../../images/skills/javas.svg";
import react from "../../images/skills/react.svg";
import redux from "../../images/skills/redux.svg";
import css from "../../images/skills/css.svg";
import gsapI from "../../images/skills/gsap.svg";
import html from "../../images/skills/html.svg";
import sass from "../../images/skills/sass.svg";
import styled from "../../images/skills/styled.svg";
import tailwind from "../../images/skills/tailwind.svg";
import figma from "../../images/skills/figma.svg";
import ai from "../../images/skills/ai.svg";
import photoshop from "../../images/skills/photoshop.svg";
import nextjs from "../../images/skills/nextjs.svg";
import typescript from "../../images/skills/typescript.svg";
import tailImage from "../../images/project/tailImage.png";
import gsapImage from "../../images/project/gsapImage.png";
import styledImage from "../../images/project/styledImage.png";

const Skills = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".animItem"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="pb-16 md:pb-32 select-none"
      id="skills"
      ref={targetSection}
    >
      <div className="skills-wrapper">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-6">
          <div className="flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
            <h1 className="text-sm md:text-md py-2 font-medium text-gray-300 animItem">
              SKILLS
            </h1>
            <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 animItem">
              My Skills
            </h1>
            <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400 animItem">
              I try to take responsibility to craft interactive user experience
              using <br />
              modern frontend architecture
            </p>
          </div>
        </div>
        <div className="container mx-auto flex px-5 flex-col mb-4 space-y-4">
          <h1 className="tracking-wide text-base text-center md:text-lg md:text-left mb-4 font-medium text-gray-100 animItem">
            FRONTEND DEVELOPMENT
          </h1>
          <div className="flex flex-row flex-wrap items-center pb-4 justify-center md:justify-start md:space-x-4 animItem">
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={javas}
              alt="javas"
            />
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={react}
              alt="react"
            />
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={redux}
              alt="redux"
            />
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={nextjs}
              alt="nextjs"
            />
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={typescript}
              alt="nextjs"
            />
             <div className="relative pr-2 mb-2">
              <img className="h-12 md:h-16 block" src={styled} alt="styled" />
              <img
                className="h-12  absolute styled md:h-16 block"
                src={styledImage}
                alt="styled"
              />
            </div>
               <div className="relative pr-2 mb-2">
              <img className="h-12 md:h-16" src={tailwind} alt="tailwind" />
              <img
                className="h-12 absolute tail md:h-16 block"
                src={tailImage}
                alt="tailwind"
              />
            </div>
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={sass}
              alt="sass"
            />
            <div className="relative pr-2 mb-2">
              <img className="h-12  md:h-16" src={gsapI} alt="gsap logo" />
              <img
                className="h-12  absolute gsapSkills md:h-16 block"
                src={gsapImage}
                alt="gsap"
              />
            </div>
            <img
              className="h-12 pr-2 mb-2 md:h-16 block"
              src={html}
              alt="html"
            />
            <img className="h-12 pr-2 mb-2 md:h-16 block" src={css} alt="css" />
          </div>
        </div>
        <div className="container mx-auto flex px-5 flex-col mb-4">
          <h1 className="tracking-wide text-base text-center md:text-lg md:text-left mb-6 font-medium text-gray-100 animItem">
            USER INTERFACE/USER EXPERIENCE DESIGN
          </h1>
          <div className="flex flex-row items-center justify-center md:justify-start space-x-2 md:space-x-6 animItem">
            <img className="h-12 md:h-16 block" src={figma} alt="javas" />
            <img className="h-12 md:h-16 block" src={ai} alt="javas" />
            <img className="h-12 md:h-16 block" src={photoshop} alt="javas" />
          </div>
        </div>
        {/* <div className="container mx-auto flex px-5 flex-col ">
        <h1 className="sm:text-md text-md mb-4 font-medium text-gray-200">
         OTHER SKILLS
        </h1>
        <div className="flex flex-row space-x-6">
            <img className="h-16" src={javas} alt="javas" />
            <img className="h-16" src={javas} alt="javas" />
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Skills;
