import nearme from "../images/project/nearme.png";
import cryptinfo2 from "../images/project/cryptinfo2.png";
import spotify from "../images/project/spotify.png";
import dltlabs from "../images/project/dltlabs.png";
import react from "../images/project/react.svg";
import tailwind from "../images/project/tailwind.svg";
import sass from "../images/project/Sass.svg";
import redux from "../images/project/Redux.svg";
import angular from "../images/project/Angular.svg";
import gsap from "../images/project/GSAP.svg";
import ant1 from "../images/project/ant1.svg";
import tailLogo from "../images/project/tailImage.png";
import antLogo from "../images/project/antLogo.png";
import gsapImage from "../images/project/gsapImage.png";

const Project = () => {
  return (
    <section className="mb-16 md:pb-28 select-none" id="projects">
      <div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-sm md:text-md py-2 font-medium text-gray-300">
              PROJECT
            </h1>
            <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 ">
              My Recent Projects
            </h1>
            <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400">
              I have contributed in over 10+ projects ranging from Front-end
              development <br /> to web design.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center items-end space-y-6 md:justify-start md:items-end">
          <a href="https://nearme-psi.vercel.app/" target="_blank" rel="noreferrer" className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110">
            <div className= "nearme px-4 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center ">
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
                  <img src={tailwind} alt="logo"/>
                  <img src={tailLogo} alt="tail" className="absolute tailwind" />
                </div>
              </div>
            </div>
          </a>
          <a href="https://cryptinfo.vercel.app/" target="_blank" rel="noreferrer" className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110">
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
          <a href="https://my-spotify-ochre.vercel.app/" target="_blank" rel="noreferrer" className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110">
            <div className="spotify px-2 py-6 rounded-lg flex flex-col space-y-8 justify-center items-center">
              <img
                className="h-48 rounded object-cover object-center"
                src={spotify}
                alt="content"
              />
              <h2 className="text-xl text-gray-100 font-medium title-font">
                MY SPOTIFY
              </h2>
              <div className="flex space-x-2">
                <img src={react} alt="React logo" />
                <img src={sass} alt="Sass logo" />
              </div>
            </div>
          </a>
          <a href="https://www.dltlabs.com/" target="_blank" rel="noreferrer" className="xl:w-1/4 md:w-1/2 p-4 transition duration-500 ease-in-out transform hover:scale-110">
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
                <img src={gsap} alt="Gsap logo" />
                <img src={gsapImage} alt="tail" className="absolute gsap" />
                </div>
                <img src={sass} alt="Sass logo" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
