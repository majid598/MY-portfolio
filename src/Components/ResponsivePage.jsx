import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import FaArrowRightLong from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './responsive.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
<div className="responsive-page h-[60vh] bg-[#EFEAE3] relative">
{/* <div > */}
<h1 className="pro absolute text-xl z-[99] px-4 py-2 flex gap-2 items-center font-bold ml-4 top-0">Projects </h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        // width={300}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
   <SwiperSlide><img src="./assets/net.jpg" alt="" />
<a target="_blank" href='https://github.com/majid598/NetfixByRaju.git' className="viewp absolute bg-transparent border-[1px] border-white text-white hover:bg-white hover:text-black bottom-1/3 text-sm font-bold transition-all duration-300 rounded-full px-5 py-3">view project ?</a>
</SwiperSlide>
<SwiperSlide><img src="./assets/p4.jpg" alt="" />
<a target="_blank" href='' className="viewp absolute bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white bottom-1/3 text-sm font-bold transition-all duration-300 rounded-full px-5 py-3">view project ?</a>
</SwiperSlide>
<SwiperSlide><img src="./assets/insta.jpg" alt="" />
<a target="_blank" href='https://github.com/majid598/instagram-clone.git' className="viewp absolute bg-transparent border-[1px] border-white text-white hover:bg-white hover:text-black bottom-1/3 text-sm font-bold transition-all duration-300 rounded-full px-5 py-3">view project ?</a>
</SwiperSlide>
<SwiperSlide><img src="./assets/my-web.png" alt="" />
<a target="_blank" href='' className="viewp absolute bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white bottom-1/3 text-sm font-bold transition-all duration-300 rounded-full px-5 py-3">view project ?</a>
</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}



