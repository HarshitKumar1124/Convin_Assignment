import React from 'react'
import DP from "../../Images/User1.jpg"
import "./UserCorousel.css"

const UserCard = () => {
  return (
    <>
    <div className='userCard'>
      
        <img src={DP} alt="UserProfile" title="UserName"/>
      
        <div>
            <h4>Sarah Hosten</h4>
            <p style={{fontWeight:"200"}}>Business Development</p>
        </div>
    </div>
    </>
  )
}

export default UserCard