import { useRef } from "react"
import logo from "../images/logo.svg"
import './Navbar.scss';
import { links } from "../data/data";

const Navbar = () => {
    const hamEl = useRef(null);
    const overlayEl = useRef(null);
    const linksEl = useRef(null);

    const toggleHum = () => {
        hamEl.current.classList.toggle('active');
        overlayEl.current.classList.toggle('active');
        linksEl.current.classList.toggle('active');
    }

    const onLinkClicked = (e) => {
        e.preventDefault();
        toggleHum();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80,
            behavior: "smooth"
        })
    }

    return (
        <section>
            <div className="navbar w-full fixed top-0 mx-auto flex px-8  md:px-24  py-2 md:py-4 md:flex-row  items-center justify-between">
                <a href="/" >
                    <img className ="h-6" src={logo} alt="akarsh-logo" />
                </a>
              
                <div ref={hamEl} className="relative w-12 h-12 border border-transparent outer" onClick= {toggleHum}>
                    <span className="" ></span>
                    <span className="" ></span>
                </div>
            </div>
            <div className="overlay" ref={overlayEl}></div>
            <div className="links flex flex-col space-y-6" ref={linksEl}> 
                
                    { links.map((link) => {
                        return (
                            <div className="link">
                            <a href={link.url} key={link.id} className="text-2xl tracking-wide font-semibold md:text-3xl" onClick={onLinkClicked}>{link.text}</a>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default Navbar
