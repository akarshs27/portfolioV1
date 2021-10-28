import { useEffect } from "react";
import img1 from "../../images/about/img1.jpg";
import hoverEffect from "hover-effect";
import overlay from "../../images/about/overlay.png";

const AboutMe = () => {
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: 0.3,
      image1: img1,
      image2: img1,
      displacementImage: overlay,
    });
  });

  return (
    <section
      class="text-gray-400 body-font pb-16 md:pb-40 select-none"
      id="about"
    >
      <div class="container mx-auto flex px-5  py-4 md:flex-row flex-col items-center">
        <div className="flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="text-sm md:text-md py-2 font-medium text-gray-300">
            KNOW ME
          </h1>
          <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 ">
            About Me
          </h1>
          <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400">
            A little something
          </p>
        </div>
      </div>
      <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-lg flex text-center text-gray-200 md:text-xl md:text-left tracking-wider">
            Hello! My name is Akarsh and I enjoy creating things that live on
            the internet. I am a front-end developer and web designer focussed
            on crafting clean and user-friendly experiences. 
          </h2>
          <br/>
          <h2 className="text-lg flex text-center text-gray-200 md:text-xl md:text-left tracking-wider">
          I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
          I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
          </h2>

        </div>
        <div class="px-4 lg:max-w-lg lg:w-full md:w-1/2  flex items-center justify-center">
          <div className="h-36 w-36 object-cover object-center md:h-64 md:w-64 item-image rounded overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
