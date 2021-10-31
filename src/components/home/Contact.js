import { EMAIL } from "../../data/constants";
import behance from "../../images/contact/behance.svg";
import codepen from "../../images/contact/codepen.svg";
import dribble from "../../images/contact/dribble.svg";
import github from "../../images/contact/github.svg";
// import instagram from "../images/contact/instagram.svg";
import linkedin from "../../images/contact/linkedin.svg";
import twitter from "../../images/contact/twitter.svg";
import Button from "../common/Button";
import resume from "../../images/Akarsh_Resume.pdf";

const Contact = () => {
  return (
    <section className="pb-16 md:pb-36 select-none" id="contacts">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="text-sm md:text-md py-2 font-medium text-gray-300">
            CONTACT
          </h1>
          <h1 className="tracking-wide text-2xl md:text-4xl mb-4 font-bold nameAnimation2 ">
            Get In Touch
          </h1>
          <p className="leading-relaxed tracking-wider text-base md:text-lg font-medium text-gray-400">
            Don't be a stranger. Connect with me online.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex px-5 md:flex-row flex-wrap flex-col items-center">
        <div className="flex flex-wrap flex-none space-x-4 md:space-x-12 items-center md:pt-12">
          <a className="block opacity-90 link"  href="https://github.com/akarshs27" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-10" src={github} alt="github" />
          </a>
          <a className="block opacity-90 link" href="https://www.linkedin.com/in/akarsh-srivastava-5b1507149/" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-10" src={linkedin} alt="linkedin" />
          </a>
          <a className="block opacity-90 link" href="https://codepen.io/akarshs27" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-10" src={codepen} alt="codepen" />
          </a>
          <a className="block opacity-90 link" href="https://www.behance.net/akarshs272077" target="_blank" rel="noreferrer">
            <img className="h-5 md:h-9" src={behance} alt="behance" />
          </a>
          <a className="block opacity-90 link" href="https://dribbble.com/Akarshs27" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-11" src={dribble} alt="dribble" />
          </a>
          {/* <a className="block opacity-90 link" href="https://github.com/akarshs27" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-10 link" src={instagram} alt="instagram" />
          </a> */}
          <a className="block opacity-90" href="https://twitter.com/rioshanem28" target="_blank" rel="noreferrer">
            <img className="h-6 md:h-10 link" src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-12 flex-row items-center space-x-4 justify-center md:justify-start">
       <Button name="Resume" href={resume} />
      <Button name="Say Hello" href={"mailto:" + EMAIL}/> 
      </div>
    </section>
  );
};

export default Contact;
