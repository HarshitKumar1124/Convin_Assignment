import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import DP from "../../Images/User1.jpg";
import "./UserCorousel.css";
import { getUserDetails } from "../../Redux_Operations/ReducerAction";
import { useDispatch } from "react-redux";



const UserCard = ({ userinfo }) => {
  const dispatch = useDispatch();

  const cardX = useRef(null);

 
  const userDetail = async () => {
    let arr_obj = document.getElementsByClassName("userCard");

  

    for (var i = 1; i <= arr_obj.length; i++) {
      arr_obj[i - 1].style.background = "transparent";
    }

    // console.log(arr_obj[0])

    cardX.current.style.background = "linear-gradient(#3E85F3,#184C9C)";

    console.log(userinfo.id);

    dispatch(getUserDetails(userinfo.id));

    console.log("done");
  };

  return (
    <>
      <div className="userCard" ref={cardX} onClick={userDetail}>
        <img src={DP} alt="UserProfile" title={userinfo.first_name} />

        <div>
          <h4>{userinfo.first_name}</h4>
          <p style={{ fontWeight: "200" }}>
            Identification Code : {userinfo.id}
          </p>
        </div>
      </div>
     
    </>
  );
};

export default UserCard;
