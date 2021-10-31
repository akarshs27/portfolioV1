import { useRef, useEffect } from "react";
import nearme from "../../images/project/nearme.png";
import cryptinfo2 from "../../images/project/cryptinfo2.png";
import spotify from "../../images/project/spotify.png";
import dltlabs from "../../images/project/dltlabs.png";
import react from "../../images/project/react.svg";
import tailwind from "../../images/project/tailwind.svg";
import sass from "../../images/project/Sass.svg";
import redux from "../../images/project/Redux.svg";
import angular from "../../images/project/Angular.svg";
import gsapI from "../../images/project/GSAP.svg";
import ant1 from "../../images/project/ant1.svg";
import tailLogo from "../../images/project/tailImage.png";
import antLogo from "../../images/project/antLogo.png";
import gsapImage from "../../images/project/gsapImage.png";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
              href="https://cryptinfo.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110 link animItem"
            >
              <div className="cryptinfo px-4 py-6 rounded-lg flex flex-col space-y-8  justify-center items-center">
                <img
                  className="h-48 rounded object-cover object-center"
                  src={cryptinfo2}
                  alt="content"
                />
                <h2 className="text-xl text-gray-100 font-medium title-font">
                  CRYPTINFO
                </h2>
                <div className="flex space-x-2">
                  <img src={react} alt="React logo" />
                  <div className="relative">
                    <img src={ant1} alt="Ant logo" />
                    <img src={antLogo} alt="tail" className="absolute ant" />
                  </div>
                  <img src={redux} alt="Redux logo" />
                </div>
              </div>
            </a>
            <a
              href="https://my-spotify-ochre.vercel.app/"
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
                  DLT LABS WEBSITE
                </h2>
                <div className="flex space-x-2">
                  <img src={angular} alt="Angular logo" />
                  <div className="relative">
                    <img src={gsapI} alt="Gsap logo" />
                    <img src={gsapImage} alt="tail" className="absolute gsap" />
                  </div>
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
