import { useEffect, useRef } from "react";
import logo from "../../images/logo.svg";
import "./Navbar.scss";
import { links } from "../../data/constants";
import { gsap, Linear } from "gsap";

const Navbar = () => {
  const hamEl = useRef(null);
  const overlayEl = useRef(null);
  const linksEl = useRef(null);
  const logoEl = useRef(null);
  const targetSection = useRef(null);
  const overlaySectionEl = useRef(null);

  const toggleHum = () => {
    hamEl.current.classList.toggle("active");
    if (overlaySectionEl.current.classList.contains("overlay-index")) {
      overlaySectionEl.current.classList.remove("overlay-index");
    } else {
      overlaySectionEl.current.classList.add("overlay-index");
    }
    overlayEl.current.classList.toggle("active");
    linksEl.current.classList.toggle("active");
  };

  const onLinkClicked = (e) => {
    e.preventDefault();
    hamEl.current.classList.toggle("active");
    overlaySectionEl.current.classList.remove("overlay-index");
    overlayEl.current.classList.toggle("active");
    linksEl.current.classList.toggle("active");
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 1 })
      .from(
        targetSection.current.querySelectorAll(".animItem"),
        { opacity: 0, duration: 1, stagger: 0.5 },
        "<"
      );
  }, [targetSection]);

  return (
    <section>
      <div ref={targetSection}>
        <div className="navbar w-full fixed top-0 mx-auto flex px-8 md:px-24 2xl:px-44 py-2 md:py-4 md:flex-row  items-center justify-between">
          <a href="/#home" ref={logoEl} className="link cursor-none animItem">
            <img className="h-6" src={logo} alt="akarsh-logo" />
          </a>
          <div
            ref={hamEl}
            className="relative w-12 h-12 border border-transparent outer link cursor-none animItem"
            onClick={toggleHum}
          >
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
      </div>

      <div className="overlay-section" ref={overlaySectionEl}>
        <div className="overlay" ref={overlayEl}></div>

        <div className="links flex flex-col space-y-6" ref={linksEl}>
          {links.map((link) => {
            return (
              <div className="link">
                <a
                  href={link.url}
                  key={link.id}
                  className="text-2xl tracking-wide font-semibold md:text-3xl"
                  onClick={onLinkClicked}
                >
                  {link.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
