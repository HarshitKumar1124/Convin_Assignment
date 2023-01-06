import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import UserCard from "./UserCard.js";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import "./UserCorousel.css";

import SwiperCore, { Pagination, Navigation, Mousewheel } from "swiper/core";
import axios from "axios";

import { getAllUsers } from "../../Redux_Operations/ReducerAction.js";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "@material-ui/core/Button";

SwiperCore.use([Pagination, Navigation, Mousewheel]);

const UserCorousel = () => {
  const [ActiveStatus, setActive] = useState(false);

  const dispatch = useDispatch();

  const [AllUser, setAllUser] = useState([]);

  const [Page,SetPage] = useState(1);

  const { loading, AllUsers } = useSelector((state) => state.getUsers);

  console.log(AllUsers);

  const APICall = async () => {
    
    
    dispatch(getAllUsers(Page));

    if (loading == false) setAllUser(AllUsers.data);
  };

  useEffect(() => {

    APICall();
  }, [loading,Page,AllUsers]);

  return (
    <>
      {
        AllUsers ?( AllUsers.page!=AllUsers.total_pages?<Button onClick={()=>{
          SetPage(Page+1);
        }} style={{backgroundColor:"dodgerblue",color:"white",margin:"1vmax"}}>Next Page {AllUsers.page}/{AllUsers.total_pages}</Button>:<Button onClick={()=>{
          SetPage(1);
        }} style={{backgroundColor:"dodgerblue",color:"white",margin:"1vmax"}}>First Page {AllUsers.page}/{AllUsers.total_pages}</Button>):<></>
      }

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        className="mySwiper SwiperContainer"
        mousewheel={true}
        pagination={{
          dynamicBullets: true,
          clickable:true
        }}
        style={{
          "--swiper-pagination-color": "dodgerblue",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-size": "1vmax",
          "--swiper-pagination-bullet-horizontal-gap": "1vmax"
        }}
        modules={[Navigation,Pagination]}
      >
        {AllUser ? (
          <>
            {AllUser.map((item) => {
              return (
                <SwiperSlide className="Slide slides" key={item.id}>
                  <UserCard userinfo={item} />
                </SwiperSlide>
              );
            })}
          </>
        ) : (
          <h4>No Users</h4>
        )}
      </Swiper>
    </>
  );
};

export default UserCorousel;
