import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import cricket1 from "../../../../assets/images/cricket1.jpg";
import football from "../../../../assets/images/football.jpeg";
import football2 from "../../../../assets/images/football2.png";
import football1 from "../../../../assets/images/football1.jpg";
import badminton from "../../../../assets/images/badminton.jpg";
import bollyball from "../../../../assets/images/bollyball.jpeg";
import hockey from "../../../../assets/images/hockey.jpg";
import tennis from "../../../../assets/images/tennis.jpeg";
import golf from "../../../../assets/images/golf.jpg";

const Slider = () => {
  const [swiperConfig, setSwiperConfig] = useState({
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      clickable: true,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; 
      if (isMobile) {
        setSwiperConfig({
          slidesPerView: 1, 
          pagination: {
            clickable: true,
          },
        });
      } else {
        setSwiperConfig({
          slidesPerView: 2,
          spaceBetween: 0,
          freeMode: true,
          pagination: {
            clickable: true,
          },
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#081229]">
      <Swiper {...swiperConfig} className="mySwiper">
        <SwiperSlide>
          <img
            className="w-full h-[70vh]  opacity-50  lg:h-[100vh] "
            src={cricket1}
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[70vh] opacity-50  lg:h-[100vh] "
            src={football}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[70vh]  opacity-50 lg:h-[100vh] "
            src={badminton}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[70vh] opacity-50 lg:h-[100vh]"
            src={bollyball}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[70vh] opacity-50  lg:h-[100vh]"
            src={hockey}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[70vh] opacity-50 lg:h-[100vh]"
            src={tennis}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[70vh] opacity-50 lg:h-[100vh]"
            src={golf}
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
