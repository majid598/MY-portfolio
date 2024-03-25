import { Component } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import Shery from 'sheryjs';

const paje3 = () => {
  const Handle = () => {
    const fix = document.getElementById("fix");
    fix.style.display = "block";
    const elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", () => {
        var image = e.getAttribute("data-image");
        fix.style.backgroundImage = `url(${image})`;
      });
    });
  };
  const Handled = () => {
    const fix = document.getElementById("fix");
    fix.style.display = "none";
  };

  return (
    <>
      <div id="fix" className="fixed-image z-[999]"></div>
      <div class="page3">
        <div
          onMouseEnter={Handle}
          onMouseLeave={Handled}
          class="elem-container"
        >
          <div
            id="elem1"
            className="elem dark:text-white"
            data-image="./assets/net.jpg"
          >
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href="https://github.com/majid598/NetfixByRaju.git"
            >
              NEFLIX ClONE
            </a>
          </div>
          <div class="elem" data-image="./assets/diamond.png">
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href="https://diamondlabs.io/"
            >
              DIAMONDLABS
            </a>
          </div>
          <div class="elem" data-image="./assets/my-web.png">
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href=""
            >
              MY THIS WEBSITE
            </a>
          </div>
          <div class="elem" data-image="./assets/insta.jpg">
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href="https://github.com/majid598/instagram-clone.git"
            >
              INSTAGRAM CLONE
            </a>
          </div>
          <div class="elem" data-image="./assets/spotify.jpg">
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href=""
            >
              SPOTIFY CLONE
            </a>
          </div>
          <div class="elem" data-image="./assets/sherry.png">
            <div class="overlay"></div>
            <a
              target="_blank"
              className="ho relative text-[3vw] hover:text-white hover:scale-95 z-[99]"
              href="https://sherryjswebsite.netlify.app/"
            >
              SHERRY JS PROJECT
            </a>
          </div>
        </div>
        <a
          target="_blank"
          href="https://github.com/majid598"
          className="all-pro w-40"
        >
          <h2 className="relative z-[999] hover:text-white">All Projects</h2>
          <FaArrowRightLong className="ic text-2xl relative z-50" />
        </a>
      </div>
    </>
  );
};

export default paje3;
