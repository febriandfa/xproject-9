import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="w-full h-full px-4 lg:px-[8.2rem] relative z-20 pb-36">
      <div className="w-full lg:w-[55rem] mx-auto border-2 border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] p-2 lg:p-6 rounded">
        <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
          <SwiperSlide>
            <img className="object-cover w-full h-full lg:h-[30rem]" src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full lg:h-[30rem]" src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg" alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full lg:h-[30rem]" src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg" alt="slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
