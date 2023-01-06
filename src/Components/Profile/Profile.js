import React from 'react'
import DefaultDP from "../../Images/User2.png" 
import "./Profile.css"
import { useSelector } from 'react-redux'

const Profile = () => {
  const {loading,UserDetail} = useSelector(state=>state.userDetail)
  

  

  return (
    <>
    <div className='UserCard'>
        <img src={UserDetail?UserDetail.data.data.avatar:DefaultDP} alt="User Profile Image" title="User"/>
        <p>User ID - {UserDetail?UserDetail.data.data.id:"Unknown"}</p>
    </div>
    </>
  )
}

export default Profile