import React from 'react'
import DefaultDP from "../../Images/User2.png" 
import "./Profile.css"
import { useSelector } from 'react-redux'

const Profile = () => {
  const {loading,UserDetail} = useSelector(state=>state.userDetail)
  

  

  return (
    <>
    <div className='UserCard'>
        <img src={UserDetail?UserDetail.data.data.avatar:DefaultDP} alt={UserDetail?`${UserDetail.data.data.first_name} Profile Image`:"Default Profile Pic"} title={UserDetail?`${UserDetail.data.data.first_name} Profile Image`:"Default Profile Pic"}/>
        <p>User ID - {UserDetail?UserDetail.data.data.id:"Unknown"}</p>
        {
          UserDetail?<></>:<p style={{fontSize:"1vmax"}}>If no user is selected from the below Corousel then the Default Profile image and input placeholders will be shown.<br/>Please choose the User</p>
        }
    </div>
    </>
  )
}

export default Profile