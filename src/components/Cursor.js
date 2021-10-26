import { useEffect, useRef } from 'react';
import './Cursor.scss';
import { gsap, Linear } from "gsap";

const Cursor = () => {

    const cursorEl = useRef(null);
    const followerEl = useRef(null);

    useEffect(() => {

      const moveCircle = (e) => {
        gsap.to(cursorEl.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: Linear.easeNone,
        });
        gsap.to(followerEl.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: Linear.easeNone,
        });
      };

      const hoverFunc = (e) => {
        gsap.to(cursorEl.current, {
          scale: 0.7,
          duration: 0.3,
        });
        gsap.to(followerEl.current, {
          scale: 2.5,
          duration: 0.3,
        });
      };

      const unhoverFunc = (e) => {
        gsap.to(cursorEl.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(followerEl.current, {
          scale: 1,
          duration: 0.3,
        });
      };


      document.addEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hoverFunc);
        el.addEventListener("mouseleave", unhoverFunc);
      });

    },[cursorEl, followerEl])

    return (
        <>
           <div className="z-50 cursor fixed inset-0  bg-white select-none pointer-events-none" ref={cursorEl}></div> 
           <div className="z-50 follower fixed inset-0  bg-gray-400 opacity-20 border border-gray-200 select-none pointer-events-none" ref={followerEl}></div> 
        </>
    )
}

export default Cursor
