import React from 'react'
import DefaultDP from "../../Images/User2.png" 
import "./Profile.css"

const Profile = () => {
  return (
    <>
    <div className='UserCard'>
        <img src={DefaultDP} alt="User Profile Image" title="User"/>
        <p>User ID - X</p>
    </div>
    </>
  )
}

export default Profile