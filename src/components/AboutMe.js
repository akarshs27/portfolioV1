
const AboutMe = () => {
  return (
    <section className="pb-16 md:pb-32 select-none" id="about">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
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
      <div className="container px-2 mx-auto flex md:px-5 md:flex-row flex-col items-center md:mt-8 about-back">
        <div className="">
        <h2 className="text-lg flex text-center text-gray-100 md:text-2xl md:text-left tracking-wider">
         Hello! My name is Akarsh and I enjoy creating things that live on the internet. I am a front-end developer and web designer with focus on crafting clean and user-friendly experiences.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
