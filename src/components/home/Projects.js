import { useRef, useEffect } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import nearme from "../../images/project/nearme.png";
import chalo from "../../images/project/chalo.png";
import spotify from "../../images/project/spotify.png";
import dltlabs from "../../images/project/dltlabs.png";
import react from "../../images/project/react.svg";
import tailwind from "../../images/project/tailwind.svg";
import sass from "../../images/project/Sass.svg";
import next from "../../images/project/next.svg";
import styled from "../../images/project/styled.svg";
import tailLogo from "../../images/project/tailImage.png";

const Project = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".animItem"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".project-wrapper"),
      start: "80px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="mb-16 md:pb-32 select-none"
      id="projects"
      ref={targetSection}
    >
      <div className="project-wrapper">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-sm md:text-md py-2 font-medium text-gray-300 animItem">
              PROJECT
            </h1>
            <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 animItem">
              My Recent Projects
            </h1>
            <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400 animItem">
              I have contributed in over 10+ projects ranging from Front-end
              development <br /> to web design.
            </p>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-end space-y-6 md:justify-start md:items-end">
            <a
              href="https://nearme-psi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="nearme px-4 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center ">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={nearme}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  NEAR ME
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <div className="relative">
                    <img src={tailwind} alt="logo" />
                    <img
                      src={tailLogo}
                      alt="tail"
                      className="absolute tailwind"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://chalo.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="cryptinfo px-4 py-6 rounded-lg flex flex-col space-y-8  justify-center items-center">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={chalo}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  ROUTE TRACKER
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <div className="relative">
                    <img src={tailwind} alt="logo" />
                    <img
                      src={tailLogo}
                      alt="tail"
                      className="absolute tailwind"
                    />
                  </div>
                  {/* <img src={sass} alt="Sass logo" /> */}
                </div>
              </div>
            </a>
            <a
              href="https://my-studio-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="spotify px-4 md:px-2 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center">
                <img
                  className="h-44 md:h-48 rounded object-cover object-center"
                  src={spotify}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  STUDIO GHIBLI
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <img src={sass} alt="Sass logo" />
                </div>
              </div>
            </a>
            <a
              href="https://www.dltlabs.com/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="dltlabs px-4 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={dltlabs}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  FASHINZA WEBSITE
                </h2>
                <div className="flex space-x-2">
                  <img src={next} alt="Next logo" />
                  <img src={styled} alt="Styled logo" />
                  <img src={sass} alt="Sass logo" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
