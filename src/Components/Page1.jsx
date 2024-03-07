import { useEffect } from "react";


const page1 = () => {
  return (
    <>
      <div className="page1 overflow-hidden">
        <div class="center">
          <div class="left w-64">
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="profile w-64 h-[40vh] bg-red-400 rounded-md z-[9] relative overflow-hidden"
            >
              <img
                className="w-full relative -top-24 object-cover"
                src="./assets/pfl.jpg"
                alt=""
              />
            </div>
            <h3 className="shablu w-full text-xl py-4">
              Hi my name is raju and <br /> I am a passianate fullStack
              Web-developer
            </h3>
          </div>
          <div class="right">
            <h1 data-scroll data-scroll-speed="0.4" className="relative top-5">
              SPACES <br />
              THAT <br />
              INSPIRE
            </h1>
          </div>
        </div>
        <div class="hero">
          <div class="hero1"></div>
          <div class="hero2"></div>
          <div class="hero3"></div>
        </div>
        <div>
          <video
            id="video"
            muted
            autoPlay
            loop
            src="./assets/video.mp4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default page1;
