import { BsCodeSlash } from "react-icons/bs";

const Performance = () => {
  const audio = new Audio("./assets/arijit.mp3");

  const Play = () => {
    audio.play();
    const video = document.getElementById("video");
    video.style.opacity = "1";
    video.style.left = "5px";
    const Video = document.getElementById("Video").play();
  };
  const Pause = () => {
    audio.pause();
    const video = document.getElementById("video");
    video.style.opacity = "0";
    video.style.left = "-20%";
    const Video = document.getElementById("Video").pause();
  };

  return (
    <>
      <div className="pperformance relative w-full items-center px-4 h-[40vh] my-6 rounded-md flex overflow-hidden bg-black/30">
        <div className="pvid w-48 h-20 flex justify-center absolute top-4 rounded-md flex-col font-bold">
          <h3>My favorate song Please hover on this to listen</h3>
          <button
            onMouseEnter={Play}
            onMouseLeave={Pause}
            className="p-2 w-32 rounded-md bg-red-500 hover:bg-red-600 relative flex items-center z-[99] gap-4"
          >
            Hover me <img width="20px" src="./assets/emo.png" alt="" />
          </button>
        </div>
        <div
          id="video"
          className="w-64 h-42 overflow-hidden opacity-0 relative left-[-20%] bottom-[-20%] rounded-md"
        >
          <video
            id="Video"
            muted
            className="w-full h-full"
            src="./assets/arijit.mp4"
          ></video>
        </div>
        <div className="pperfo h-full p-4 gap-4 flex items-center justify-center absolute right-0 w-[85%]">
          <div className="pperfor w-48 px-4 py-2 rounded-md border-2 border-black font-bold flex flex-col items-center">
            <span>
              <img className="w-10" src="./assets/coding.webp" alt="" />
            </span>
            <span className="text-xl font-900">5.5k+</span>
            <span className="text-sm font-900">Coding Hours</span>
          </div>
          <div className="pperfor w-48 px-4 py-2 rounded-md border-2 border-black font-bold flex flex-col items-center">
            <span>
              <img className="w-10" src="./assets/headphone.webp" alt="" />
            </span>
            <span className="text-xl font-900">6.4k+</span>
            <span className="text-sm font-900">Songs listened</span>
          </div>
          <div className="pperfor w-48 px-4 py-2 rounded-md border-2 border-black font-bold flex flex-col items-center">
            <span>
              <img className="w-10" src="./assets/cup.webp" alt="" />
            </span>
            <span className="text-xl font-900">1.5k+</span>
            <span className="text-sm font-900">Cups of Coffees</span>
          </div>
          <div className="pperfor w-48 px-4 py-2 rounded-md border-2 border-black font-bold flex flex-col items-center">
            <span>
              <img className="w-10" src="./assets/handshake.webp" alt="" />
            </span>
            <span className="text-sm font-900">Happy Clients</span>
            <span className="font-900 text-xl"> 2 +</span>
          </div>
          <div className="pperfor w-48 px-4 py-2 rounded-md border-2 border-black font-bold flex flex-col items-center">
            <span>
              <img className="w-10" src="./assets/projects.webp" alt="" />
            </span>
            <span className="text-sm font-900">Projects Earned</span>
            <span className="text-xl font-900">2 +</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
