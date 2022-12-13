import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/bundle"
// import "swiper/css/pagination";


const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //     delay: 3000,
        // }}
        // freeMode={{
        //     enabled: true,
        //     momentumBounce: false,
        //     momentumVelocityRatio: 0.5
        // }}
        navigation={true}
        modules={[FreeMode, Pagination, Autoplay, Navigation, Scrollbar ]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
