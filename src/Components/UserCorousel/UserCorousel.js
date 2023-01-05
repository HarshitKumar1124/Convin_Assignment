import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import UserCard from "./UserCard.js"

import "swiper/swiper.min.css";
import "swiper/css/pagination"
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import "./UserCorousel.css"

import SwiperCore, { Pagination, Navigation,Mousewheel } from "swiper/core";


SwiperCore.use([Pagination, Navigation,Mousewheel]);

const UserCorousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        className="mySwiper SwiperContainer"
        mousewheel={true}
       
        
      >
        <SwiperSlide className="Slide " ><UserCard/></SwiperSlide>
        <SwiperSlide className="Slide active " ><UserCard/></SwiperSlide>
        <SwiperSlide className="Slide " ><UserCard/></SwiperSlide>
        <SwiperSlide className="Slide " ><UserCard/></SwiperSlide>
      
      </Swiper>

     
    </>
  );
};

export default UserCorousel;
