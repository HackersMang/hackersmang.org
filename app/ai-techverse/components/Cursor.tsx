"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      gsap.to(cursor, { scale: 2 });
      const link = event.target as HTMLElement;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
        if (cursorText instanceof HTMLElement) {
          cursorText.style.display = "block";
        }
      }
    };

    const onMouseLeaveLink = (event: MouseEvent) => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText instanceof HTMLElement) {
        cursorText.style.display = "none";
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text"></span>
    </div>
  );
};

export default Cursor;
