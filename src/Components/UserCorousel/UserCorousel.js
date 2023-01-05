import React,{useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import UserCard from "./UserCard.js"

import "swiper/swiper.min.css";
import "swiper/css/pagination"
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

import "./UserCorousel.css"

import SwiperCore, { Pagination, Navigation,Mousewheel } from "swiper/core";
import axios from "axios";


SwiperCore.use([Pagination, Navigation,Mousewheel]);

const UserCorousel = () => {

  const [ActiveStatus,setActive]= useState(false)

  const [AllUser,setAllUser] = useState([]);


  const APICall=async()=>{

    const {data} = await axios.get('https://reqres.in/api/users')

    console.log(data.data)

    if(data.data)
    setAllUser(data.data)


  }
  
  useEffect(() => {

    APICall();

  }, [])
  




  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        className="mySwiper SwiperContainer"
        mousewheel={true}
       
        
      >

        {AllUser ?<>
          {
            AllUser.map((item)=> {return <SwiperSlide className="Slide slides" key={item.id}  ><UserCard userinfo={item}  /></SwiperSlide>})
          }
        </>:<h4>No Users</h4>
        }
        
       
      
      </Swiper>

     
    </>
  );
};

export default UserCorousel;
