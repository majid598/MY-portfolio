import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Page.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className="page5">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href=""
            download=""
            className="px-5 py-3 text-white rounded-full border-[1px] border-white font-bold hover:bg-white/70 hover:text-black hover:scale-90 transition-all duration-300 absolute bottom-1/3"
          >
            Get Code
          </a>
          <img src="./assets/net.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          //{" "}
          <a
            href=""
            download=""
            className="px-5 py-3 text-black rounded-full border-[1px] border-black font-bold hover:bg-black/70 hover:text-white hover:scale-90 transition-all duration-300 absolute bottom-1/3"
          >
            Get Code
          </a>
          <img src="./assets/my-web.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a
            href=""
            download=""
            className="px-5 py-3 text-white rounded-full border-[1px] border-white font-bold hover:bg-white/70 hover:text-black hover:scale-90 transition-all duration-300 absolute bottom-1/3"
          >
            Get Code
          </a>
          <img src="./assets/insta.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a
            href=""
            download=""
            className="px-5 py-3 text-white rounded-full border-[1px] border-white font-bold hover:bg-white/70 hover:text-black hover:scale-90 transition-all duration-300 absolute bottom-1/3"
          >
            Get Code
          </a>
          <img src="./assets/spotify.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a
            href=""
            download=""
            className="px-5 py-3 text-white rounded-full border-[1px] border-white font-bold hover:bg-white/70 hover:text-black hover:scale-90 transition-all duration-300 absolute bottom-1/3"
          >
            Get Code
          </a>
          <img src="./assets/net.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
