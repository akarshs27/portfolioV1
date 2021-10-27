import javas from "../../images/skills/javas.svg";
import react from "../../images/skills/react.svg";
import redux from "../../images/skills/redux.svg";
import angular from "../../images/skills/angular.svg";
import css from "../../images/skills/css.svg";
import gsap from "../../images/skills/gsap.svg";
import html from "../../images/skills/html.svg";
import sass from "../../images/skills/sass.svg";
import styled from "../../images/skills/styled.svg";
import tailwind from "../../images/skills/tailwind.svg";
import figma from "../../images/skills/figma.svg";
import ai from "../../images/skills/ai.svg";
import photoshop from "../../images/skills/photoshop.svg";
import tailImage from "../../images/project/tailImage.png";
import gsapImage from "../../images/project/gsapImage.png";
import styledImage from "../../images/project/styledImage.png";

const Skills = () => {

  return (
    <section  className="pb-16 md:pb-32 select-none" id="skills">
      <div >
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center mb-6">
          <div className="flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
            <h1 className="text-sm md:text-md py-2 font-medium text-gray-300">
              SKILLS
            </h1>
            <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 ">
              My Skills
            </h1>
            <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400">
              I try to take responsibility to craft aesthetic user experience
              using <br />
              modern frontend architecture
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex px-5 flex-col mb-4 space-y-4">
        <h1 className="tracking-wide text-base text-center md:text-lg md:text-left mb-4 font-medium text-gray-100">
          FRONTEND DEVELOPMENT
        </h1>
        <div className="flex flex-row flex-wrap items-center pb-4 justify-center md:justify-start md:space-x-4 ">
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
            src={angular}
            alt="angular"
          />
          <img className="h-12 pr-2 mb-2 md:h-16 block" src={sass} alt="sass" />
          <div className="relative pr-2 mb-2">
            <img className="h-12  md:h-16" src={gsap} alt="gsap" />
            <img
              className="h-12  absolute gsapSkills md:h-16 block"
              src={gsapImage}
              alt="gsap"
            />
          </div>
          <div className="relative pr-2 mb-2">
            <img className="h-12 md:h-16 block" src={styled} alt="styled" />
            <img
              className="h-12  absolute styled md:h-16 block"
              src={styledImage}
              alt="styled"
            />
          </div>

          <img className="h-12 pr-2 mb-2 md:h-16 block" src={html} alt="html" />
          <img className="h-12 pr-2 mb-2 md:h-16 block" src={css} alt="css" />
        </div>
      </div>
      <div className="container mx-auto flex px-5 flex-col mb-4">
        <h1 className="tracking-wide text-base text-center md:text-lg md:text-left mb-6 font-medium text-gray-100">
          USER INTERFACE/USER EXPERIENCE DESIGN
        </h1>
        <div className="flex flex-row items-center justify-center md:justify-start space-x-2 md:space-x-6">
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
    </section>
  );
};

export default Skills;
