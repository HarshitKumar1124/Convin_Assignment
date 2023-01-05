import axios from 'axios';
import React,{useRef,useEffect,useState} from 'react'
import DP from "../../Images/User1.jpg"
import "./UserCorousel.css"

const UserCard = ({userinfo}) => {

  const cardX = useRef(null);



  const userDetail=async()=>{

   

    cardX.current.style.background = "linear-gradient(#3E85F3,#184C9C)"

    const {data} = await axios.get(`https://reqres.in/api/users/${userinfo.id}`)

    console.log(data.data)

    //store in redux.
  }

  


   
 
  

  
  return (
    <>
    <div className='userCard'  ref={cardX} onClick={userDetail}>
      
        <img src={DP} alt="UserProfile" title={userinfo.first_name}/>
      
        <div>
            <h4>{userinfo.first_name}</h4>
            <p style={{fontWeight:"200"}}>Identification Code : {userinfo.id}</p>
        </div>
    </div>
    </>
  )
}

export default UserCard